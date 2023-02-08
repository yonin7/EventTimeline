import React from 'react'
import { Container,Title,DateInput } from './DateStyles';

const Date: React.FC<{ setSelectedDay:(setSelectedDay:string)=>void}> = ({setSelectedDay}) => {
    const selectDayHandler=(date:string)=>{
        setSelectedDay(date)
    }
  return (
    <Container>
        <Title>Task for:</Title>
        <DateInput onChange={(e)=>selectDayHandler(e.target.value)}></DateInput>
    </Container>
  )
}

Date.propTypes = {}

export default Date