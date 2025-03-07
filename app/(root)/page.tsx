import HeaderBox from '@/Components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Arpit'};

  return (
    <section className="home">
      <div className='home-content'>
        <div className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user = {loggedIn?.firstName || 'Guest'}
          subtext = "Access and manage your account and transaction efficiently" 
          />
        </div>
      </div>
    </section>
  )
}

export default Home