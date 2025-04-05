import React from 'react';

const LoadingSpinner: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen bg-gradient-to-br from-yellow-50 via-white to-green-50">
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
