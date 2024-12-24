import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

    <p>&copy; 2024 Rohan Pachauri.  All Rights Reserved</p>
    <div className='footer__links'>

        {
            ["About","Privacy Policy","Contacts", "Terms of Service"].map((item)=>(
                <Link
                className='footer__link'
                key={item}
                href={`/${item.toLowerCase().replace(' ','-')}`}/>
            ))
        }
        </div>
    </div>
  )
}

export default Footer