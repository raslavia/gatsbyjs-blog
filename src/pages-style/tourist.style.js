import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  form {
    width: 380px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    input {
      background: none;
      background-color: white;
      color: black;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid black;
      margin: 25px 0;

      &:focus {
        outline: none;
      }
    }
    button {
        min-width: 165px;
        width: auto;
        height: 50px;
        letter-spacing: 0.5px;
        line-height: 50px;
        padding: 0 35px 0 35px;
        font-size: 15px;
        background-color: grey;
        color: white;
        text-transform: uppercase;
        font-weight: bolder;
        border: none;
        display: flex;
        justify-content: center;
      
        &:hover {
          background-color: white;
          color: black;
          border: 1px solid black;
        }
    }
  }
`
