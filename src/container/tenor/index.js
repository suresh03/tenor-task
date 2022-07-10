import React, { useEffect, useState, useRef } from "react";
import FeaturedGifs from "../../component/FeaturedGifs";
import FullGifsView from "../../component/FullGifsView";
import Header from "../../component/Header";
import SearchBar from "../../component/SearchBar";
import TrendingSearch from "../../component/TrendingSearch";
import env from "../../env.json";
import {
  FeaturedGifsUrl,
  GetHttp,
  SearchApiUrl,
  TrendingTerms,
  TrendingTermsUrl,
} from "../../services/ApiCalls";
import { Utils } from "../../utils/Utils";
import "./styleSheet.css";
const Tenor = () => {
  const [SearchTrendingDatas, setSearchTrendingDatas] = useState([]);
  const [trendingSearch, settrendingSearch] = useState([]);
  const [SearchValue, setSearchValue] = useState("");
  const [featuredGifData, setfeaturedGifData] = useState([]);

  const [clickingStickers, setClickingStickers] = useState(false);
  const [fullGifsViewData, setfullGifsViewData] = useState([]);
  const [fullGifsViewDesc, setfullGifsViewDesc] = useState([]);
  const [featureNextData, setfeatureNextData] = useState("");
  const listInnerRef = useRef(null);

  useEffect(async () => {
    let SearchingRes = await GetHttp(
      `${SearchApiUrl}q=excited&key=LIVDSRZULELA&limit=8`
    );
    setSearchTrendingDatas(SearchingRes.results);
    let TrendingRes = await GetHttp(
      `${TrendingTermsUrl}key=${env.apiKey}&client_key=${env.clientkey}`
    );
    let FeaturedRes = await GetHttp(
      `${FeaturedGifsUrl}key=${env.apiKey}&client_key=${env.clientkey}`
    );
    setfeatureNextData(FeaturedRes?.next);

    const finalFeatureRes = Utils(FeaturedRes);
    setfeaturedGifData(finalFeatureRes);
  }, []);

  const onChangeDropDown = (datas, desc) => {
    setfullGifsViewDesc(desc);
    const finalFeatureRes = Utils(datas);
    setfullGifsViewData(finalFeatureRes);
    setClickingStickers(true);
  };

  const trendsImgOnClick = async (value) => {
    setfullGifsViewDesc(value);
    setSearchValue(value);
    let SearchingRes = await GetHttp(
      `${SearchApiUrl}q=${value}&key=LIVDSRZULELA&limit=50`
    );
    const finalFeatureRes = Utils(SearchingRes);
    setfullGifsViewData(finalFeatureRes);
    setClickingStickers(true);
  };

  const trendsHandleScroll = () => {};

  const handleScroll = async (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      let FeaturedRess = await GetHttp(
        `${FeaturedGifsUrl}key=${env.apiKey}&client_key=${env.clientkey}&pos=${featureNextData}&limit=20`
      );
      setfeatureNextData(FeaturedRess?.next);

      let dublicate = [...featuredGifData];
      dublicate?.[0]?.forEach((element) => {
        dublicate?.[0]?.push(element);
      });
      dublicate?.[1]?.forEach((element) => {
        dublicate?.[1]?.push(element);
      });
      dublicate?.[2]?.forEach((element) => {
        dublicate?.[2]?.push(element);
      });
      dublicate?.[3]?.forEach((element) => {
        dublicate?.[3]?.push(element);
      });
      setfeaturedGifData(featuredGifData);
    }
  };

  return (
    <div>
      {!clickingStickers ? (
        <div
          className=""
          onScroll={handleScroll}
          style={{ overflowY: "scroll", height: "600px", maxHeight: "600px" }}
          ref={listInnerRef}
        >
          <Header />
          <SearchBar
            SearchValue={SearchValue}
            onChangeSearchValue={(value) => setSearchValue(value)}
            onChangeDropDown={onChangeDropDown}
          />
          <div>
            <TrendingSearch
              trendingSearch={SearchTrendingDatas}
              trendsImgOnClick={trendsImgOnClick}
            />
            <FeaturedGifs featuredGifData={featuredGifData} />
          </div>
        </div>
      ) : (
        <div>
          <SearchBar
            SearchValue={SearchValue}
            onChangeSearchValue={(value) => setSearchValue(value)}
            onChangeDropDown={onChangeDropDown}
          />
          <FullGifsView
            featuredGifData={fullGifsViewData}
            fullGifsViewDesc={fullGifsViewDesc}
          />
        </div>
      )}
    </div>
  );
};

export default Tenor;
