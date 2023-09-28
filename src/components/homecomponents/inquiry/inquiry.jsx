import React from 'react'
import './inquiry.css'
// import background from '../../assets/pictures/background.png'
// import helpmenu from '../../assets/logo/helpmenu.png'

const Inquiry = () => {
  return (
    <section className='inquiry'>

      <div className='loren'>
        <h2>An easy way to send <br />requests to all suppliers</h2> <br />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> r Fugit doloribus consequuntur quas, sit amet eligendi? <br /> Commodi eaque expedita ad vero dolorem exercitationem <br /> sint ullam,  doloribus odit, similique, unde repellat totam!</p>
      </div>
      
      <form className='form1'>
        <div className='quote'>
          <span> <b>Send quote to supplier</b></span>
          <input placeholder="what item you need"  className="item" id="" />
            <textarea placeholder="type more details"  className="details" id="" />        
              <div className='option1'>
                <input placeholder="quantity"  className="quantity" id="" /> 
                <select name="changevalue" id="">
                  <option>litres</option>
                  <option>metres</option>
                  <option>kgs</option>
                </select>          
              </div>
              <button> send inquiry</button>
        </div>


      </form>                                    
    </section>
  )
}

export default Inquiry
