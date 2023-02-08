import styled from 'styled-components';

export const BackdropContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 20;
background-color: rgba(0, 0, 0, 0.75);
`;
export const ContentContainer = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
justify-content: space-around;
height: 100%;
 gap:20px;
`;
export const ModalContainer = styled.div`

position: fixed;
top:calc(50% - 160px);
right:calc(50% - 200px);
width: 400px;
max-width: 1200px;
height: 400px;
background-color: white;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
z-index: 30;
animation: slide-down 300ms ease-out forwards;
@media (min-width: 768px) {
    //   left: calc(50% - 600px);
    
  }
@keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;
