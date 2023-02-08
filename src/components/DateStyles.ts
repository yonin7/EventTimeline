import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  text-align: center;
  gap:15px;
  width: 100%; 
  background:rgba(240, 240, 240, 0.53);
  height: 5vh;
  padding:0 20px;
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
font-size:1.7rem;
margin-bottom:5px;

:focus{
    outline: none;
    border:none;
}
@media (max-width: 740px) {
    font-size:0.75rem;
    margin-bottom:0px;

  }
`;
