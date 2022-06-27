import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';

const { Title } = Typography;


const Homepage = () => {


  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);
  const globalStats = data?.data?.stats;

  if(isFetching) return "Loading... ";

  return (
    <div>
      <div className="homepage-design">
         <h1>Crypto Verse</h1>
         <p>
           A design system for enterprise-level products. Create an efficient and enjoyable work experience.
         </p>
         <div>
           <a id="get-started" href="#global-crypto">
              <button id="btn">Getting Started</button>
           </a>
           <Link to="/cryptocurrencies" >
             <button id="btn-two">Explore Crypto</button>
           </Link>
         </div>
      </div>
      <div className="vertical-line"></div>
      <div className="container">
        <h1 id="global-crypto" className="heading">Global Crypto Statistics</h1>
        <Row>
          <Col id="row-box-1" span={7}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col id="row-box" span={7}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
          <Col id="row-box" span={7}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
          <Col id="row-box-1" span={7}><Statistic title="Total 24hrs Volume" value={millify(globalStats.total24hVolume)} /></Col>
          <Col id="row-box" span={7}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>

        <div className="home-heading-container">
          <h1 className="heading-1">Top 10 Cryptocurrencies in the world</h1>
          <h2 id="show-more"><Link to="/cryptocurrencies">Show More</Link></h2>
        </div>
        <Cryptocurrencies simplified/>

        <div className="home-heading-container">
          <h1 className="heading-1">Latest Crypto News</h1>
          <h2 id="show-more"><Link to="/news">Show More</Link></h2>
        </div>
        <News simplified/>

      </div>
    </div>
  );
};

export default Homepage;
