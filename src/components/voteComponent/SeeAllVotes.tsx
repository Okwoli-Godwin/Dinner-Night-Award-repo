// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import styles from './SeeAllVotes.module.css';
// import toast from 'react-hot-toast';
// import LoadingSpinner from '../loading/LoadingSpinner';
// import { motion } from 'framer-motion';
// import {
// 	FaCalendarAlt,
// 	FaArrowLeft,
// 	FaArrowRight,
// 	FaSort,
// } from 'react-icons/fa';

// interface VoteStat {
// 	_id: string;
// 	count: number;
// }

// const ITEMS_PER_PAGE = 15;

// const SeeAllVotes = () => {
// 	const [data, setData] = useState<VoteStat[]>([]);
// 	const [filteredData, setFilteredData] = useState<VoteStat[]>([]);
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const [startDate, setStartDate] = useState('');
// 	const [endDate, setEndDate] = useState('');
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState('');
// 	const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Default is descending order

// 	useEffect(() => {
// 		const fetchVotes = async () => {
// 			setLoading(true);
// 			setError('');

// 			try {
// 				const response = await axios.get(
// 					'https://our-lady-database.onrender.com/api/visitors/stats'
// 				);
// 				setData(response.data);
// 				setFilteredData(response.data);
// 			} catch (err: any) {
// 				setError('Something went wrong while fetching data.');
// 				toast.error(`${err.message}`);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchVotes();
// 	}, []);

// 	const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

// 	const handleFilter = () => {
// 		if (!startDate || !endDate) {
// 			setFilteredData(data); // If no dates are provided, reset to all data
// 			return;
// 		}

// 		const filtered = data.filter(
// 			(item) => item._id >= startDate && item._id <= endDate
// 		);

// 		if (filtered.length === 0) {
// 			setError('No data found for the selected date range.');
// 		} else {
// 			setError(''); // Clear error if results are found
// 		}

// 		setFilteredData(filtered);
// 		setCurrentPage(1);
// 	};

// 	const handleClearFilter = () => {
// 		setStartDate('');
// 		setEndDate('');
// 		setFilteredData(data); // Reset filtered data to show all
// 		setError(''); // Clear any previous errors
// 	};

// 	const handleSort = (field: 'date' | 'votes') => {
// 		const sortedData = [...filteredData];

// 		if (field === 'date') {
// 			// Sort by date
// 			sortedData.sort((a, b) =>
// 				sortOrder === 'desc'
// 					? b._id.localeCompare(a._id)
// 					: a._id.localeCompare(b._id)
// 			);
// 		} else {
// 			// Sort by votes
// 			sortedData.sort((a, b) =>
// 				sortOrder === 'desc' ? b.count - a.count : a.count - b.count
// 			);
// 		}

// 		setFilteredData(sortedData);
// 	};

// 	const currentData = filteredData.slice(
// 		(currentPage - 1) * ITEMS_PER_PAGE,
// 		currentPage * ITEMS_PER_PAGE
//   );
  
//   if (loading) {
//     return (<LoadingSpinner />);
//   }

  

//   if (error) {
//     return (
//       <div className={styles.errorMessage}>
//         <p>{error}</p>
//       </div>
//     );
//   }

// 	return (
// 		<motion.div
		
// 		initial={{ opacity: 0, y: 20 }}
// 		animate={{ opacity: 1, y: 0 }}
// 		transition={{ duration: 0.5 }}
// 			className={styles.container}>
// 			<h2 className={styles.title}>All Votes</h2>
// 			<div className={styles.filterSection}>
// 				<div className={styles.flexnowrap}>
// 					<label className={styles.dateInput}>
// 						<FaCalendarAlt />
// 						<input
// 							type="date"
// 							value={startDate}
// 							onChange={(e) => setStartDate(e.target.value)}
// 						/>
// 					</label>
// 					<label className={styles.dateInput}>
// 						<FaCalendarAlt />
// 						<input
// 							type="date"
// 							value={endDate}
// 							onChange={(e) => setEndDate(e.target.value)}
// 						/>
// 					</label>
// 				</div>

