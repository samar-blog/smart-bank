  import React,{useState,useEffect} from 'react';
  import axios from 'axios';
  import { Card } from "antd";
  import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

  const {Meta} = Card;

  const News = () => {
    const[news,setNews] = useState([]);
    
    useEffect(() => {
      const loadNews = async () => {
        const response = await axios.get(
          "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3da128da75bb4e819bb876090635ca8f"
        );
        setNews(response.data.articles);
      };
      loadNews();
    }, []);

    // console.log("news", news);
    return (
      <div>
            
             {news &&
          news.map((item, index) => {
            return (
              <div className="box">
                <div className="cardx">
                  <img src={item.urlToImage} alt="image" />
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <a href={item.url}>Read More...</a>
                </div>
              </div>
            );
          })}
      </div>
    )
  }

  export default News