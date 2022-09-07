import { Box } from "@chakra-ui/react";
import { rgba } from "polished";
import styled from "@emotion/styled";

const InputStyle = styled.input`
    background: transparent;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 6px;
    min-height:${p => p.h ? p.h :"50px"};
    padding-left:${p => p.pl ? p.pl : "15px"};
    padding-right:${p => p.pr};
    order:2;
    &.floating-label{
        &:focus{
            &~label{
                display:inline-block;
                top: -1px;
                background:#010101;
                padding: 0 5px;
                font-size:11px;
            }
        }
    }
    &:focus{
        box-shadow:none;
        outline:0;
        &~label{
            display:none;
        }
    }
`
const InputWrapper = styled(Box)`
    position:relative;
    display:flex;
    flex-direction:column;
    textarea{
        padding-top:10px;
    }
`
const Label = styled.label`
 
    ${p => p.float? `
        transition:.4s;
        position: absolute;
        left: 15px;
        margin-bottom: 0;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.03em;
        pointer-events:none;
        display:inline-block;
        color: rgba(255, 255, 255, 0.5);
        &.textarea-label{
            top:18%;
        }
        &.has-value{
            display:inline-block;
            top: -1px;
            padding: 0 5px;
            background:#010101;
            font-size:11px;
         }
    `:`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: rgba(0, 0, 0, 0.75);
    order:1;
    `}
    ${p => p.required ? `&:after{
        content:"*";
        padding-left:3px;
        color:${rgba("#EC0000",.75)};
        font-size:inherit;
    }`:``}
`

export {Label,InputStyle,InputWrapper};