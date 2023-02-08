import Date from '../components/Date';

import {Header} from "./MainNavigationStyles";

const MainNavigation: React.FC<{setSelectedDay:(setSelectedDay:string)=>void}> = ({setSelectedDay}) => {

  return (
    <Header>
      <Date setSelectedDay={setSelectedDay}/>
    </Header>
  );
};

export default MainNavigation;
