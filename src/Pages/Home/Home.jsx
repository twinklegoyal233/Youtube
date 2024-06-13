import Sidebar from "../../Components/Sidebar/SIdebar"
import { useSelector } from "react-redux"
import { useState } from "react"

import "./Home.css"
import Feed from "../../Components/Feed/Feed"

const Home = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  const [category,setCategory] = useState(0);
  return (
    <>
   <Sidebar  setCategory={setCategory} category={category}  />
    <div className= {`container ${isMenuOpen? "large-container" : ""}`} >
    <Feed category= {category} />
   </div>
   </>
    )
  }

export default Home
