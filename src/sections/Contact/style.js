import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const ContactStyle = styled.div`
background: #010101;
padding-top:30px;
padding-bottom:30px;
position:relative;
   .row{
    --bs-gutter-x: 22px;
    --bs-gutter-y:  22px;
   }
   
    .input-large-item{
        display: flex;
        align-items: center;
        color: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.25);
        justify-content: center;
        min-height: 50px;
        border-radius: 6px;
        width:100%;
        
    }
    .css-1ui6ryi.floating-label {
        color: #ffffff;
    }
   .css-1r2f04i {
    margin-bottom: 0;
    }
   .file{
       min-height:50px;
   }
   .height{
       min-height:146px;
   }
    

    .submit-button{
        margin-top: 4px;
        display:block;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: 0.03em;
        background: #FFFFFF;
        &:not(.invalid){
            color:#000000;
        }
        &.invalid{
            background: transparent;
                color: rgba(255, 255, 255, 0.25);
                cursor: not-allowed;
                pointer-events:none;
            }
        }
        input{
            color:#fff
        }
        textarea{
            color:#fff;
        }
`
export const TitleBlock = styled.div`
    .title{
        color:#fff;
    }
    a{
        text-decoration:underline;
        font-weight:600;
    }
`
export const BoxedLayout = styled(Box)`
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius:8px;
`
