import Typography from '../components/typography/Typography';
import { useState, useEffect } from 'react';
import styles from './Gallery.module.css';
import { Toaster } from 'react-hot-toast';
import { BarLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

// Define the type for the image object in the API response
interface Image {
	url: string;
}

interface ImageGroup {
	images: Image[];
}

interface ApiResponse {
	images: ImageGroup[];
}

const Gallery = () => {
	const [galleryImages, setGalleryImages] = useState<string[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const nav = useNavigate();

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch(
					'https://our-lady-database.onrender.com/api/seeAll'
				);
				console.log(response);

				if (!response.ok) {
					throw new Error('Failed to fetch gallery images');
				}
				const data: ApiResponse = await response.json();
				console.log(data);

				// Flatten the images array and ensure uniqueness using a Set
				const flatImages = data.images.flatMap((group: ImageGroup) =>
					group.images.map((img: Image) => img.url)
				);

				// Set unique images to galleryImages
				setGalleryImages(flatImages);

				setLoading(false);
			} catch (error) {
				setError(
					error instanceof Error ? error.message : 'An unknown error occurred'
				);
			}
		};

		fetchImages();
	}, []);

	// Function to handle image download
	// function downLoad(imageUrl: string, imageName: string) {
	//   // Create a new anchor element to simulate a click
	//   const a = document.createElement("a");

	//   // Fetch the image as a Blob to ensure it can be downloaded
	//   fetch(imageUrl)
	//     .then((response) => response.blob())
	//     .then((blob) => {
	//       // Create a URL for the Blob
	//       const url = window.URL.createObjectURL(blob);

	//       // Set the download link and file name
	//       a.href = url;
	//       a.download = imageName;

	//       // Append the anchor element to the body, trigger a click event, and then remove the element
	//       document.body.appendChild(a);
	//       a.click();
	//       document.body.removeChild(a);

	//       // Revoke the created object URL to free memory
	//       window.URL.revokeObjectURL(url);

	//       toast.success("Downloaded Successfully");
	//     })
	//     .catch((error) => {
	//       // Handle errors in case the image could not be fetched
	//       toast.error(`Failed to download: ${error.message}`);
	//     });
	// }

	// If images are loading or there is an error, display a message
	if (loading) {
		return (
			<div className="w-full h-[50vh] flex flex-col items-center justify-center gap-6">
				<p>Loading images...</p>
				<BarLoader width={200} />
			</div>
		);
	}

	if (error) {
		setLoading(false);

		return;
		<div className="w-full h-[50vh] flex flex-col items-center justify-center gap-3">
			<p> Error loading images: {error}</p>
			<BarLoader width={200} />
		</div>;
	}

	return (
		<div className={styles.container}>
			<Typography variant="h2">Past Events Gallery</Typography>

			<div className={styles.image_container}>
				{/* Map through the flattened galleryImages and display them */}
				{galleryImages.length > 0 ? (
					galleryImages.map((imageUrl, index) => (
						<div className={styles.image_holder} key={index}>
							<img
								src={imageUrl}
								alt={`Image ${index + 1}`}
								className={styles.image}
								onClick={() => nav(`/download/${encodeURIComponent(imageUrl)}`)}
							/>
						</div>
					))
				) : (
					<p>No images found.</p>
				)}
			</div>

			<Toaster />
		</div>
	);
};

export default Gallery;
