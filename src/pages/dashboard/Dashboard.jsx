// src/components/ExtendedDashboard.js

import React from 'react';
import GreetUser from './../../components/user/components/GreetUser';
import TopicsAndPopular from '../../components/user/components/TopicsAndPopular';
import TopPostsRankings from '../../components/user/components/TopPostsRankings';
import InterviesAttended from '../intervies-attended/InterviesAttended';

const ExtendedDashboard = () => {

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
