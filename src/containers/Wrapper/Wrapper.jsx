import React from 'react'

const Wrapper = ({children}) => {
  /** Render */
  return (
    <div className='px-5 w-full sm:w-[540px]'>{children}</div>
  )
}

export default Wrapper