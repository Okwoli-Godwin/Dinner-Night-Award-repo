// import React from 'react';
// import { motion } from 'framer-motion';
// import styles from './VoteDetailModal.module.css';
// import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

// interface VoteCategory {
//   categoryName: string;
//   contestants: { contestantName: string; votes: number }[];
// }

// interface Props {
//   category: VoteCategory;
//   onClose: () => void;
// }

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#845EC2', '#D65DB1'];

// const VoteDetailModal: React.FC<Props> = ({ category, onClose }) => {
//   const data = category.contestants.map(contestant => ({
//     name: contestant.contestantName,
//     value: contestant.votes,
//   }));

//   return (
//     <motion.div
//       className={styles.overlay}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         className={styles.modal}
//         onClick={e => e.stopPropagation()}
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: 50, opacity: 0 }}
//       >
//         <h2>{category.categoryName}</h2>
//         <ResponsiveContainer width="100%" height={300}>
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey="value"
//               nameKey="name"
//               outerRadius={100}
//               label
//             >
//               {data.map((_, index) => (
//                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart>
//         </ResponsiveContainer>
//         <button className={styles.closeBtn} onClick={onClose}>Close</button>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default VoteDetailModal;

import React from 'react';
import { motion } from 'framer-motion';
import styles from './VoteDetailModal.module.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LabelList,
} from 'recharts';

import CustomBar from './CustomBar';

interface Contestant {
	contestantName: string;
	votes: number;
}

interface VoteCategory {
	categoryName: string;
	contestants: Contestant[];
}

interface Props {
	category: VoteCategory;
	onClose: () => void;
}

const VoteDetailModal: React.FC<Props> = ({ category, onClose }) => {
	const data = category.contestants.map((c) => ({
		name: c.contestantName,
		votes: c.votes,
	}));

	const maxVotes = Math.max(...data.map((d) => d.votes));

	return (
		<motion.div
			className={styles.overlay}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			onClick={onClose}
		>
			<motion.div
				className={styles.modal}
				onClick={(e) => e.stopPropagation()}
				initial={{ y: -30, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 30, opacity: 0 }}
			>
				<h2 className={styles.heading}>
					Category: {category.categoryName.toLocaleUpperCase()}
				</h2>
        <ResponsiveContainer width="100%" height={350}  style={{
          fontWeight: 'bolder',
          padding: '1.5rem 0'
        }}>
					{/* <BarChart
            data={data}
            
						margin={{ top: 20, right: 30, left: 2, bottom: 20 }}
					>
						<XAxis dataKey="name" />
						<YAxis allowDecimals={false} />
						<Tooltip />
						<Bar
							dataKey="votes"
							fill="#00C49F"
							shape={<CustomBar />}
							radius={[10, 10, 0, 0]}
						>
							<LabelList
								dataKey="votes"
								position="top"
								formatter={(val: number) =>
									`${val} vote${val !== 1 ? 's' : ''}`
								}
							/>
						</Bar>
					</BarChart> */}

					<BarChart
						data={data}
						layout="vertical"
						margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
					>
						<XAxis type="number" allowDecimals={false} />
						<YAxis type="category" dataKey="name" />
						<Tooltip />
						<Bar
							dataKey="votes"
							fill="#00C49F"
							shape={<CustomBar />}
							radius={[0, 10, 10, 0]} // Adjusted for horizontal bars
						>
							<LabelList
								dataKey="votes"
								position="right"
								formatter={(val: number) =>
									`${val} vote${val !== 1 ? 's' : ''}`
								}
							/>
						</Bar>
					</BarChart>
				</ResponsiveContainer>

				<div
					className={
						data.filter((d) => d.votes === maxVotes).length > 1
							? styles.drawInfo
							: styles.winnerInfo
					}
				>
					{data.filter((d) => d.votes === maxVotes).length > 1 ? (
						<p>
							🤝 <strong>It's a draw!</strong> Top contestants:{' '}
							{data
								.filter((d) => d.votes === maxVotes)
								.map((d) => d.name)
								.join(', ')}{' '}
							with {maxVotes} vote{maxVotes !== 1 ? 's' : ''}
						</p>
					) : (
						<p>
							🏆 <strong>Top Contestant:</strong>{' '}
							{data.find((d) => d.votes === maxVotes)?.name} with {maxVotes}{' '}
							vote
							{maxVotes !== 1 ? 's' : ''}
						</p>
					)}
				</div>

				<button className={styles.closeBtn} onClick={onClose}>
					Close
				</button>
			</motion.div>
		</motion.div>
	);
};

export default VoteDetailModal;
