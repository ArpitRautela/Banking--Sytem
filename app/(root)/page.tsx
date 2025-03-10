import HeaderBox from '@/Components/HeaderBox';
import RightSidebar from '@/Components/RightSidebar';
import TotalBalanceBox from '@/Components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home =async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user = {loggedIn?.name || 'Guest'}
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