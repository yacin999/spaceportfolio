import Image from 'next/image'
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50  bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a 
                href='#about-me'
                className='h-auto w-auto flex flex-row items-center'    
            >
                <Image
                    src={"/navLogo.png"}
                    alt='logo'
                    width={70}
                    height={70}
                    className='cursor-pointer hover:animate-showspin'
                />

                <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                    WebChain
                </span>
            </a>

            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-5 py-[10px] rounded-full text-gray-200'>
                    <a href='#about-me' className='cursor-pointer justify-center'>About me</a>
                    <a href='#skills' className='cursor-pointer justify-center'>Skills</a>
                    <a href='#projects' className='cursor-pointer justify-center'>Projects</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar