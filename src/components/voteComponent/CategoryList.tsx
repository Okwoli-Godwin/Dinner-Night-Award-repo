// import React, { useEffect, useState } from 'react';
// import { motion, } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const CategoryList = ()  => {
//     const navigate = useNavigate();
//     const [categories, setCategories] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [deleteError, setDeleteError] = useState(null);

//     const fetchCategories = async () => {
//         try {
//             const response = await fetch('https://our-lady-database.onrender.com/api/getAllCategory');
//             if (!response.ok) {
//                 throw new Error('Failed to fetch categories');
//             }
//             const data = await response.json();
//             setCategories(data);
//             setError(null);
//         } catch (err: any) {
//             setError('Failed to load categories. Please try again later.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCategories();
//     }, []);

//     const handleDeleteCategory = async (categoryId: any, event: any) => {
//         event.stopPropagation();
//         setIsDeleting(true);
//         setDeleteError(null);

//         try {
//             const response = await fetch(`https://our-lady-database.onrender.com/api/deleteCategory/${categoryId}`, {
//                 method: 'DELETE',
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to delete category');
//             }
//             fetchCategories();
//         } catch (err: any) {
//             setDeleteError('Failed to delete category. Please try again.');
//         } finally {
//             setIsDeleting(false);
//         }
//     };

//     if (isLoading) {
//         return (
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
//                 <div className="flex justify-center items-center h-64">
//                     <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
//             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
//                 <div>
//                     <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
//                         Voting Categories
//                     </h1>
//                     <p className="text-gray-600">
//                         Select a category to vote in
//                     </p>
//                 </div>
//                 <motion.button
//                     onClick={() => navigate('/categories/create')}
//                     className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                 >
//                     Create New Category
//                 </motion.button>
//             </div>

