import React from 'react'

export default function Friend() {
    return (
        <div className='m-2 p-2 border-2 border-[#4cd63777] rounded flex bg-[#0c3b6c8c] items-center justify-between' >
            <div className='flex gap-2 items-center' >
                <div>
                    <img src="https://sriit.ac.in/tool/plugins/images/users/4.jpg" className='w-10 border-[#4cd637] border-2 rounded-full ' />
                </div>
                <div>
                    <h1 className='font-bold text-white text-sm' >Test User</h1>
                    <p className='text-[#fdfdfd] text-xs' >5+ mutuals</p>
                </div>
            </div>
            <div className='text-white' >
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
