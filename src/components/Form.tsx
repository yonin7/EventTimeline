import { useEffect, useState } from 'react';
import { Container,Title,EventName,DateInput,Header,InputsContainer,CreateButton,InputLabal,DateLabal} from './FormStyles';
import Modal from './Modal';

const Form: React.FC<{onClose:(setPopupIsShown:boolean)=>void
    ,createEventHandler:(name:string,startDate:string,endDate:string)=>void, 
   }> = ({onClose,createEventHandler}) => {
    const [eventName,setEventName]=useState<string>('')
    const [eventStartDate,setEventStartDate]=useState<string>('')
    const [eventEndDate,setEventEndDate]=useState<string>('')
    const [allFieldActive,setAllFieldActive]=useState<boolean>(false)

    const clickHandler=(event:React.SyntheticEvent<Element, Event>)=>{
        event.preventDefault();
        createEventHandler(eventName,eventStartDate,eventEndDate)
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
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventStartDate(e.target.value)}  />
        <DateLabal>Start time</DateLabal>
        </div>
        <div>
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventEndDate(e.target.value)} min={eventStartDate} />
        <DateLabal>End time</DateLabal>
        </div>
        
        </InputsContainer>
       {<CreateButton isEnable={allFieldActive} onClick={(e)=>clickHandler(e)}>CREATE EVENT</CreateButton>}
        </Container>
    </Modal>
  )
}


export default Form