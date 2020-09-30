import styled from "styled-components"

export const Header = styled.header`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  
  h1 {
    border-bottom: 1px solid;
    color: #ffffff;
    font-family: "Roboto";
    font-weight: 500;
    margin: 0;
    margin-bottom: .25rem;
  }
  
  h2 {
  color: #dcdcdc;
  font-size: .8rem;
  font-weight: 300;
  margin: 0;
  margin-bottom: 2rem;
  }  
`;

