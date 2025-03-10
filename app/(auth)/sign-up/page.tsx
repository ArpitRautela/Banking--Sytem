import Authform from '@/Components/Authform'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const SignUp = async () => {2
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <Authform type="sign-up"/>
    </section>
  )
}

export default SignUp