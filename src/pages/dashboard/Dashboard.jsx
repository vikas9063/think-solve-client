// src/components/ExtendedDashboard.js

import React from 'react';
import GreetUser from './../../components/user/components/GreetUser';
import TopicsAndPopular from '../../components/user/components/TopicsAndPopular';
import TopPostsRankings from '../../components/user/components/TopPostsRankings';
import InterviesAttended from '../intervies-attended/InterviesAttended';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const ExtendedDashboard = () => {
  const location = useLocation();
  let receivedData = location.state;
  useEffect(() => {
    // console.log('Dashboard Recieved Data : ', receivedData);
    console.log(location);
    if (receivedData) {
      toast.success(receivedData.message);      
      receivedData=null;
    }
  }, []);
  return (
    <>
      <GreetUser />
      <TopicsAndPopular />
      <TopPostsRankings />
      <InterviesAttended />
    </>
  );
};

export default ExtendedDashboard;
