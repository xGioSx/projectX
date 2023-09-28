import React from 'react'
import './regions.css'
import arabic from '../../../assets/flag/arabic.png'
import australia from '../../../assets/flag/australia.png'
import china from '../../../assets/flag/china.png'
import denmark from '../../../assets/flag/denmark.png'
import france from '../../../assets/flag/france.png'
import german from '../../../assets/flag/german.png'
import greatbritan from '../../../assets/flag/greatbritan.png'
import italy from '../../../assets/flag/italy.png'
import russia from '../../../assets/flag/russia.png'
import unitedstates from '../../../assets/flag/unitedstates.png'


const Regions = () => {
  return (
    <section className='section_regions'>
      
      <div className='full_section'>

          <div className='info_regions'> <span>suppliers by region</span></div>

            <div className='all_regions'>

              <div className='region'>
                <img src={arabic} alt="" />
                  <div className='region_info'>
                    <span>arabic emirates</span> 
                    <span>shopmane.ae</span>
                  </div>
              </div>
              
              <div className='region'>
                <img src={australia} alt="" />
                  <div className='region_info'>
                    <span>australia</span>
                    <span>shopmane.ae</span>
                  </div>
              </div>
              
              <div className='region'>
                <img src={china} alt="" />
                  <div className='region_info'>
                    <span>china</span>
                    <span>shopmane.ae</span>
                  </div>
              </div>
              
              <div className='region'>
                <img src={denmark} alt="" />
                  <div className='region_info'>
                    <span>denmark</span> 
                    <span>shopmane.ae</span>
                  </div>
              </div>
              
              <div className='region'>
                <img src={france} alt="" />
                <div className='region_info'>
                    <span>france</span>
                    <span>shopmane.ae</span>
                </div>
              </div>
              
              <div className='region'>
                <img src={german} alt="" />
                <div className='region_info'>
                    <span>german</span> 
                    <span>shopmane.ae</span>
                </div>
              </div>
              
              <div className='region'>
                <img src={greatbritan} alt="" />
                <div className='region_info'>
                    <span>great britan</span>
                    <span>shopmane.ae</span>
                </div>
              </div>
              
              <div className='region'>
                <img src={italy} alt="" />
                <div className='region_info'>
                    <span>italy</span>
                    <span>shopmane.ae</span>
                </div>
              </div>
              
              <div className='region'>
                <img src={russia} alt="" />
                <div className='region_info'>
                  <span>russia</span> 
                  <span>shopmane.ae</span>
                </div>
              </div>
              
              <div className='region'>
                <img src={unitedstates} alt="" />
                <div className='region_info'>
                  <span>united states</span>
                  <span>shopmane.ae</span>
                </div>
              </div>

            </div>
      </div>

    </section>
  )
}

export default Regions
