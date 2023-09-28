import React from 'react'
import './extraServices.css'
import search from '../../../assets/logo/search-icon.png'
import flyicon from '../../../assets/logo/fly-icon.png'
import box from '../../../assets/logo/box-icon.png'
import shield from '../../../assets/logo/shield-icon.png'


const ExtraServices = () => {
  return (
    <section className='extra_services'>
        <div className='div_extra_services'>
        
                <div className='our_services'> <h2>our extra services</h2></div>

                <div className='components'>

                    <div className='boxes1'>
                        <div className='middle1'>
                            <img src={search} alt="" />
                        </div>
                        <span>source from <br /> industry hubs</span>
                    </div>

                    <div className='boxes2'>
                        <div className='middle2'>
                            <img src={box} alt="" />
                        </div>
                        <span>customize your  <br /> products</span>
                    </div>

                    <div className='boxes3'>
                        <div className='middle3'>
                            <img src={flyicon} alt="" />
                        </div>
                        <span>fast, reliable shipping <br /> by ocean or air</span>
                    </div>

                    <div className='boxes4'>
                        <div className='middle4'>
                            <img src={shield} alt="" />
                        </div>
                        <span>product monitoring <br /> and inspection </span>
                    </div>

                </div>
        </div>
    </section>
  )
}

export default ExtraServices
