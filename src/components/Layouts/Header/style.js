import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const HeaderStyle = styled(Box)`
background: #010101;
border-top: 1px solid rgba(255, 255, 255, 0.15);
border-bottom: 1px solid rgba(255, 255, 255, 0.15);
position: fixed;
top: 0;
left: 0;
z-index: 99;
width: 100%;
@media (max-width:1200px){
    z-index:11111;
}
.site-header{
    padding:16px 30px;
    background:black;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(min-width:992px){
        padding:6px 50px;
    }
}
`

export const HeaderSocialBlock = styled.div`
    display: flex;
    align-items: center;
    padding-left:15px;
    .social-single{
        margin-left: 7.5px;
        margin-right: 7.5px;
        min-width:20px;
        max-width:20px;
        min-height:20px;
        max-height:20px;
        background:black;
        display:flex;
        align-items:center;
        justify-content:center;
        path{
            fill: rgba(255, 255, 255, .25);
            transition:.4s;
        }
        &:hover{
            path{
                fill: rgba(255, 255, 255, 1);
            }
        }
    }

`
export const HeaderBrand = styled.div`
    min-width:136px;
`


export const HeaderContentRight = styled.div`
    display:flex;
    align-items:center;
`
export const HeaderContentLeft = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
svg{
    margin-right:25px;
    path{
        stroke:rgb(255, 255, 255, 0.5);
    }
}
`
export const HeaderMenu = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    ul{
        display:flex;
        align-items:center;
        margin-left:-12.5px;
        margin-right:-12.5px;
        .nav-item{
            list-style:none;
            padding: 12.5px;
            .link{
                font-weight: 500;
                font-size: 14px;
                line-height: 19px;
                letter-spacing: 0.05em;
                color: rgba(255, 255, 255, 0.5);
            }
            &.active{
                .link{
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
`
export const OffCanvasMenu = styled.div`
    ul{
        list-style:none;
        padding-top: 85px;
        .nav-item{
            list-style:none;
            padding: 12.5px;
            .link{
                font-weight: 500;
                font-size: 20px;
                line-height: 27px;
                letter-spacing: 0.05em;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }
`