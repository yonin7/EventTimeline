import { useEffect, useState } from 'react';
import { Container,Title,EventName,DateInput,Header,InputsContainer,CreateButton,InputLabal,CloseBTN} from './FormStyles';
import Modal from './Modal';
import closeIcon from "../assets/closeIcon.png"


const Form: React.FC<{message:(setMessage:string)=>void,onClose:(setPopupIsShown:boolean)=>void
    ,createEventHandler:(name:string,startDate:string,endDate:string)=>void, 
   }> = ({onClose,createEventHandler,message}) => {
    const [eventName,setEventName]=useState<string>('')
    const [eventStartDate,setEventStartDate]=useState<string>('')
    const [eventEndDate,setEventEndDate]=useState<string>('')
    const [allFieldActive,setAllFieldActive]=useState<boolean>(false)

    const clickHandler=(event:React.SyntheticEvent<Element, Event>)=>{
        event.preventDefault();
        try{ createEventHandler(eventName,eventStartDate,eventEndDate)
        } catch (e:any) {
            message(e.message)
        }
    }
    useEffect(()=>{
        if(!eventName||!eventStartDate||!eventEndDate){setAllFieldActive(false)
        }else{setAllFieldActive(true)} 
        
    },[eventName,eventStartDate,eventEndDate])
  
  return (
    <Modal onClose={onClose}>
        <Container>
        <Header>
        <Title>New Event</Title>
        <CloseBTN onClick={()=>onClose(false)}  > <img src={closeIcon} alt='close' style={{width:'20px'}}/></CloseBTN>
        </Header>
        <InputsContainer>
        <>
        <EventName isEnable={allFieldActive}  onChange={(e)=>setEventName(e.target.value)} value={eventName}/>
        <InputLabal>Name of event</InputLabal>
        </>
        <div>
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventStartDate(e.target.value)}min={eventStartDate?eventStartDate:eventStartDate}  />
        {/* <DateLabal>Start time</DateLabal> */}
        </div>
        <div>
        <DateInput isEnable={allFieldActive} onChange={(e)=>setEventEndDate(e.target.value)} min={eventStartDate} />
        {/* <DateLabal>End time</DateLabal> */}
        </div>
        
        </InputsContainer>
       {<CreateButton isEnable={allFieldActive} onClick={(e)=>clickHandler(e)}>CREATE EVENT</CreateButton>}
        </Container>
    </Modal>
  )
}


export default Form