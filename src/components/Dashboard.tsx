import React, { useEffect, useState } from 'react';

import Form from './Form';
import FormUpdate from './FormUpdate';
import Timeline from './Timeline';
import { Container} from './DashboardStyles';
import {IdataDayElement} from '../interfaces/data'
import {readEventData,writeEventData} from '../utils/jsonUtils'

const Dashboard: React.FC<{selectedDay:string|null}> = ({selectedDay}) => {
    const [data,setData]=useState<{[key:string]:IdataDayElement[]}>({})
    const [selectedDayData,setSelectedDayData]=useState<IdataDayElement[]>()
    const [popupIsShown,setPopupIsShown]=useState(false)
    const [popupUpdateIsShown,setPopupUpdateIsShown]=useState(false)
    const [oldEventDetails,setOldEventDetails]=useState<IdataDayElement>({name:'',start:'',end:""})
    console.log(data)
    const popupToggle =()=>{
        setPopupIsShown(!popupIsShown)
    }
    const updateEvent =()=>{
        setPopupUpdateIsShown(!popupIsShown)
    }
    useEffect(()=>{
        if(selectedDay!==null)setSelectedDayData(data[selectedDay])
        
    },[selectedDay,data])
    useEffect(()=>{
       if(Object.keys(data).length>0) writeEventData(data)
       
    },[data])
    useEffect(()=>{
        const res = readEventData()
        setData(res)
       
    },[])

    const createEventHandler=(name:string,startDate:string,endDate:string)=>{
        let eventDay = startDate.split('T')[0]
        let tempData={...data}
        let newData={
            name,
            start: startDate,
            end: endDate
        }
        if(!(eventDay in tempData)) {tempData[eventDay]=[newData as IdataDayElement]
        }else{
        tempData[eventDay].push(newData)
        }
        setData(tempData)
        sortData(eventDay)
    }

    const removeEventHandler=(startDate:string)=>{
        console.log(11)
        
        let eventDay = startDate.split('T')[0]
        console.log(14)
        let tempData={...data}
        console.log(16)
        let newData=tempData[eventDay].filter((event)=> new Date(event.start)  !==new Date(startDate))
        console.log(17)
        tempData[eventDay]=newData
        console.log(18)
        setData(tempData)
        console.log(19)
        sortData(eventDay)
        console.log(220)
    }

    const updateEventHandler=(name:string,startDate:string,endDate:string,oldDate:string)=>{
        console.log(oldDate)
        removeEventHandler(oldDate)
        createEventHandler(name,startDate,endDate)
    }
    const sortData = (dayData:string)=>{
        if((data[dayData]===undefined )|| (data[dayData].length<=1)) return
        data[dayData].sort((x:IdataDayElement,y:IdataDayElement)=>{
           let firstElmentDate:any=new Date(x['start'])
            let lastElmentDate:any=new Date(y['start'])
            return firstElmentDate-lastElmentDate
        })
        }

  return (
    <Container>
        {!popupUpdateIsShown&&popupIsShown&&<Form onClose={popupToggle} createEventHandler={createEventHandler} /> }
        {popupUpdateIsShown&&!popupIsShown&&<FormUpdate onClose={popupToggle} onUpdate={updateEventHandler} oldData={oldEventDetails}/> }
        <Timeline data={selectedDayData} addEvent={popupToggle} onDelete={removeEventHandler} 
        onUpdate={updateEventHandler} setOldEventDetails={setOldEventDetails} updateEvent={updateEvent}/>
    </Container>
  )
}

Dashboard.propTypes = {}

export default Dashboard