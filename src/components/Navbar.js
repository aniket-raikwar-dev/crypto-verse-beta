import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto-icon.svg';


const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
        <header>
          <img src ={icon} alt="icon" />
          <h1><Link id="head-link" to="/">Crypto Verse</Link></h1>
        </header>

        <div className="custom-link">
            <Link id="link" to="/">Home</Link>
            <Link id="link" to="/cryptocurrencies">Cryptocurrency</Link>
            <Link id="link" to="/exchanges">Exchanges</Link>
            <Link id="link" to="/news">News</Link>
        </div>
    </div>
    </>


    // <div className="nav-container">
    //    <div className="logo-continer">
    //      <Avatar src={icon} size="large" />
    //      <Typography.Title level={2} className="logo">
    //        <h3>Cryptoverse</h3>
    //      </Typography.Title>
    //    </div>
    //      <Menu theme='dark'>
    //         <Menu.Item icon={<HomeOutlined />}>
    //           <Link to="/">Home</Link>
    //         </Menu.Item>
    //         <Menu.Item icon={<FundOutlined />}>
    //           <Link to="/cryptocurrencies">Cryptocurrency</Link>
    //         </Menu.Item>
    //         <Menu.Item icon={<MoneyCollectOutlined />}>
    //           <Link to="/exchanges">Exchanges</Link>
    //         </Menu.Item>
    //         <Menu.Item icon={<BulbOutlined />}>
    //           <Link to="/news">News</Link>
    //         </Menu.Item>
    //      </Menu>
         
    // </div>
  )
};

export default Navbar;
