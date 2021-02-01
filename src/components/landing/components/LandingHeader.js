import React from 'react';
import { Avatar, Button, Input } from 'antd';
import '../../../antD/styles/mapHeader.css';

const MapHeader = () => {
  const { Search } = Input;

  const onSearch = () => {
    // This is our search for finding the city they entered
  };
  return (
    <div className="map-header">
      <div className="left-header-section">
        <h1>Cityspire</h1>
      </div>
      <div className="right-header-section">
        <Button type="text" className="login-button" ghost href="/login">
          Login
        </Button>
      </div>
    </div>
  );
};

export default MapHeader;
