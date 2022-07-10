import React, { useState } from "react";
import { GetHttp, SearchApiUrl } from "../services/ApiCalls";
import "./searchStyle.css";

export default function SearchBar(props) {
  const [entityType, setEntityType] = useState();
  const [dropDownOption, setDropDownOption] = useState("");

  const changeType = async (e) => {
    setEntityType(e.target.value);
    props.onChangeSearchValue(e.target.value);
    let SearchingRes = await GetHttp(
      `${SearchApiUrl}q=${e.target.value}&key=LIVDSRZULELA&limit=50`
    );
    props.onChangeDropDown(SearchingRes, e.target.value);
  };
  const onSearch = async (value) => {
    props.onChangeSearchValue(value);
    let SearchingRes = await GetHttp(
      `${SearchApiUrl}q=${value}&key=LIVDSRZULELA&limit=8`
    );
    setDropDownOption(SearchingRes.results);
    console.log("searchinggg ressss", SearchingRes);
  };
  return (
    <div className="searchBg pt-2 pb-2">
      <div className="container">
        <div className="search">
          <input
            className="searchInput"
            type="text"
            placeholder="Search for GIFs and Stickers "
            value={props.SearchValue}
            onChange={(e) => onSearch(e.target.value)}
          />
          {dropDownOption && props.SearchValue ? (
            <select value={entityType} onChange={(e) => changeType(e)}>
              {dropDownOption?.map((e, index) => (
                <option
                  key={e.content_description}
                  value={e.content_description}
                >
                  {e.content_description}
                </option>
              ))}
            </select>
          ) : null}

          <div className="icon"></div>
        </div>
      </div>
    </div>
  );
}
