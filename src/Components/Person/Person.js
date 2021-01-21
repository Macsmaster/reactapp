import React from 'react'
import styled from 'styled-components'
import './Person.css'

const StyledDiv = styled.div`
{
    width: 60%;
    margin: 16px auto;
    border: solid 1px #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 20px;
    text-align: center
}
'@media (min-width: 500px)' : {
    width: '450px'
}
`

const person = (props) => {

    return (
        //<div className="Person" style={style}>
        <StyledDiv>       
            <p onClick={props.click}>Hola! Mi nombre es {props.name} y mi edad es {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}

export default person