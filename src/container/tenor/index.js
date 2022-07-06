import React from 'react'
import FeaturedGifs from '../../component/FeaturedGifs';
import Header from '../../component/Header';
import SearchBar from '../../component/SearchBar';
import TrendingSearch from '../../component/TrendingSearch';
import './styleSheet.css';
const Tenor = () => {
  return (
    <div className=''>
      <Header/>
      <SearchBar/>
      <TrendingSearch/>
      <FeaturedGifs/>
    </div>
  )
}

export default Tenor