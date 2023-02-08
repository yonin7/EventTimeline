import styled from 'styled-components';

export const Container = styled.div`
position: relative;
background: #272e48;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
padding: 5rem;
margin: 0 auto 1rem auto;
overflow: hidden;
:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -2px;
  border-right: 2px dashed #4b546f;
  height: 100%;
  display: block;
}
`;
export const TimelineRow = styled.div`
padding-left: 50%;
position: relative;
margin-bottom: 30px;
:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}
:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 20px;
}
`;
export const TimelineTime = styled.div`
position: absolute;
right: 50%;
top: 15px;
text-align: right;
margin-right: 20px;
color: #bcd0f7;
font-size: 1.5rem;
:nth-child(even) .timeline-content {
  margin-left: 40px;
  text-align: left;
  :after {
    left: -8px;
    right: initial;
    border-bottom: 0;
    border-left: 0;
    transform: rotate(-135deg);
  }
  :before {
    left: -52px;
    right: initial;
  }
}
`;
export const TimelineContent = styled.div`
position: relative;
padding: 20px 30px;
background: #1a233a;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
:after {
  content: "";
  position: absolute;
  top: 20px;
  height: 16px;
  width: 16px;
  background: #1a233a;
}
:before {
    content: "";
    position: absolute;
    top: 20px;
    right: -49px;
    width: 20px;
    height: 20px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    z-index: 10;
    background: #272e48;
    border: 2px dashed #4b546f;
  }  
  h4 {
    margin: 0 0 20px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 150%;
  }
  p {
    margin-bottom: 30px;
    line-height: 150%;
  }
  i {
    font-size: 1.2rem;
    line-height: 100%;
    padding: 15px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    background: #272e48;
    margin-bottom: 10px;
    display: inline-block;
  }
  .badge {
    color: #ffffff;
    background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
  }
`;
export const DeleteBTN= styled.button`
  width:40px;
  background: #2196F3;
  backface-visibility: hidden;
  color: #212121;
  cursor: pointer;
  display: inline-block;
  font-family: Circular,Helvetica,sans-serif;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -.01em;
  line-height: 1.3;
  position: relative;
  text-align: left;
  text-decoration: none;
  transform: translateZ(0) scale(1);
  transition: transform .2s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  border:0;
  padding:0;
  :not(:disabled):hover {
      transform: scale(1.05);
  }
  :not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
  }
  :not(:disabled):hover:active {
    transform: scale(1.05) translateY(.125rem);
  }

  :focus {
    outline: 0 solid transparent;
  }
  
  :focus:before {
    content: "";
    left: calc(-1*.375rem);
    pointer-events: none;
    position: absolute;
    top: calc(-1*.375rem);
    transition: border-radius;
    user-select: none;
  }
  
  :focus:not(:focus-visible) {
    outline: 0 solid transparent;
  }
  
  :focus:not(:focus-visible):before {
    border-width: 0;
  }
  
  :not(:disabled):active {
    transform: translateY(.125rem);
  }
  
    
` 

