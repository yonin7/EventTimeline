import React, { useState } from "react";
import MainNavigation from "./MainNavigation";
import Dashboard from '../components/Dashboard';

import { LayoutContainer, MainContainer } from "./LayoutStyles";

const Layout:React.FC<{}> = (props) => {
  const [selectedDay,setSelectedDay]=useState<string>('')
  return (
    <LayoutContainer>
      <MainNavigation setSelectedDay={setSelectedDay} />
      <MainContainer >      
        <Dashboard selectedDay={selectedDay}/>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
