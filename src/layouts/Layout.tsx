import React, { useEffect, useState } from "react";
import MainNavigation from "./MainNavigation";
import Dashboard from '../components/Dashboard';
import Notification from '../components/Notification';

import { LayoutContainer, MainContainer } from "./LayoutStyles";

const Layout:React.FC<{}> = (props) => {
  const [selectedDay,setSelectedDay]=useState<string>('')
  const [message,setMessage]=useState<string|null>('')

  useEffect(()=>{
    setTimeout(() => {
      setMessage(null)
    }, 2000);
  },[message])

  const messageHandler=(text:string)=>{
    setMessage(text)
  }
  return (
    <LayoutContainer>
      <MainNavigation setSelectedDay={setSelectedDay} />
      <MainContainer >      
        <Dashboard selectedDay={selectedDay} message={messageHandler}/>
        <Notification message={message}/>
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