//             {(error || deleteError) && (
//                 <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-700">
//                     {error || deleteError}
//                 </div>
//             )}

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//                 {categories.map((category, index) => (
//                     <motion.div
//                         key={category._id}
//                         className="group bg-white rounded-xl shadow-sm border border-gray-200 hover:border-green-300 transition-all duration-300"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                     >
//                         <div className="p-6 cursor-pointer relative" onClick={() => navigate(`/contestants/${category._id}`)}>
//                             <button
//                                 onClick={(e) => handleDeleteCategory(category._id, e)}
//                                 disabled={isDeleting}
//                                 className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                             >
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                                 </svg>
//                             </button>
//                             <div className="w-16 h-16 bg-green-100 rounded-full mb-4 flex items-center justify-center">
//                                 <span className="text-2xl text-green-600 font-semibold">
//                                     {category.name.charAt(0).toUpperCase()}
//                                 </span>
//                             </div>
//                             <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                                 {category.name}
//                             </h2>
//                             <p className="text-gray-600">
//                                 {category.contestants.length} contestants
//                             </p>
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CategoryList;


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    const fetchCategories = async () => {
        try {
            const response = await fetch('https://our-lady-database.onrender.com/api/getAllCategory');
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

    const handleDeleteCategory = async (categoryId: string, event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setIsDeleting(true);
        setDeleteError(null);

        try {
            const response = await fetch(`https://our-lady-database.onrender.com/api/deleteCategory/${categoryId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete category');
            }
            fetchCategories();
        } catch (err) {
            setDeleteError('Failed to delete category. Please try again.');
        } finally {
            setIsDeleting(false);
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

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
            {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Voting Categories</h1>
                    <p className="text-gray-600">Select a category to vote in</p>
                </div>
                <motion.button
                    onClick={() => navigate('/categories/create')}
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Create New Category
                </motion.button>
            </div> */}

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
                        <div className="p-6 cursor-pointer relative" onClick={() => navigate(`/vote/contestantslist/${category._id}`)}>
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
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h2>
                            <p className="text-gray-600">{category.contestants.length} contestants</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CategoryList;




// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { domAnimation, LazyMotion, m } from 'framer-motion';
// import FingerprintJS from '@fingerprintjs/fingerprintjs';

// interface ContestantVotes {
//     contestantName: string;
//     votes: number;
// }

// interface Category {
//     _id: string;
//     name: string;
//     contestants: string[];
// }

// interface VoteResponse {
//     categoryName: string;
//     contestants: ContestantVotes[];
// }

// const ContestantList: React.FC = () => {
//     const { categoryId } = useParams<{ categoryId: string }>();
//     const navigate = useNavigate();
//     const [category, setCategory] = useState<Category | null>(null);
//     const [isLoading, setIsLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [voteError, setVoteError] = useState<string | null>(null);
//     const [selectedContestant, setSelectedContestant] = useState<string | null>(null);
//     const [fingerprint, setFingerprint] = useState<string | null>(null);
//     const [ip, setIp] = useState<string | null>(null);
//     const [isVoting, setIsVoting] = useState<boolean>(false);
//     const [votingContestant, setVotingContestant] = useState<string | null>(null);
//     const [votes, setVotes] = useState<Record<string, number>>({});

//     useEffect(() => {
//         const initFingerprint = async () => {
//             try {
//                 const fp = await FingerprintJS.load();
//                 const result = await fp.get();
//                 setFingerprint(result.visitorId);
//             } catch {
//                 setError('Unable to verify your device. Please try again later.');
//             }
//         };

//         const getIp = async () => {
//             try {
//                 const response = await fetch('https://api.ipify.org?format=json');
//                 const data = await response.json();
//                 setIp(data.ip);
//             } catch {
//                 setError('Unable to verify your IP address. Please try again later.');
//             }
//         };

//         initFingerprint();
//         getIp();
//     }, []);

//     useEffect(() => {
//         const fetchCategory = async () => {
//             setIsLoading(true);
//             try {
//                 const response = await fetch(`https://our-lady-database.onrender.com/api/getAllCategory`);
//                 if (!response.ok) throw new Error('Failed to fetch category');
//                 const data: Category[] = await response.json();
//                 const currentCategory = data.find(cat => cat._id === categoryId);
//                 if (!currentCategory) throw new Error('Category not found');
//                 setCategory(currentCategory);
//                 setError(null);
//                 fetchVotes(currentCategory.name);
//             } catch (err) {
//                 setError((err as Error).message);
//                 setCategory(null);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (categoryId) fetchCategory();
//     }, [categoryId]);

//     const fetchVotes = async (categoryName: string) => {
//         try {
//             const response = await fetch('https://our-lady-database.onrender.com/api/getVotesByCategory');
//             if (!response.ok) throw new Error('Failed to fetch votes');
//             const data: VoteResponse[] = await response.json();
//             const categoryVotes = data.find(cat => cat.categoryName === categoryName);
//             if (categoryVotes) {
//                 const voteMap: Record<string, number> = {};
//                 categoryVotes.contestants.forEach(vote => {
//                     voteMap[vote.contestantName] = vote.votes || 0;
//                 });
//                 setVotes(voteMap);
//             }
//             setVoteError(null);
//         } catch {
//             setVoteError('Unable to refresh vote counts. The displayed votes may be outdated.');
//         }
//     };

//     const handleVote = async (contestant: string) => {
//         if (!ip || !fingerprint) {
//             setError('Unable to verify your device. Please try again later.');
//             return;
//         }
//         setIsVoting(true);
//         setVotingContestant(contestant);
//         setError(null);

//         try {
//             const response = await fetch('https://our-lady-database.onrender.com/api/vote', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ ip, fingerprint, categoryId, contestant }),
//             });
//             if (!response.ok) throw new Error(await response.text());
//             setSelectedContestant(contestant);
//             if (category) fetchVotes(category.name);
//         } catch (err) {
//             setError((err as Error).message || 'Failed to submit vote. Please try again.');
//             setSelectedContestant(null);
//         } finally {
//             setIsVoting(false);
//             setVotingContestant(null);
//         }
//     };

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;
//     if (!category) return <div>Category not found.</div>;

//     return (
//         <LazyMotion features={domAnimation}>
//             <div>
//                 <button onClick={() => navigate('/vote')}>Back to Categories</button>
//                 {category.contestants.map((contestant, index) => (
//                     <m.div key={index}>
//                         <h2>{contestant}</h2>
//                         <p>{votes[contestant] || 0} votes</p>
//                         <button onClick={() => handleVote(contestant)} disabled={isVoting || !!selectedContestant}>
//                             {isVoting && votingContestant === contestant ? 'Voting...' : selectedContestant === contestant ? 'Voted! 🎉' : 'Vote'}
//                         </button>
//                     </m.div>
//                 ))}
//             </div>
//         </LazyMotion>
//     );
// };

// export default ContestantList;
