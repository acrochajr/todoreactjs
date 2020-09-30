import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 100%;
`;

export const Link = styled.a`
    text-decoration: none;
`;

export const FormField = styled.input`
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    color: #002233;
    font-size: 1.2rem;
    padding: .5rem 1rem;
    transition: all .2s linear;
   
    &:focus {
    box-shadow: 0 0 7px rgba(255, 255, 255, .9);
    border-color: #002233;
    outline: none;
    }
`;

export const FormBtn = styled.button`
    background: palevioletred;
    border: none;
    border-radius: 3px;
    color: #fdfdfd;
    margin-top: 1rem;
    padding: .5rem;
    transition: background .2s linear;
    
    &:focus{
        outline: none;
    }
    &:hover{
        background: #2BA694;
        cursor: pointer;
    }
`;

 export const Error = styled.div`
    display: flex;
    justify-content: center;
    font-size: 16px;
    color: blueviolet;
    align-items: center;
    margin: 4px auto;
    background: #F2E205;
    padding: 4px;
    border-radius: 5px;
    width: 90%;
`;
 export const Task = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px auto;
    font-size: 24px;
    font-family: Roboto;
    color: #fff;
    background: #F29F05;
    padding: 4px;
    border-radius: 5px;
    width: 90%;
    
    &:focus{
        outline: none;
    }
    &:hover{
        text-decoration:line-through red;
        cursor: pointer;
    } 
 `;

