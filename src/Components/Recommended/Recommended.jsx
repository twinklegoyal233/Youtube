import { GOOGLE_API_KEY, value_converter } from "../constant";
import "./Recommended.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchRecommendedData = async () => {
    try {
        const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(relatedVideo_API);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items);
      } else {
        console.error("Video data not found");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };
  useEffect(() => {
    fetchRecommendedData();
}, [])

  return  <div className="recommended">
  {apiData.map((item) => {
      return (
          <div key={item.snippet.title} className="side-video-list">
              <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={()=>window.scrollTo(0,0)} className="small-thumbnail">
                  <img src={item.snippet.thumbnails.medium.url} alt="" /></Link>
              <div className="vid-info">
                  <h4>{item.snippet.title}</h4>
                  <p>{item.snippet.channelTitle}</p>
                  <p className='recommended-views'>{value_converter(item.statistics.viewCount)} Views</p>
              </div>
          </div>)
})}
</div>

};

export default Recommended;
