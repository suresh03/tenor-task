import React from "react";
import Carousel from "better-react-carousel";
import "./trendingSearchStyle.css";
function TrendingSearch(props) {
  const imageClick = () => {};
  return (
    <div className="container">
      <h4>Trending Tenor Searches</h4>
      <div className="col-12">
        <Carousel cols={5} rows={1} gap={10} loop>
          {props.trendingSearch.map((item, index) => (
            <Carousel.Item style={{ marginTop: 100 }}>
              {/* <div> */}
              <img
                style={{ width: "50%", height: "50%", borderRadius: 10 }}
                src={item?.media[0]?.gif?.url}
                onClick={() => props.trendsImgOnClick(item.content_description)}
              />
              <h5>{item.content_description}</h5>
              {/* </div> */}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default TrendingSearch;
