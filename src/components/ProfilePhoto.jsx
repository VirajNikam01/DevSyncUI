import React from 'react'

const ProfilePhoto = ({url, className='w-28 h-28'}) => {
  return (
    <div className={`${className} rounded-full bg-white/60 overflow-hidden`}>
      <img className='h-full w-full object-cover' src={url} alt="" />
    </div>
  )
}

export default ProfilePhoto
