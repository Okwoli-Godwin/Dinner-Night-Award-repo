import { useState } from "react";
import styles from "./SetBusiness.module.css";
// import { Typography } from "@/components/Typography";
import Typography from "../../../typography/Typography";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";


const SetBusiness = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    website: "",
    email: "",
    image: null as File | null,
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? (files ? files[0] : null) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true)

    if (!formData.name || !formData.address || !formData.phoneNumber || !formData.email || !formData.image) {
      setError("Please fill in all required fields.");
      toast.error('Please fill in all required fields')
      return;
    }


    try {
      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("address", formData.address);
      submissionData.append("phoneNumber", formData.phoneNumber);
      submissionData.append("website", formData.website);
      submissionData.append("email", formData.email);
      submissionData.append("image", formData.image);

  
      const response = await axios.post("https://our-lady-database.onrender.com/api/addBusiness",submissionData );

      if (!response) {
        throw new Error("Failed to submit data");
      }

      toast.success("Business advert submitted successfully")

      setSuccess("Business advert submitted successfully.");
      setFormData({ name: "", address: "", phoneNumber: "", website: "", email: "", image: null });
     
    } catch (error:any) {
      setError("An error occurred while submitting. Please try again.");
      toast.error(`${error.message}`)
    } finally {
      setLoading(false)
    }
  };

  return (
    <>
      <div className={styles.breadcrumb}>
        <Typography variant="h3">Dashboard &gt; Set Business Advert</Typography>
      </div>
      <div className={styles.container}>
        {/* Breadcrumb / Title */}

        <Typography variant="h2" className={styles.pageTitle}>Set Business Advert</Typography>

        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Address</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Website</label>
            <input type="url" name="website" value={formData.website} onChange={handleChange} />
          </div>

          <div className={styles.formGroup}>
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className={styles.formGroup}>
            <label>Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} required />
          </div>

          <button type="submit" className={styles.submitButton} disabled={loading}>
           { loading ? (< div style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            gap: "4px"
           }}>
            Submitting <ClipLoader size={20} color="white"/> 
           </div>
            ) : " Submit"}
          </button>
        </form>
      </div>

    </>

  );
};

export default SetBusiness;
