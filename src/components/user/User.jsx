import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams();

  return (
    <div className='bg-orange-700 text-white text-3xl p-5 text-center'>
      User: {userId}
    </div>
  )
}

export default User
