import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LoadingSpinner = () => (
	<svg
		className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		></circle>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>
);

const CreateCategory = () => {
	const [categoryData, setCategoryData] = useState({
		name: '',
		contestants: [''],
	});
	const [message, setMessage] = useState({ text: '', success: true });
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const handleNameChange = (e: any) => {
		setCategoryData((prev) => ({
			...prev,
			name: e.target.value,
		}));
	};

	const handleContestantChange = (index: any, value: any) => {
		const newContestants = [...categoryData.contestants];
		newContestants[index] = value;
		setCategoryData((prev) => ({
			...prev,
			contestants: newContestants,
		}));
	};

	const addContestant = () => {
		setCategoryData((prev) => ({
			...prev,
			contestants: [...prev.contestants, ''],
		}));
	};

	const removeContestant = (index: any) => {
		setCategoryData((prev) => ({
			...prev,
			contestants: prev.contestants.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const filteredContestants = categoryData.contestants.filter(
			(name) => name.trim() !== ''
		);

		if (filteredContestants.length < 2) {
			setMessage({ text: 'Please add at least 2 contestants', success: false });
			return;
		}

		const dataToSubmit = {
			name: categoryData.name,
			contestants: filteredContestants,
		};

		try {
			setIsLoading(true);
			setMessage({ text: '', success: true });
			const response = await fetch(
				'https://our-lady-database.onrender.com/api/createCategory',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataToSubmit),
				}
			);

			if (response.ok) {
				setMessage({ text: 'Category created successfully!', success: true });
				setTimeout(() => {
					navigate('/vote');
				}, 2000);
			} else {
				throw new Error('Failed to create category');
			}
		} catch (error) {
			setMessage({
				text: 'Failed to create category. Please try again.',
				success: false,
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto px-4 py-8 pt-[3rem]">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="bg-white rounded-lg shadow-md p-6"
			>
				<form onSubmit={handleSubmit}>
					<h1 className="text-3xl font-bold text-gray-800 mb-6">
						Create New Category
					</h1>

					<div className="mb-6">
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Category Name
						</label>
						<input
							id="name"
							name="name"
							value={categoryData.name}
							onChange={handleNameChange}
							required
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
						/>
					</div>

					<div className="mb-6">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Contestants
						</label>
						<div className="space-y-3">
							{categoryData.contestants.map((contestant, index) => (
								<div key={index} className="flex items-center gap-2">
									<input
										value={contestant}
										onChange={(e) =>
											handleContestantChange(index, e.target.value)
										}
										placeholder="Contestant name"
										required
										className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
										disabled={isLoading}
									/>
									{categoryData.contestants.length > 1 && !isLoading && (
										<button
											type="button"
											onClick={() => removeContestant(index)}
											className="p-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
										>
											✕
										</button>
									)}
								</div>
							))}
						</div>
						<motion.button
							type="button"
							onClick={addContestant}
							className="w-full mt-3 px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
							whileHover={{ scale: isLoading ? 1 : 1.02 }}
							whileTap={{ scale: isLoading ? 1 : 0.98 }}
							disabled={isLoading}
						>
							Add Contestant
						</motion.button>
					</div>

					<motion.button
						type="submit"
						className="w-full px-4 py-3 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
						whileHover={{ scale: isLoading ? 1 : 1.02 }}
						whileTap={{ scale: isLoading ? 1 : 0.98 }}
						disabled={isLoading}
					>
						{isLoading ? (
							<>
								<LoadingSpinner />
								Creating...
							</>
						) : (
							'Create Category'
						)}
					</motion.button>

					{message.text && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={`mt-4 p-4 rounded-md ${
								message.success
									? 'bg-green-50 text-green-800'
									: 'bg-red-50 text-red-800'
							}`}
						>
							{message.text}
						</motion.div>
					)}
				</form>
			</motion.div>
		</div>
	);
};

export default CreateCategory;
