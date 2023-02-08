import {IdataDayElement} from '../interfaces/data'

export const readEventData=()=>{
    let saved:string|null = sessionStorage.getItem("eventData");
    saved=saved as string   
    const initialValue = JSON.parse(saved);
    return initialValue || {};

}
export const writeEventData=(eventData:{[key:string]:IdataDayElement[]})=>{

    sessionStorage.setItem("eventData", JSON.stringify(eventData));

}

  
    