import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; 
  // background:rgba(240, 240, 240, 0.53);
  height: 100%;
  min-height: 95vh;
  font-family: 'Segoe UI', 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial,
    Ubuntu, Cantarell, 'Fira Sans', sans-serif;
  font-width: 400;
  line-height: 20px;
  font-size: 20px;
`;
export const Title = styled.h1`
    margin-bottom:10px;

    @media (max-width: 740px) {
        font-size:1.2rem;
        margin-bottom:0px;

      }

`;
export const DateInput = styled.input.attrs({ type: "date" })`
// -webkit-appearance: none;
outline: none;
border:none;
background:none;
height: 2vh;
font-size:2rem;
:focus{
    outline: none;
    border:none;
}
@media (max-width: 740px) {
    font-size:1rem;

  }
`;
export const AddButton = styled.button`
position:absolute;
right:100px;
bottom:75px;
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
background: linear-gradient(180deg, #2CCEB3 0%, #2CCE62 100%);
flex: none;
order: 1;
flex-grow: 0;

@media (max-width: 740px) {
 right:35px;
 bottom:35px;
 width:75px;
 height: 75px;
}
:hover{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04)), linear-gradient(180deg, #2CCEB3 0%, #2CCE62 100%);
}

`;