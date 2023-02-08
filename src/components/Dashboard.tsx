import React, { useEffect, useState } from 'react';

import Form from './Form';
import FormUpdate from './FormUpdate';
import Timeline from './Timeline';
import { Container} from './DashboardStyles';
import {IdataDayElement} from '../interfaces/data'
import {readEventData,writeEventData} from '../utils/jsonUtils'

const Dashboard: React.FC<{selectedDay:string|null,message:(setMessage:string)=>void}> = ({selectedDay,message}) => {
    const [data,setData]=useState<{[key:string]:IdataDayElement[]}>({})
    const [selectedDayData,setSelectedDayData]=useState<IdataDayElement[]>()
    const [popupIsShown,setPopupIsShown]=useState(false)
    const [popupUpdateIsShown,setPopupUpdateIsShown]=useState(false)
    const [oldEventDetails,setOldEventDetails]=useState<IdataDayElement>({name:'',start:'',end:""})
    const [count, setCount] = useState(false);

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
        if(count) {writeEventData(data)}else setCount(true)
    },[data,count])
    useEffect(()=>{
        const res = readEventData()
        setData(res)
       
    },[])


    const validateOverlappingDates = (newEventStartData:string)=>{
        let eventDay = newEventStartData.split('T')[0]
        if (!(eventDay in Object.keys(eventDay))) return
        let dayEvents = data[eventDay]
        for(let i=0;i<dayEvents.length;i++){
            if ((new Date(newEventStartData) >= new Date(dayEvents[i].start)) && 
            (new Date(newEventStartData) <= new Date(dayEvents[i].end))){
                throw new Error("Cannot set new event due to overlapping dates.")
            }
        }
    }

    const validateStartDateBiggerEndDate =(newEventStartData:string,newEventEndData:string)=>{
        if (new Date(newEventStartData) >= new Date(newEventEndData)){
            throw new Error("Start Date cannot be bigger than end Date.")
        }
    }

    const validateStartDateEndDateSameDay =(newEventStartData:string,newEventEndData:string)=>{
        if (newEventStartData.split('T')[0] !== newEventEndData.split('T')[0]){
            throw new Error("Start Date and End Date Must be on the same day.")
        }
    }
    const removeEventHandler=(startDate:string)=>{
        let eventDay = startDate.split('T')[0]
        let tempData={...data}
        let newData:any=[]
        for(let i=0;i<tempData[eventDay].length;i++){
            if (startDate!==tempData[eventDay][i].start) newData.push(tempData[eventDay][i])
        }
        if(newData.length===0){
            delete tempData[eventDay];

        }else {tempData[eventDay]=newData}
        if(Object.keys(tempData).length === 0){
            tempData['1990-01-01'] = [{name:'',start:'',end:""}]
        }
        setData( tempData)
        sortData(eventDay)
    }

    const createEventHandler=(name:string,startDate:string,endDate:string)=>{
        validateOverlappingDates(startDate)
        validateStartDateBiggerEndDate(startDate, endDate)
        validateStartDateEndDateSameDay(startDate, endDate)

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

   

    const updateEventHandler=(name:string,startDate:string,endDate:string,oldDate:string)=>{
        validateOverlappingDates(startDate)
        validateStartDateBiggerEndDate(startDate, endDate)
        validateStartDateEndDateSameDay(startDate, endDate)

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
        {!popupUpdateIsShown&&popupIsShown&&<Form onClose={popupToggle} createEventHandler={createEventHandler} message={message} /> }
        {popupUpdateIsShown&&!popupIsShown&&<FormUpdate onClose={popupToggle} onUpdate={updateEventHandler} oldData={oldEventDetails} message={message}/> }
        <Timeline data={selectedDayData} addEvent={popupToggle} onDelete={removeEventHandler} 
        onUpdate={updateEventHandler} />
    </Container>
  )
}

Dashboard.propTypes = {}

export default Dashboard