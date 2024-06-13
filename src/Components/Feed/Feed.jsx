import { Link  } from "react-router-dom"
import moment from "moment"
import "./Feed.css"
import { GOOGLE_API_KEY } from '../constant'
import { useState } from 'react'
import { useEffect } from 'react'
import { value_converter } from "../constant"

const Feed = ({category}) => {
  const [data,setData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${GOOGLE_API_KEY}`)
    const json = await data.json();
   setData(json.items);
  }
  

  
  useEffect(()=>{
    fetchData();
},[category])
  return (
    <div className='feed'>
    {data.map((item)=>{
        return <Link key={item.id} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                     <p>{value_converter(item.statistics.viewCount)} Views &bull; 
                     {" "+moment(item.snippet.publishedAt).fromNow()}</p>
                 </Link>
    })} 
</div>


)                                                                                            
}

export default Feed
