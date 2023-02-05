import React from 'react'
import Button from '../../component/button/primary/Button'
import Footer from '../../component/footer/Footer'
import './wrapper.css'

const Wrapper = () => {
  return (
    <div className='container'>
        <div className='container-wrapper'>
            <Button />
            <Footer />
        </div>
    </div>
  )
}

export default Wrapper