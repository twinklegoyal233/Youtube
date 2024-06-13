import React, { useEffect, useState } from "react";
import "./PlayVideo.css";
import moment from "moment";
import { GOOGLE_API_KEY, value_converter } from "../constant";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import { useParams } from "react-router-dom";

const Playvideo = () => {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);
    const {videoId} = useParams();
  const fetchVideoData = async () => {
    try {
      const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=${videoId}`;
      const response = await fetch(videoDetails_url);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setApiData(data.items[0]);
      } else {
        console.error("Video data not found");
      }
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  const fetchOtherData = async () => {
    if (!apiData) return;
    try {
      // Fetching Channel Data
      const channelLogo_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${GOOGLE_API_KEY}`;
      const channelResponse = await fetch(channelLogo_url);
      const channelData = await channelResponse.json();
      if (channelData.items && channelData.items.length > 0) {
        setChannelData(channelData.items[0]);
      } else {
        console.error("Channel data not found");
      }

      // Fetching Comment Data
      const videoComment_url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&videoId=${videoId}`;
      const commentResponse = await fetch(videoComment_url);
      const commentData = await commentResponse.json();
      if (commentData.items && commentData.items.length > 0) {
        setCommentData(commentData.items);
      } else {
        console.error("Comment data not found");
      }
    } catch (error) {
      console.error("Error fetching other data:", error);
    }
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : 1525} Views
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "2 days ago"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 125}</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" /> Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelData
              ? value_converter(channelData.statistics.subscriberCount)
              : "1M"}{" "}
            Subscribers
          </span>
        </div>
        <button type="button">Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 100)
            : "Description Here"}
        </p>
        <hr />
        <h4>
          {apiData ? value_converter(apiData.statistics.commentCount) : 130}{" "}
          Comments
        </h4>
        {commentData.map((item, index) => (
          <div key={index} className="comment">
            <img
              src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
              alt=""
            />
            <div>
              <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}{" "}
                <span>
                  {moment(
                    item.snippet.topLevelComment.snippet.publishedAt
                  ).fromNow()}
                </span>
              </h3>
              <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playvideo;
