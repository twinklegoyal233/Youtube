import { useParams } from "react-router-dom"
import Playvideo from "../../Components/PlayVideo/Playvideo"
import "./Video.css"
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  const {videoId, categoryId} = useParams();
  return (
    <div className="play-container">
      <Playvideo videoId = {videoId} />
      <Recommended categoryId = {categoryId}   />
    </div>
  )
}

export default Video
