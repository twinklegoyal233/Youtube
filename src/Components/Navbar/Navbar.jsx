import "./Navbar.css"
import menu_icon from "../../assets/menu.png"
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import { useDispatch } from "react-redux"
import { toggleMenu } from "../../utils/appSlice"
import { Link } from "react-router-dom"
import twinkle from "../../assets/twinkle.png"

const Navbar = () => {
  const dispatch = useDispatch();
  const handleMenuIcon = () => {
    dispatch(toggleMenu())
  }

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
                <img src={menu_icon} alt="" className="menu-icon" onClick = {handleMenuIcon} />
                <Link to='/'> <img src={logo} alt="" className="logo" /></Link>
            
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={twinkle} alt="" className="user-icon" />
            </div>
    </nav>
  )
}

export default Navbar
