import React from 'react';


const Validations = (props) => {
    let validationsMessage = 'Text large'
    if ( props.inputLength <= 5) {
        validationsMessage = 'Text short'
    }

    return(
        <div>
            <p>{validationsMessage}</p>
        </div>
    )
}

export default Validations