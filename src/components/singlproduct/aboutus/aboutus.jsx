
import React, { useState } from 'react';
import './aboutus.css';


const Aboutus = () => {
  const [activeSpan, setActiveSpan] = useState('Description');
  const [displayedSpan, setDisplayedSpan] = useState('span_description');

  const handleSpanClick = (spanName, spanClassName) => {
    setActiveSpan(spanName);
    setDisplayedSpan(spanClassName);
  };

  return (
    <>
      
      <div className='product_detal_container'>
        <div className='product_detal_container2'>
          <div className='detail_span_box'>
            <span
              onClick={() => handleSpanClick('Description', 'span_description')}
              className={activeSpan === 'Description' ? 'active' : ''}
            >
              Description
            </span>
            <span
              onClick={() => handleSpanClick('Reviews', 'span_description2')}
              className={activeSpan === 'Reviews' ? 'active' : ''}
            >
              Reviews
            </span>
            <span
              onClick={() => handleSpanClick('Shipping', 'span_description3')}
              className={activeSpan === 'Shipping' ? 'active' : ''}
            >
              Shipping
            </span>
            <span
              onClick={() => handleSpanClick('About company', 'span_description4')}
              className={activeSpan === 'About company' ? 'active' : ''}
            >
              About us
            </span>
          </div>
          
        </div>
        
        <div className='product_detal_container3'>
                <span className={`span_description ${displayedSpan === 'span_description' ? 'active' : 'hidden'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et sagittis velit. Integer est libero, 
                        imperdiet ut dolor a, scelerisque euismod nisi. Curabitur nisi odio, egestas id arcu vitae, rutrum.
                </span>
                <span className={`span_description2 ${displayedSpan === 'span_description2' ? 'active' : 'hidden'}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum libero in eros egestas ultricies. 
                        Sed risus lectus, sagittis at maximus vel, euismod gravida augue. Phasellus hendrerit dictum urna nec tristique. 
                        Donec sit amet leo eu urna dictum auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                        inceptos himenaeos. In et nunc porttitor, ullamcorper nulla sit amet, feugiat purus. Sed accumsan tempus justo 
                        vitae blandit. Vivamus venenatis ipsum nec ante vulputate, non porta orci rutrum. Donec sit amet ipsum sit amet
                        lectus efficitur suscipit et vitae urna. Maecenas molestie nulla sit amet nulla pharetra, consectetur tempor 
                        felis.
                </span>
                <span className={`span_description3 ${displayedSpan === 'span_description3' ? 'active' : 'hidden'}`}>
                    "Streamline your deliveries with our efficient shipping service. Reliable, fast, and affordable shipping options 
                    for your e-commerce business. Enhance customer satisfaction today!" </span>
                <span className={`span_description4 ${displayedSpan === 'span_description4' ? 'active' : 'hidden'}`}>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem cum porro quo placeat expedita delectus hic,
                 obcaecati quasi vero. Alias voluptate ea deleniti atque debitis reprehenderit necessitatibus, facere soluta.."</span>


                <div className='detal_info_container'>
                
                    <div className='detal_info_container_1'>
                        <div className='detal_info_column'>model</div>
                        <div className='detal_function_column'>#9684646</div>
                    </div>
                    <div className='detal_info_container_1'>
                        <div className='detal_info_column'>style</div>
                        <div className='detal_function_column'>classic style</div>
                    </div>
                    <div className='detal_info_container_1'>
                        <div className='detal_info_column'>certificate</div>
                        <div className='detal_function_column'>ISO-8466648</div>
                    </div>
                    <div className='detal_info_container_1'>
                        <div className='detal_info_column'>size</div>
                        <div className='detal_function_column'>34mm x 450mm x 19mm</div>
                    </div>
                    <div className='detal_info_container_1'>
                        <div className='detal_info_column'>memory</div>
                        <div className='detal_function_column'>36gb ram</div>
                    </div>           
                </div>

        </div>
      </div>
    


      
    </>
  );
};

export default Aboutus;
