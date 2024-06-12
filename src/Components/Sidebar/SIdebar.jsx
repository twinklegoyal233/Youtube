import "./Sidebar.css";
import { Link } from "react-router-dom";
import { subscribedUsers, menuItems } from "./SidebarData";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if (!isMenuOpen) 
  return (
    <div className="sidebar">
      <div className="shortcut-links">
        {menuItems.map((item) => (
          <Link key={item.text} to={item.link} className="side-link">
            <img src={item.icon} alt={item.text} />
            <p>{item.text}</p>
          </Link>
        ))}
      </div>
<hr></hr>
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
