import styled from "@emotion/styled";
import { lineHeight } from "~utils/";

export const HeroStyle = styled.div`
position:relative;
.hero-content{
    padding-top:60px;
    @media(min-width:768px){
        padding-top: 90px;
    }
}
`
export const TitleBlock = styled.div`
    text-align:center;
    
    .title{
        // background: #CA4246;
        // background-color: #CA4246;
        background: linear-gradient(90deg, #FF9F1C 0%, #FFBF69 50.52%, #2EC4B6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        line-height:${lineHeight(28.5,18)};
    }
`
export const HeroBadge = styled.div`
background: linear-gradient(0deg, rgba(46, 102, 236, 0.9), rgba(46, 102, 236, 0.9)), #FFFFFF;
border: 1px solid #2E66EC;
border-radius: 4px;
display:inline-flex;
align-items:center;
font-weight: 500;
font-size: 13px;
line-height: 17px;
padding-left:9px;
padding-right:9px;
padding-top:5px;
padding-bottom:5px;
letter-spacing: 0.05em;
color:#fff;
position:absolute;
top: 95px;
left: 50%;
transform: translate(-50%);
max-width:430px;
width:90%;
@media (max-width:767px){
    display:none;
}
p{
    font-size:inherit;
}
span{
    text-decoration:underline;
    margin:0 4px;
    display:inline;
}
svg{
    margin-left:7px;
}
`