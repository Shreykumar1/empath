import React from 'react'
import MemberProfile from './MemberProfile'

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="flex-1">
          <a href='/' className="btn btn-ghost text-xl">Empath</a>
        </div>
        <div className="flex-none">
          <MemberProfile />
        </div>
      </div>
    </div>
  )
}

export default Navbar