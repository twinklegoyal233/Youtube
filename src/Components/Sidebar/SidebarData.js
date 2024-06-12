import homeIcon from "../../assets/home.png";
import gameIcon from "../../assets/game_icon.png";
import automobilesIcon from "../../assets/automobiles.png";
import sportsIcon from "../../assets/sports.png";
import entertainmentIcon from "../../assets/entertainment.png";
import techIcon from "../../assets/tech.png";
import musicIcon from "../../assets/music.png";
import newsIcon from "../../assets/news.png";
import jackIcon from "../../assets/jack.png"; 
import cameronIcon from "../../assets/cameron.png";
import simonIcon from "../../assets/simon.png";
import tomIcon from "../../assets/tom.png";
import meghnaIcon from "../../assets/megan.png"

const menuItems = [
  { icon: homeIcon, text: "Home", link: "/" },
  { icon: gameIcon, text: "Gaming", link: "/gaming" },
  { icon: automobilesIcon, text: "Automobiles", link: "/automobiles" },
  { icon: sportsIcon, text: "Sports", link: "/sports" },
  { icon: entertainmentIcon, text: "Entertainment", link: "/entertainment" },
  { icon: techIcon, text: "Technology", link: "/technology" },
  { icon: musicIcon, text: "Music", link: "/music" },
  { icon: newsIcon, text: "News", link: "/news" },
];

const subscribedUsers = [
  { name: "BeerBiceps", image: jackIcon },
  { name: "Alsey Perry", image: cameronIcon },
  { name: "Fittuber", image: simonIcon },
  { name: "Tom Hardy", image: tomIcon },
  { name: "Meghna Carkle", image: meghnaIcon },
];

export { menuItems, subscribedUsers };
