const { Box } = require("@chakra-ui/react")
import {InputStyle, InputWrapper, Label} from "./style"
// import { useState } from "react";
export const Input = ({label,required,absoluteLabel=true,wrapper,value,...props}) =>{
    // const [value,setValue] = useState("");
    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }
    return(
        <InputWrapper {...wrapper}>
            <InputStyle as="input"  required={required}  value={value} {...props} />
            {label && <Label htmlFor="inputName" className={`form-label ${value !== "" ? " has-value" :''}`} required={required} float={absoluteLabel}>{label}</Label>}
        </InputWrapper>
    )
}
export const Textarea = ({label,required,absoluteLabel=true,wrapper,value,...props}) =>{
    // const [value,setValue] = useState("");
    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }
    return(
        <InputWrapper className="name" {...wrapper}>
            <InputStyle as="textarea" required={required}  value={value} {...props} />
            {label && <Label htmlFor="inputName" className={`textarea-label form-label${required ? " required":""}${value !== "" ? " has-value" :''}`} required={required} float={absoluteLabel}>{label}</Label>}
        </InputWrapper>
    )
}
