import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'
import FoodDis from '../../components/FoodDis/FoodDis'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
         <Header/>
         <Exploremenu category={category} setCategory={setCategory}/>
         <FoodDis category={category}/>
         <AppDownload/>
    </div>
  )
}

export default Home