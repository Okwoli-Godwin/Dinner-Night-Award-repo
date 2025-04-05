import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardBackspace } from 'react-icons/md';
import LoadingSpinner from '../loading/LoadingSpinner';
interface Category {
	_id: string;
	name: string;
	contestants: any[];
}

const CategoryList: React.FC = () => {
	const navigate = useNavigate();
	const [categories, setCategories] = useState<Category[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	// const [isDeleting, setIsDeleting] = useState<boolean>(false);
	const [deleteError, setDeleteError] = useState<string | null>(null);

	const fetchCategories = async () => {
		try {
			const response = await fetch(
				'https://our-lady-database.onrender.com/api/getAllCategory'
			);
			if (!response.ok) {
				throw new Error('Failed to fetch categories');
			}
			const data: Category[] = await response.json();
			setCategories(data);
			setError(null);
		} catch (err) {
			setError('Failed to load categories. Please try again later.');
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchCategories();
	}, []);

	// const handleDeleteCategory = async (
	// 	categoryId: string,
	// 	event: React.MouseEvent<HTMLButtonElement>
	// ) => {
	// 	event.stopPropagation();
	// 	setIsDeleting(true);
	// 	setDeleteError(null);

	// 	try {
	// 		const response = await fetch(
	// 			`https://our-lady-database.onrender.com/api/deleteCategory/${categoryId}`,
	// 			{
	// 				method: 'DELETE',
	// 			}
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error('Failed to delete category');
	// 		}
	// 		fetchCategories();
	// 	} catch (err) {
	// 		setDeleteError('Failed to delete category. Please try again.');
	// 	} finally {
	// 		setIsDeleting(false);
	// 	}
	// };

	if (isLoading) {
		return (
			<LoadingSpinner/>
		);
	}

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
			<div className="flex sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
				<div>
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
						Voting Categories
					</h1>
					<p className="text-gray-600">Select a category to vote in</p>
				</div>
				<motion.button
					onClick={() => navigate('/')}
					className="flex gap-2 items-center sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
				>
					<MdKeyboardBackspace size={20}/> Back
				</motion.button>
			</div>

			{(error || deleteError) && (
				<div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
					{error || deleteError}
				</div>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
				{categories.map((category, index) => (
					<motion.div
						key={category._id}
						className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-all duration-300"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
					>
						<div
							className="p-6 cursor-pointer relative"
							onClick={() => navigate(`/vote/contestantslist/${category._id}`)}
						>
							{/* <button
                                onClick={(e) => handleDeleteCategory(category._id, e)}
                                disabled={isDeleting}
                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button> */}
							<div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
								<span className="text-2xl text-green-600 font-semibold">
									{category.name.charAt(0).toUpperCase()}
								</span>
							</div>
							<h2 className="text-xl font-semibold text-gray-800 mb-2">
								{category.name}
							</h2>
							<p className="text-gray-600">
								{category.contestants.length} contestants
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default CategoryList;
