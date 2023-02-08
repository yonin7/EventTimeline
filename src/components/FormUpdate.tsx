import { useEffect, useState } from 'react';
import { Container,Title,EventName,DateInput,Header,InputsContainer,CreateButton,InputLabal,DateLabal} from './FormStyles';
import Modal from './Modal';
import {IdataDayElement} from '../interfaces/data'

const FormUpdate: React.FC<{message:(setMessage:string)=>void, oldData:IdataDayElement,onClose:(setPopupIsShown:boolean)=>void
    onUpdate:(name:string,startDate:string,endDate:string,oldDate:string)=>void}> = ({onClose,onUpdate,oldData,message}) => {
    const [eventName,setEventName]=useState<string>(oldData.name)
    const [eventStartDate,setEventStartDate]=useState<string>(oldData.start)
    const [eventEndDate,setEventEndDate]=useState<string>(oldData.end)
    const [allFieldActive,setAllFieldActive]=useState<boolean>(false)

    const clickHandler=(event:React.SyntheticEvent<Element, Event>)=>{
        event.preventDefault();

        onUpdate(eventName,eventStartDate,eventEndDate,oldData.start)

    }

    useEffect(()=>{
        if(!eventName||!eventStartDate||!eventEndDate){setAllFieldActive(false)
        }else{

            setAllFieldActive(true)
        } 
        
    },[eventName,eventStartDate,eventEndDate])
  
  return (
    <Modal onClose={onClose}>
        <Container>

        <Header>
        <Title>New Event</Title>
        </Header>
        <InputsContainer>
        <>
        <EventName isEnable={allFieldActive}  onChange={(e)=>setEventName(e.target.value)} value={eventName}/>
        <InputLabal>Name of event</InputLabal>
        </>
        <div>
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventStartDate(e.target.value)} value={eventStartDate}  />
        <DateLabal>Start time</DateLabal>
        </div>
        <div>
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventEndDate(e.target.value)} min={eventStartDate}value={eventEndDate} />
        <DateLabal>End time</DateLabal>
        </div>
        
        </InputsContainer>
       { <CreateButton isEnable={allFieldActive} onClick={(e)=>clickHandler(e)}>UPDATE EVENT</CreateButton>}
        </Container>
    </Modal>
  )
}


export default FormUpdate