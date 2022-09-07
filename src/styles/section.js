import styled from "@emotion/styled"
export const Section = styled.div`
    display:block!important;    
    ${p => !p.mobile ?  `&>div{
        padding-top: 120px;
        padding-bottom: 100px;
        min-height: 100vh;
        position:relative;
    }`:`
    >div{
        .scroll-btn{
            display:none;
        }
        padding-top: 100px;
    }
    `}
    ${p => !p.noflex && `
        &>div{
            // display: flex;
            // align-items: center;
            // flex-direction: column;
            // justify-content: center;
        }
    `}       
`

