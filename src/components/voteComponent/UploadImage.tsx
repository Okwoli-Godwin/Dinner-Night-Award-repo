import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styles from "./UploadImage.module.css";

const UploadImage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState<number>(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    if (files.length > 50) {
      toast.error("You can upload a maximum of 50 images at once.");
      return;
    }

    setImages(Array.from(files));
    setProgress(0);
  };

  const handleUpload = async () => {
    if (images.length === 0) {
      toast.error("Please select at least one image.");
      return;
    }

    const formData = new FormData();
    images.forEach((img) => formData.append("images", img));

    setUploading(true);

    try {
      await axios.post(
        "https://our-lady-database.onrender.com/api/upload-gallery",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          onUploadProgress: (event:any) => {
            const percent = Math.round((event.loaded * 100) / event.total);
            setProgress(percent);
          },
        }
      );

      toast.success("Images uploaded successfully!");
      setImages([]);
      setProgress(0);
    } catch (err: any) {
      console.error(err);
      toast.error("Failed to upload images. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.uploadContainer}>
      <h2 className={styles.title}>Upload Images</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        className={styles.inputFile}
        onChange={handleFileChange}
        disabled={uploading}
      />

      {images.length > 0 && (
        <div className={styles.previewGrid}>
          {images.map((img, idx) => (
            <img
              src={URL.createObjectURL(img)}
              alt={`preview-${idx}`}
              key={idx}
              className={styles.previewImg}
            />
          ))}
        </div>
      )}

      {uploading && (
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
          <span className={styles.progressText}>{progress}%</span>
        </div>
      )}

      <button
        className={styles.uploadBtn}
        onClick={handleUpload}
        disabled={uploading}
      >
        {uploading ? (
          <div className={styles.spinner}></div>
        ) : (
          "Upload"
        )}
      </button>
    </div>
  );
};

export default UploadImage;
