import React from 'react'
import loading from '../components/loading.gif';

export const Spiner = () => {
  return (
    <div className='text-center'>
        <img src={loading} className='img-fluid loading_img'/>
    </div>
  )
}
