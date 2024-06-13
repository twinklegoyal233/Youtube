import "./Sidebar.css";
import homeIcon from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobilesIcon from "../../assets/automobiles.png";
import sportsIcon from "../../assets/sports.png";
import entertainmentIcon from "../../assets/entertainment.png";
import techIcon from "../../assets/tech.png";
import musicIcon from "../../assets/music.png";
import newsIcon from "../../assets/news.png";
import { subscribedUsers} from "./SidebarData";
import { useSelector } from "react-redux";
const Sidebar = ({category,setCategory}) => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
 
  return (
    <div className={`sidebar ${isMenuOpen?"small-sidebar":""}`}>
      <div className="shortcut-links">
            <div onClick={()=>{setCategory(0)}} className={`side-link ${category===0?"active":""}`}><img src={homeIcon} alt="" /><p>Home</p></div>
            <div onClick={()=>{setCategory(20)}} className={`side-link ${category===20?"active":""}`}><img src={gameIcon} alt="" /><p>Gaming</p></div>
            <div onClick={()=>{setCategory(2)}} className={`side-link ${category===2?"active":""}`}><img src={automobilesIcon} alt="" /><p>Automobiles</p></div>
            <div onClick={()=>{setCategory(17)}} className={`side-link ${category===17?"active":""}`}><img src={sportsIcon} alt="" /><p>Sports</p></div>
            <div onClick={()=>{setCategory(24)}} className={`side-link ${category===24?"active":""}`}><img src={entertainmentIcon} alt="" /><p>Entertainment</p></div>
            <div onClick={()=>{setCategory(28)}} className={`side-link ${category===28?"active":""}`}><img src={techIcon} alt="" /><p>Technology</p></div>
            <div onClick={()=>{setCategory(10)}} className={`side-link ${category===10?"active":""}`}><img src={musicIcon} alt="" /><p>Music</p></div>
            <div onClick={()=>{setCategory(25)}} className={`side-link ${category===25?"active":""}`}><img src={newsIcon} alt="" /><p>News</p></div>
            <hr/>
        </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {subscribedUsers.map((item) => (
          <div key={item.name} className="side-link">
            <img src={item.image} alt=""  />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>


  );
};

export default Sidebar;
