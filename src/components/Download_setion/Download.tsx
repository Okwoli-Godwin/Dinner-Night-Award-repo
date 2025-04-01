import './Download.css';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

// interface Params {
//     imageUrl?: string; // Optional to prevent undefined errors
// }

const Download: React.FC = () => {
    const nav = useNavigate();
    const { imageUrl } = useParams();

    const handleDownload = (): void => {
        if (!imageUrl) {
            toast.error('No image URL found!');
            return;
        }

        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'downloaded-image.jpg'; // Custom filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success message
        toast.success('Download Successful!');
    };

    return (
        <div className='DownloadBody'>
            <div className="ImageHolder">
                {imageUrl ? (
                    <img src={imageUrl} alt="Preview" className='DownloadImage' />
                ) : (
                    <p>No image available</p>
                )}
            </div>
            <div className="buttonHolder">
                <button className='a' onClick={handleDownload}>Download</button>
                <button className='b' onClick={() => nav('/gallery')}>Back</button>
            </div>
            <Toaster />
        </div>
    );
};

export default Download;
