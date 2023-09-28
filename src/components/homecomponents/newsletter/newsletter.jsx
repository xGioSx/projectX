import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <section className='newsletter'>

      <div className='full_newsletter'>

          <div className='subscribe'>
               <span>subscribe on our newsletter </span>
               <span>get daily on upcoming offers from many suppliers ali over the world</span>
          </div>

          <div className='sendmail'>
              <input placeholder='email'></input>
              <button className='subscribe'>subscribe</button>
          </div>
      </div>

    </section>
  )
}

export default NewsLetter
