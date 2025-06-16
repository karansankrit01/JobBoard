import React, { useState } from 'react'
import './Jobs.css';

const mockJobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    description: 'Develop and maintain web applications.'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'BizGroup',
    location: 'New York, NY',
    description: 'Lead product teams and manage product lifecycle.'
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'DataWorks',
    location: 'San Francisco, CA',
    description: 'Analyze data and build predictive models.'
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'CreativeStudio',
    location: 'Austin, TX',
    description: 'Design user interfaces and improve user experience for mobile and web apps.'
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    company: 'CloudOps',
    location: 'Remote',
    description: 'Manage CI/CD pipelines and cloud infrastructure.'
  },
  {
    id: 6,
    title: 'QA Tester',
    company: 'QualityFirst',
    location: 'Chicago, IL',
    description: 'Test software products and ensure quality standards.'
  },
  {
    id: 7,
    title: 'Marketing Specialist',
    company: 'MarketMakers',
    location: 'Miami, FL',
    description: 'Develop marketing strategies and campaigns.'
  },
  {
    id: 8,
    title: 'Business Analyst',
    company: 'BizAnalytics',
    location: 'Seattle, WA',
    description: 'Analyze business processes and recommend improvements.'
  },
  {
    id: 9,
    title: 'Frontend Developer',
    company: 'Webify',
    location: 'Denver, CO',
    description: 'Build responsive web interfaces using React.'
  },
  {
    id: 10,
    title: 'Backend Developer',
    company: 'ServerSide',
    location: 'Boston, MA',
    description: 'Develop REST APIs and manage databases.'
  }
];

const Jobs = () => {
  const [jobs] = useState(mockJobs);

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Job Listings</h1>
      <div className="jobs-grid">
        {jobs.map(job => (
          <div className="job-card" key={job.id}>
            <h3 className="job-title">{job.title}</h3>
            <p className="job-company"><b>Company:</b> {job.company}</p>
            <p className="job-location"><b>Location:</b> {job.location}</p>
            <p className="job-description">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Jobs
