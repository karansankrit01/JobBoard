import React from 'react'

const Home = () => {
  return (
    <div>
       <section id="page1">
    <div class="section-container">
        <h1>WELCOME TO <span>JOBIFY</span></h1>
        <p>Find your dream job or post a new one!</p>
        <div class="button-container">
            <a href="/jobs" class="btn">View Jobs</a>
            <a href="/jobs/create" class="btn">Post a Job</a>
        </div>
    </div>
</section>
    </div>
  )
}

export default Home
