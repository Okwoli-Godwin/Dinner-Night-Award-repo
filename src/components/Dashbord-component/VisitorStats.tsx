import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './VisitorStats.module.css';
import toast from 'react-hot-toast';
import LoadingSpinner from '../loading/LoadingSpinner';
import { motion } from 'framer-motion';
import {
  FaCalendarAlt,
  FaArrowLeft,
  FaArrowRight,
  FaSort,
} from 'react-icons/fa';

interface VoteStat {
  _id: string;
  count: number;
}

const ITEMS_PER_PAGE = 15;

const VisitorStats = () => {
  const [data, setData] = useState<VoteStat[]>([]);
  const [filteredData, setFilteredData] = useState<VoteStat[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc'); // Default is descending order

  useEffect(() => {
    const fetchVotes = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(
          'https://our-lady-database.onrender.com/api/visitors/stats'
        );
        setData(response.data);
        setFilteredData(response.data);
      } catch (err: any) {
        setError('Something went wrong while fetching data.');
        toast.error(`${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchVotes();
  }, []);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const handleFilter = () => {
    if (!startDate || !endDate) {
      setFilteredData(data); // If no dates are provided, reset to all data
      return;
    }

    const filtered = data.filter(
      (item) => item._id >= startDate && item._id <= endDate
    );

    if (filtered.length === 0) {
      setError('No data found for the selected date range.');
    } else {
      setError(''); // Clear error if results are found
    }

    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setStartDate('');
    setEndDate('');
    setFilteredData(data); // Reset filtered data to show all
    setError(''); // Clear any previous errors
  };

  const handleSort = (field: 'date' | 'votes') => {
    const sortedData = [...filteredData];

    if (field === 'date') {
      // Sort by date
      sortedData.sort((a, b) =>
        sortOrder === 'desc'
          ? b._id.localeCompare(a._id)
          : a._id.localeCompare(b._id)
      );
    } else {
      // Sort by visitor
      sortedData.sort((a, b) =>
        sortOrder === 'desc' ? b.count - a.count : a.count - b.count
      );
    }

    setFilteredData(sortedData);
  };

  const currentData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  
  if (loading) {
    return (<LoadingSpinner />);
  }

  

  if (error) {
    return (
      <div className={styles.errorMessage}>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <motion.div
    
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      className={styles.container}>
      <h2 className={styles.title}>All Visitor</h2>
      <div className={styles.filterSection}>
        <div className={styles.flexnowrap}>
          <label className={styles.dateInput}>
            <FaCalendarAlt />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className={styles.dateInput}>
            <FaCalendarAlt />
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
        </div>

        <div className={styles.flexnowrap}>
          <button className={styles.filterButton} onClick={handleFilter}>
            Filter
          </button>
          <button className={styles.clearButton} onClick={handleClearFilter}>
            Clear Filter
          </button>
        </div>

        <div className={styles.flexnowrap}>
          <div className={styles.sortButtonContainer}>
            <button
              className={styles.sortButton}
              onClick={() => {
                setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
                handleSort('date'); // Toggle sort order on date
              }}
            >
              <FaSort /> Sort by Date (
              {sortOrder === 'asc' ? 'Ascending' : 'Descending'})
            </button>
            <button
              className={styles.sortButton}
              onClick={() => handleSort('votes')}
            >
              <FaSort /> Sort by Visitor
            </button>
          </div>
        </div>
      </div>

      
    

      <div className={styles.cardGrid}>
        {!loading &&
          !error &&
          currentData.map((item) => (
            <div className={styles.card} key={item._id}>
              <strong>Date:</strong> {item._id} <br />
              <strong>Visitor:</strong> {item.count}
            </div>
          ))}
      </div>

      {!loading && !error && currentData.length === 0 && (
        <div className={styles.noDataMessage}>
          No data available for the selected criteria.
        </div>
      )}

      {!loading && !error && totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
          >
            <FaArrowLeft /> Prev
          </button>

          <span className={styles.pageNumber}>Page {currentPage}</span>

          <button
            className={styles.pageButton}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
          >
            <FaArrowRight /> Next
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default VisitorStats;
