import React from 'react'
import './brandinfo.css'
import brand1 from '../../assets/logo/brand.png'
import facebook from '../../assets/logo/fb.png'
import tvitter from '../../assets/logo/tvitter.png'
import linkedIn from '../../assets/logo/linkedIn.png'
import instagram from '../../assets/logo/instagram.png'
import youtube from '../../assets/logo/youtube.png'
import appstore from '../../assets/logo/appstore.png'
import googlestore from '../../assets/logo/googlestore.png'
import usa from '../../assets/flag/unitedstates.png'
import arrowup from '../../assets/logo/arrowup.png'


const Brandinfo = () => {
  return (
    <section className='full_info'>.
        <div className='full_info_div'>

                <div className='brand1'>
                    <div className='brand_name'>
                        <img src={brand1} alt="" />
                        <span>eComerse</span> <br />
                        <span>Best information about the company <br />gies here but now lorem ipsuma is</span>
                     </div>
                    <div className='soc_icons'>
                        <img src={facebook} alt="" />
                        <img src={tvitter} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={instagram} alt="" />
                        <img src={youtube} alt="" />
                    </div>  
                    
                </div>

                <div className='about'>
                    <ul className='about_ul'>
                        <li><b>about</b></li>
                        <li>about us</li> 
                        <li>find store</li>
                        <li>categories</li>
                        <li>blogs</li>
                    </ul>
                </div>



                <div className='about'>
                    <ul className='about_ul'>   
                        <li><b>partnership</b></li> 
                        <li>about us</li> 
                        <li>find store</li> 
                        <li>categories</li> 
                        <li>blogs</li>
                    </ul>
                </div>


                <div className='about'>
                  <ul className='about_ul'>
                        <li><b> information</b></li>
                        <li>help center</li>
                        <li>money refund</li>
                        <li>shipping</li>
                        <li>cpntact us</li>
                    </ul>
                </div>


                <div className='about'>
                    <ul className='about_ul'>
                        <li><b>for users</b></li> 
                        <li>login</li> 
                        <li>register</li> 
                        <li>settings</li> 
                        <li>my orders</li> 
                    </ul>
                </div>


                <div className='get_app'>
                   
                    <span>get app</span>
                    <img src={appstore} alt="" />
                    <img src={googlestore} alt="" />
                 
                </div>

        </div>

        <div className='endpage'>
            <div> 2023 eComerse</div>
                <div className='language'>
                    <img src={usa} alt="" />
                    <span>englis </span>
                        <img src={arrowup} alt="" />   
                </div>
        </div>


      
    </section>
  )
}

export default Brandinfo
