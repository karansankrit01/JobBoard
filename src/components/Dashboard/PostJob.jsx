import React, { useState } from 'react';
import './PostJob.css';

const PostJob = () => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.company || !form.location || !form.description) {
      setError('All fields are required.');
      return;
    }
    setSuccess(true);
    setForm({ title: '', company: '', location: '', description: '' });
  };

  return (
    <div className="postjob-container">
      <h1 className="postjob-title">Post a New Job</h1>
      <form className="postjob-form" onSubmit={handleSubmit}>
        <input
          className="postjob-input"
          type="text"
          name="title"
          placeholder="Job Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          className="postjob-input"
          type="text"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />
        <input
          className="postjob-input"
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
        />
        <textarea
          className="postjob-textarea"
          name="description"
          placeholder="Job Description"
          value={form.description}
          onChange={handleChange}
        />
        {error && <div className="postjob-error">{error}</div>}
        <button className="postjob-button" type="submit">Post Job</button>
        {success && <div className="postjob-success">Job posted successfully!</div>}
      </form>
    </div>
  );
};

export default PostJob; 