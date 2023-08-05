import React from 'react'


function Spinner() {
  return (
    <div className='flex flex-col  items-center  space-y-4' >
        <div className='custom-loader '></div>
        <p className=' text-bgDark font-semibold text-lg ' >Loading....</p>
    </div>
  )
}

export default Spinner;