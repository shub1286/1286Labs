import React from 'react'

const SuperTag = ({value,className='d-block',...rest})=>{
    return(
        <span dangerouslySetInnerHTML={{__html: value}} {...rest} />
    )
}

export default SuperTag;