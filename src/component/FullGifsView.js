import React from "react";
import StackGrid from "react-stack-grid";

export default function FullGifsView({ featuredGifData, fullGifsViewDesc }) {
  const GridDemo = ({ onGifClick }) => {
    return (
      <div className="row">
        <div className="col-3">
          {featuredGifData[0]?.map((item, index) => (
            <img
              src={item.media[0].gif.url}
              style={{
                width: item.media[0].gif.dims[0],
                height: item.media[0].gif.dims[1],
                maxWidth: "100%",
                marginBottom: "15px",
              }}
            />
          ))}
        </div>
        <div className="col-3">
          {featuredGifData[1]?.map((item, index) => (
            <img
              src={item.media[0].gif.url}
              style={{
                width: item.media[0].gif.dims[0],
                height: item.media[0].gif.dims[1],
                maxWidth: "100%",
                marginBottom: "15px",
              }}
            />
          ))}
        </div>
        <div className="col-3">
          {featuredGifData[2]?.map((item, index) => (
            <img
              src={item.media[0].gif.url}
              style={{
                width: item.media[0].gif.dims[0],
                height: item.media[0].gif.dims[1],
                maxWidth: "100%",
                marginBottom: "15px",
              }}
            />
          ))}
        </div>
        <div className="col-3">
          {featuredGifData[3]?.map((item, index) => (
            <img
              src={item.media[0].gif.url}
              style={{
                width: item.media[0].gif.dims[0],
                height: item.media[0].gif.dims[1],
                maxWidth: "100%",
                marginBottom: "15px",
              }}
            />
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <h4>{fullGifsViewDesc}</h4>
      <GridDemo />
    </div>
  );
}
