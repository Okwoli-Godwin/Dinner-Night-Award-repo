import React, { useState, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import styles from './SetBusinessAdvert.module.css';

const SetBusinessAdvert: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null); // 👈 track the file input

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    website: '',
    email: '',
    image: null as File | null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.image) {
      toast.error('Please upload an image');
      return;
    }

    setLoading(true);

    try {
      const uploadData = new FormData();
      uploadData.append('name', formData.name);
      uploadData.append('address', formData.address);
      uploadData.append('phoneNumber', formData.phoneNumber);
      uploadData.append('website', formData.website);
      uploadData.append('email', formData.email);
      uploadData.append('image', formData.image);

      await axios.post(
        'https://our-lady-database.onrender.com/api/addBusiness',
        uploadData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      toast.success('Business successfully added!');

      // Reset form
      setFormData({
        name: '',
        address: '',
        phoneNumber: '',
        website: '',
        email: '',
        image: null,
      });

      // Clear the file input value
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Set Business Advertisement</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Business Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Business Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="website"
          placeholder="Website URL"
          value={formData.website}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          ref={fileInputRef} // 👈 ref here
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SetBusinessAdvert;
