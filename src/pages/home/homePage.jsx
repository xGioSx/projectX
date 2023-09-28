import React from 'react'
import Main from '../../components/homecomponents/main/main'
import SectionSale from '../../components/homecomponents/sectionSale/sectionSale';
import BlockItemGroup from '../../components/homecomponents/blockItemGroup/blockItemGroup';
import BlockItemGroup2 from '../../components/homecomponents/blockItemGroup2/blockItemGroup2';
import Inquiry from '../../components/homecomponents/inquiry/inquiry'
import Recomended from '../../components/homecomponents/recomended/recomended'
import ExtraServices from '../../components/homecomponents/extraServices/extraServices';
import Regions from '../../components/homecomponents/regions/regions';
import NewsLetter from '../../components/homecomponents/newsletter';
import Navbar from '../../components/homecomponents/navbar/navbar';


const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Main/>
        <SectionSale/>
        <BlockItemGroup/>
        <BlockItemGroup2/>
        <Inquiry/>
        <Recomended/>
        <ExtraServices/>
        <Regions/>
        <NewsLetter/>
      
    </div>
  )
}

export default HomePage

