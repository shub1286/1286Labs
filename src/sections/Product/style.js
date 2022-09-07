import styled from "@emotion/styled";

export const ProductStyle = styled.div`
.text{
    color: rgba(255, 255, 255, 0.85);
}

.product-slider {
    width: 100%;
}
`
export const ProductTitleBlock = styled.div`
    @media(min-width:428px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    margin-bottom:30px;
    @media(min-width:992px){
        margin-bottom:39px;
    }
    .title{
        color:#ffffff;
        @media(max-width:427px){
            margin-bottom:10px;
        }
        margin-bottom:0;
    }
`
export const SliderBtnBlock = styled.div`
display: flex;
    .icon-single{
        &.left{
            svg{
                position: relative;
                right: -2px;
            }
        }
        &.right{
            svg{
                position: relative;
                right: 2px;
            }
        }
        @media(max-width:480px){
            min-width: 30px;
            max-width: 30px;
            min-height: 30px;
            max-height: 30px;
        }
        min-width: 52px;
        max-width: 52px;
        min-height: 52px;
        max-height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #fff;
        border-radius: 50px;
        background: #fff;
        margin-right:10px;
        &:last-child{
            margin-right:0;
        }
        svg{
            @media(max-width:480px){
                min-width: 12px;
                max-width: 12px;
                min-height: 12px;
                max-height: 12px;
            }
            path{
                fill:#D2D4DA;
                transition:.4s;
            }
        }
        &:hover{
            svg{
                path{
                    fill:#000;
                }
            }
        }
    }
`
