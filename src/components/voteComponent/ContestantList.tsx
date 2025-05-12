import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { domAnimation, LazyMotion, m } from 'framer-motion';
import FingerprintJS from '@fingerprintjs/fingerprintjs';


interface ContestantVotes {
	contestantName: string;
	votes: number;
}

interface Category {
	_id: string;
	name: string;
	contestants: string[];
}

interface VoteResponse {
	categoryName: string;
	contestants: ContestantVotes[];
}
const ContestantList: React.FC = () => {
	const { categoryId } = useParams<{ categoryId: string }>();
	const navigate = useNavigate();
	const [category, setCategory] = useState<Category | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [voteError, setVoteError] = useState<string | null>(null);
	const [selectedContestant, setSelectedContestant] = useState<string | null>(
		null
	);
	const [fingerprint, setFingerprint] = useState<string | null>(null);
	const [ip, setIp] = useState<string | null>(null);
	const [isVoting, setIsVoting] = useState<boolean | null>(false);
	const [votingContestant, setVotingContestant] = useState<string | null>(null);
	const [votes, setVotes] = useState<Record<string, number>>({});

	useEffect(() => {
		const initFingerprint = async () => {
			try {
				const fp = await FingerprintJS.load();
				const result = await fp.get();
				setFingerprint(result.visitorId);
			} catch (err) {
				setError('Unable to verify your device. Please try again later.');
			}
		};

		const getIp = async () => {
			try {
				const response = await fetch('https://api.ipify.org?format=json');
				const data = await response.json();
				setIp(data.ip);
			} catch (err) {
				setError('Unable to verify your IP address. Please try again later.');
			}
		};

		initFingerprint();
		getIp();
	}, []);

	useEffect(() => {
		const fetchCategory = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					`https://our-lady-database.onrender.com/api/getAllCategory`
				);
				if (!response.ok) {
					throw new Error('Failed to fetch category');
				}
				const data: Category[] = await response.json();
				const currentCategory = data.find((cat) => cat._id === categoryId);


				if (!currentCategory) {
					throw new Error('Category not found');
				}

				setCategory(currentCategory);
				setError(null);

				try {
					const votesResponse = await fetch(
						'https://our-lady-database.onrender.com/api/getVotesByCategory'
					);
					if (!votesResponse.ok) {
						throw new Error('Failed to fetch votes');
					}
					const votesData: VoteResponse[] = await votesResponse.json();
					const categoryVotes = votesData.find(
						(cat) => cat.categoryName === currentCategory.name
					);

					if (categoryVotes) {
						const voteMap: Record<string, number> = {};
						categoryVotes.contestants.forEach((vote) => {
							voteMap[vote.contestantName] = vote.votes || 0;
						});
						setVotes(voteMap);
					}
					setVoteError(null);
				} catch (voteErr) {
					setVoteError(
						'Unable to fetch vote counts. The voting functionality may be limited.'
					);
					setVotes({});
				}
			} catch (err: any) {
				setError(err.message);
				setCategory(null);
			} finally {
				setIsLoading(false);
			}
		};

		fetchCategory();
	}, [categoryId]);

	const fetchVotes = async () => {
		try {
			const response = await fetch(
				'https://our-lady-database.onrender.com/api/getVotesByCategory'
			);
			if (!response.ok) {
				throw new Error('Failed to fetch votes');
			}
			const data: VoteResponse[] = await response.json();

			const categoryVotes = data.find(
				(cat) => cat.categoryName === category?.name
			);

			if (categoryVotes) {
				const voteMap: Record<string, number> = {};
				categoryVotes.contestants.forEach((vote) => {
					voteMap[vote.contestantName] = vote.votes || 0;
				});
				setVotes(voteMap);
			}
			setVoteError(null);
		} catch (err) {
			setVoteError(
				'Unable to refresh vote counts. The displayed votes may be outdated.'
			);
		}
	};

	const handleVote = async (contestant: string) => {
		if (!ip || !fingerprint) {
			setError('Unable to verify your device. Please try again later.');
			return;
		}
		setIsVoting(true);
		setVotingContestant(contestant);
		setError(null);

		try {
			const response = await fetch(
				'https://our-lady-database.onrender.com/api/vote',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						ip,
						fingerprint,
						categoryId,
						contestant,
					}),
				}
			);

			if (!response.ok) {
				const text = await response.text();
				try {
					const errorData = JSON.parse(text);
					throw new Error(errorData.message || 'Failed to submit vote');
				} catch (e) {
					throw new Error(text || 'Failed to submit vote');
				}
			}

			setSelectedContestant(contestant);
			await fetchVotes();
		} catch (err) {
			setError(
				(err as Error).message || 'Failed to submit vote. Please try again.'
			);
			setSelectedContestant(null);
		} finally {
			setIsVoting(false);
			setVotingContestant(null);
		}
	};

	if (isLoading) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
				<div className="flex justify-center items-center h-64">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
				<button
					onClick={() => navigate('/vote')}
					className="text-green-600 hover:text-green-700 font-medium"
				>
					← Back to Categories
				</button>
				<div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
					{error}
				</div>
			</div>
		);
	}

	if (!category) {
		return (
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
				<div className="text-center">
					<h2 className="text-2xl font-bold text-gray-900 mb-4">
						Category Not Found
					</h2>
					<p className="text-gray-600 mb-6">
						The category you're looking for doesn't exist.
					</p>
					<button
						onClick={() => navigate('/vote')}
						className="text-green-600 hover:text-green-700 font-medium"
					>
						← Back to Categories
					</button>
				</div>
			</div>
		);
	}

	return (
		<LazyMotion features={domAnimation}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
				<div className="mb-8">
					<button
						onClick={() => navigate('/vote')}
						className="text-green-600 hover:text-green-700 font-medium mb-4 inline-flex items-center"
					>
						<svg
							className="w-4 h-4 mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
						Back to Categories
					</button>

					{voteError && (
						<div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
							{voteError}
						</div>
					)}

					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						{category.name}
					</h1>
					<p className="text-gray-600">Vote for your favorite contestant</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
					{category.contestants.map((contestant, index) => (
						<m.div
							key={index}
							className={`relative bg-white rounded-xl shadow-sm border ${
								selectedContestant === contestant
									? 'border-green-500 ring-2 ring-green-500 ring-opacity-50'
									: 'border-gray-200 hover:border-green-300'
							} transition-all duration-300`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
						>
							<div className="p-6">
								<div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
									
									{/* {contestant.length > 1 ? <img src={ticket1} alt="contestant" className="w-16 h-16 rounded-full" /> : null} */}
									<span className="text-2xl text-green-600 font-semibold">

										{contestant.charAt(0).toUpperCase()}
									</span>
								</div>
								<h2 className="text-xl font-semibold text-gray-800 mb-2">
									{contestant}
								</h2>
								<p className="text-gray-600 mb-4">
									{votes[contestant] || 0} votes
								</p>
								<button
									onClick={() => handleVote(contestant)}
									disabled={isVoting || !!selectedContestant}
									className={`w-full px-4 py-2 rounded-lg font-medium ${
										isVoting && votingContestant === contestant
											? 'bg-gray-100 text-gray-400 cursor-not-allowed'
											: selectedContestant === contestant
											? 'bg-green-600 text-white'
											: 'bg-green-50 text-green-600 hover:bg-green-100'
									} transition-colors duration-300`}
								>
									{isVoting && votingContestant === contestant
										? 'Voting...'
										: selectedContestant === contestant
										? 'Voted! 🎉'
										: 'Vote'}
								</button>
							</div>
						</m.div>
					))}
				</div>
			</div>
		</LazyMotion>
	);
};

export default ContestantList;
