import React from 'react';
import post1 from '../../public/assets/images/post1.png';
import post2 from '../../public/assets/images/post2.svg';

export default function Post() {
    return (
        <div className='m-2 border-[#4cd63777] outline-1 outline-inherit ring-1 rounded border-2 snap-start' >
            <div className='flex items-center p-2 justify-between border-b-2 border-[#4cd637]' >
                {/* user Details */}
                <div className=' flex gap-2 items-center text-white' >
                    <img src='https://0.academia-photos.com/97733543/21313907/20734563/s200_vaibhav.buccha.jpg' className='w-8 border-[#4cd637] border-2 rounded-full ' />
                    <div>
                        Vaibhav Jain
                    </div>
                </div>
                <div className='text-white' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                </div>
            </div>
            <figure className='border-b-2 border-[#4cd637] h-fit' >
                <img src={post2.src} className='w-full h-[300px]' />
            </figure>   
            <div className='p-3 flex justify-between' >
                <div className='flex items-center gap-2' >
                    <div className='flex items-center text-white gap-1' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg> <span className='text-sm' >23</span>
                    </div>
                    <div className='flex items-center text-white gap-1' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                        </svg><span className='text-sm' >23</span>
                    </div>
                    <div className='text-white' >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </div>
                </div>
                <div className='text-white' >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
