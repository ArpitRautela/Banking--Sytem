import HeaderBox from '@/Components/HeaderBox';
import TotalBalanceBox from '@/Components/TotalBalanceBox';
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
          <TotalBalanceBox 
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.35}
          />
        </div>
      </div>
    </section>
  )
}

export default Home