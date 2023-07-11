import { signIn } from 'next-auth/react'
import React from 'react'

function login() {
    return (
        <div className=' flex flex-col items-center bg-black min-h-screen justify-center w-full'>
            <img src='https://links.papareact.com/9xl' alt='' className='w-52 mb-5' />
            <button className=' bg-[#18D860] rounded-lg p-2' onClick={()=>signIn('spotify', { callbackUrl: "/" })}>Login with Spotify</button>
        </div>
    )
}

export default login
