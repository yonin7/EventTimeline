import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {IdataDayElement} from '../interfaces/data';
import add from "../assets/add.png";
import { DeleteBTN } from './TimelineStyles';
import deleteIcon from "../assets/deleteIcon.png"


const Timeline: React.FC<{data:IdataDayElement[]|undefined,addEvent:(popupToggle:boolean)=>void
    ,onDelete:(removeEventHandler:string)=>void, 
    onUpdate:(name:string,startDate:string,endDate:string,oldDate:string)=>void }> 
    = ({data,addEvent,onDelete}) => {

        // const updateClickHandler=(name:string,start:string,end:string)=>{
        //     const oldData:IdataDayElement={
        //         name,
        //         start,
        //         end
        //     }
        //     setOldEventDetails(oldData)
        //     updateEvent(true)
        // }
  return (
    <VerticalTimeline>
    {data?.map((task)=> {
            return <VerticalTimelineElement
            key={`${task.start}-${task.end}+${task.name}`}
            className="vertical-timeline-element--work"
            contentStyle={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px', background: 'rgb(33, 150, 243)', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={`${task.start.split('T')[1]}-${task.end.split('T')[1]}`}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:'10px',}}>
            <h3 className="vertical-timeline-element-title">{task.name}</h3>
            <h4 className="vertical-timeline-element-title">{task.start.split('T')[1]}-{task.end.split('T')[1]}</h4>

            </div>
            <DeleteBTN onClick={()=>onDelete(task.start)}><img src={deleteIcon} alt='delete' style={{width:'25px'}}/></DeleteBTN>
            {/* <button onClick={()=>updateClickHandler(task.name,task.start,task.end)}>update</button> */}
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