// 				<div className={styles.flexnowrap}>
// 					<button className={styles.filterButton} onClick={handleFilter}>
// 						Filter
// 					</button>
// 					<button className={styles.clearButton} onClick={handleClearFilter}>
// 						Clear Filter
// 					</button>
// 				</div>

// 				<div className={styles.flexnowrap}>
// 					<div className={styles.sortButtonContainer}>
// 						<button
// 							className={styles.sortButton}
// 							onClick={() => {
// 								setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
// 								handleSort('date'); // Toggle sort order on date
// 							}}
// 						>
// 							<FaSort /> Sort by Date (
// 							{sortOrder === 'asc' ? 'Ascending' : 'Descending'})
// 						</button>
// 						<button
// 							className={styles.sortButton}
// 							onClick={() => handleSort('votes')}
// 						>
// 							<FaSort /> Sort by Votes
// 						</button>
// 					</div>
// 				</div>
// 			</div>

			
		

// 			<div className={styles.cardGrid}>
// 				{!loading &&
// 					!error &&
// 					currentData.map((item) => (
// 						<div className={styles.card} key={item._id}>
// 							<strong>Date:</strong> {item._id} <br />
// 							<strong>Votes:</strong> {item.count}
// 						</div>
// 					))}
// 			</div>

// 			{!loading && !error && currentData.length === 0 && (
// 				<div className={styles.noDataMessage}>
// 					No data available for the selected criteria.
// 				</div>
// 			)}

// 			{!loading && !error && totalPages > 1 && (
// 				<div className={styles.pagination}>
// 					<button
// 						className={styles.pageButton}
// 						onClick={() => setCurrentPage((prev) => prev - 1)}
// 						disabled={currentPage === 1}
// 					>
// 						<FaArrowLeft /> Prev
// 					</button>

// 					<span className={styles.pageNumber}>Page {currentPage}</span>

// 					<button
// 						className={styles.pageButton}
// 						onClick={() => setCurrentPage((prev) => prev + 1)}
// 						disabled={currentPage === totalPages}
// 					>
// 						<FaArrowRight /> Next
// 					</button>
// 				</div>
// 			)}
// 		</motion.div>
// 	);
// };

// export default SeeAllVotes;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SeeAllVotes.module.css';
import toast from 'react-hot-toast';
import LoadingSpinner from '../loading/LoadingSpinner';
import { motion } from 'framer-motion';

interface Contestant {
  contestantName: string;
  votes: number;
}

interface VoteCategory {
  categoryName: string;
  contestants: Contestant[];
}

const SeeAllVote: React.FC = () => {
  const [voteData, setVoteData] = useState<VoteCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVotes = async () => {
      try {
        const response = await axios.get('https://our-lady-database.onrender.com/api/getVotesByCategory');
        setVoteData(response.data);
      } catch (err: any) {
				setError('Failed to fetch vote data');
				toast.error(`${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchVotes();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <p className={styles.message}>{error}</p>;

  return (
		<motion.div
				
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
			className={styles.container}>
      <h2 className={styles.title}>Voting Summary</h2>
      {voteData.map((category, index) => {
        const totalVotes = category.contestants.reduce((sum, c) => sum + c.votes, 0);

        return (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <h3 className={styles.categoryTitle}>{category.categoryName}</h3>
              <span className={styles.totalVotes}>Total Votes: {totalVotes}</span>
            </div>
            <div className={styles.contestantList}>
              {category.contestants.map((contestant, i) => (
                <div key={i} className={styles.contestantCard}>
                  <p className={styles.name}>{contestant.contestantName}</p>
                  <p className={styles.votes}>
                    {contestant.votes} vote{contestant.votes !== 1 ? 's' : ''}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default SeeAllVote;
