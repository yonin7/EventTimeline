import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IdataDayElement} from '../interfaces/data'
import add from "../assets/add.png"

const Timeline: React.FC<{data:IdataDayElement[]|undefined,addEvent:(popupToggle:boolean)=>void,updateEvent:(popupToggle:boolean)=>void
    ,onDelete:(removeEventHandler:string)=>void, 
    onUpdate:(name:string,startDate:string,endDate:string,oldDate:string)=>void,setOldEventDetails:(data:IdataDayElement)=>void }> 
    = ({data,addEvent,onDelete,updateEvent,setOldEventDetails}) => {

        const updateClickHandler=(name:string,start:string,end:string)=>{
            const oldData:IdataDayElement={
                name,
                start,
                end
            }
            setOldEventDetails(oldData)
            updateEvent(true)
        }
  return (
    <VerticalTimeline>
    {data?.map((task)=> {
            return <VerticalTimelineElement
            key={`${task.start}-${task.end}+${task.name}`}
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={`${task.start.split('T')[1]}-${task.end.split('T')[1]}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{task.name}</h3>
            <button onClick={()=>onDelete(task.start)}>delete</button>
            <button onClick={()=>updateClickHandler(task.name,task.start,task.end)}>update</button>
          </VerticalTimelineElement>
        } )}
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff',display:'flex',alignItems:'center',justifyContent:'center' }}
      icon={<img src={add} alt='add' style={{ width:'60%'}} onClick={()=>addEvent(true)} /> }
    />
  </VerticalTimeline>
  )
}


export default Timeline