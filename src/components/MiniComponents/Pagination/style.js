import styled from "styled-components";

export const PaginationStyle = styled.ul`
    
display: flex;
justify-content:center;
padding-left: 0;
list-style: none;
margin-top: 40px;
margin-left:-2.5px;
margin-right:-2.5px;
margin-bottom:40px;
.page-item{
    background: rgba(58, 134, 255, 0.05);
    border-radius: 4px;  
    margin:2.5px;
    cursor: pointer;
    
    .page-link{
        min-width:34px;
        min-height:34px;
        max-height:34px;
        padding:7px 15px;
        min-width:34px;
        min-height: 34px;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: #6c757d;
        background: rgba(58, 134, 255, 0.05);
        border-radius: 4px; 
        display:flex;
        justify-content:center;
        align-items:center; 
        transition:.4s;
        &.active,&:hover{
            background-color:#3A86FF;
            color: #fff;
        }
        
    }
}
`