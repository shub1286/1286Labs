import styled from "@emotion/styled";
export const ScrollButton = styled.div`
    transform:translate(-50%);
    position:absolute;
    bottom:15px;
    left:50%;
    right:auto;
    @media(min-width:768px){
        bottom:30px;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1.25px solid #2E66EC;
        border-radius: 5px;
        min-width:132px;
        min-height:27px;
        max-height:27px;
        font-weight: 500;
        font-size: 13px;
        line-height: 17px;
        text-align: center;
        letter-spacing: 0.05em;
        color: #2E66EC;
        padding:0 13px;
        svg{
            position:relative;
            top: -1px;
        }
        &.up-arrow{
            svg{
                transform:rotate(-180deg);
            }
        }
    }
    
`