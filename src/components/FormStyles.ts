import styled from 'styled-components';
type createProps = {
  isEnable: boolean;
};
export const Container = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
gap: 40px;
width: 400px;
height: 408px;
background: #FFFFFF;
font-family: 'Outfit';
vertical-align: text-bottom;
box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
border-radius: 8px;


`;
export const Header=styled.header`
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: center;
padding: 16px 40px;
gap: 8px;
width: 100%;
height: 60px;
background: #FFFFFF;
border-bottom: 1px solid #F0F0F0;
border-radius: 8px 8px 0px 0px;
flex-grow: 0;
z-index: 2;
`
export const Title = styled.h3`

`;
export const InputLabal = styled.label`
position: absolute;
pointer-events: none;
transform: translate(0, 23px) scale(1);
transform-origin: top left;
transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
color: #6f81a5;
font-size: 16px;
line-height: 1;
left: 16px;
padding:0 30px;  

`;
export const DateLabal = styled.label`
position: absolute;
pointer-events: none;
transform: translate(0, 23px) scale(1);
transform-origin: top left;
transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
color: #6f81a5;
font-size: 16px;
line-height: 1;
left: 16px;
padding:0 30px;
`;
export const EventName = styled.input.attrs({type:'text'})<createProps>`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
border:none;
 width:320px;
 height:56px;
 outline: none;
 border:none;
 border-bottom:1px solid black;
 background:none;
 color:${(props) =>props.isEnable? ` #5D6965`:'#A3A3A3'}
 
}
 
 `;
 export const DateInput = styled.input.attrs((props:any)=>({ 
  type: "datetime-local" }))<createProps> `
 height:56px;
 width:320px;
 color:${(props) =>props.isEnable? ` #5D6965`:'#A3A3A3'};
 outline: none;
 border:none;
 border-bottom:1px solid black;
background:none;
`;
 export const InputsContainer = styled.div`
 padding:0 40px;
 vertical-align: bottom;
  display:flex;
  flex-direction:column;
  vertical-align: text-bottom;
  :focus-within label {
    transform: translate(0, 12px) scale(0.8);
    color: #0a53e4;
  }

`;


export const CreateButton = styled.button.attrs((props:any) => ({
  disable:props.isEnable? false:true
}))<createProps>`
position:absolute;
right:30px;
bottom:20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
gap: 8px;
border:none;
width: 136px;
height: 44px;
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
border-radius: 8px;
background:${(props) =>props.isEnable? ` linear-gradient(180deg, #2CCEB3 0%, #2CCE62 100%)`:'#F0F0F0'};
flex: none;
order: 1;
flex-grow: 0;
color:${(props) =>props.isEnable? `#FFFFFF`:'#C7C7C7'};
@media (max-width: 740px) {

 width:136px;
 height: 44px;
}
:hover{
  background:${(props) =>props.isEnable? `  linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(180deg, #2CCEB3 0%, #2CCE62 100%)`:'#F0F0F0'};

  background:;
}
:disable{
  background: black;

}

`;