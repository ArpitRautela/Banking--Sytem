import HeaderBox from '@/Components/HeaderBox';
import RightSidebar from '@/Components/RightSidebar';
import TotalBalanceBox from '@/Components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Arpit',lastName : 'Rautela',email:'arpitrautelax@gmail.com'};

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
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
          RECENT TRANSACTIONS
        </header>
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions = {[]}
        banks = {[{currentBalance:123.50}, {currentBalance:500.50}]}
        />
    </section>
  )
}

export default Home