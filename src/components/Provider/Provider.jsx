import React from 'react'
import './Provider.scss'
import Shape1 from '../../assets/shape1.png'
import Shape2 from '../../assets/shape2.png'
import GitHub from '../../assets/github.png'
import Linkedin from '../../assets/link.svg'

const Provider = ({children})=>{
  return (
    <div className='provider'>
    <div className='social-media'>
      <img className='social-icon' src={GitHub} alt='shapeImage' />
      <i class="fab fa-linkedin-in"></i>
    </div>
      <img className='shape top-corner' src={Shape2} alt='shapeImage' />
      <img className='shape bottom-corner'src={Shape1} alt='shapeImage' />
      {children}
    </div>
  )
}

export default Provider;
