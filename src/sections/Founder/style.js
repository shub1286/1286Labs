import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const FounderStyle = styled.div`

.text{
    color: rgba(255, 255, 255, 0.85);
}
.card-block{
    display:flex;
    align-items:center;
    .card-single{
        display:flex;
    }
}

`
export const CardDeck = styled(Box)`
display:flex;
justify-content:center;
flex-wrap:wrap;
margin-left:-15px;
margin-right:-15px;

.slick-slider{
    width:100%;
    margin-bottom:30px;
    @media(min-width:1200px){
        max-width:calc(100% - 400px);
        display:block;
        margin-bottom:0;

    }
    .slick-track{
        display:flex;
    }
    .slick-list{
        @media(min-width:400px){
            width:137%;
        }
        @media(min-width:992px){
            width:100%;
        }
    }
    .slick-slide{
        padding-left:15px;
        padding-right:15px;
        height:auto;
        >div{
            height:100%;
        }
    }
}
.large-card-block{
    width:100%;
    padding-left:15px;
    padding-right:15px;
    @media(min-width:1200px){
        max-width:400px;
        display:block;

    }
}
`


export const FounderTitleBlock = styled.div`
    @media(min-width:428px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    margin-bottom:30px;
    @media(min-width:992px){
        margin-bottom:26px;
    }
    .title{
        color:#ffffff;
        @media(max-width:427px){
            margin-bottom:10px;
        }
        margin-bottom:0;
    }
`
