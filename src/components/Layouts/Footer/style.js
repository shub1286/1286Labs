import styled from "styled-components";
import { pxToEm } from "~utils";

const Footer = styled.div`
    font-family:var(--inter);
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    border-right: 1px solid rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding-top: 50px;
    padding-bottom: 20px;
    // padding-left: 10px;
    background:#fff;
    .footer-wrapper{
        display: flex;
        margin-right: -40px;
        flex-wrap: wrap;
        justify-content: space-between;
        @media (min-width:1400px) {
            flex-wrap: nowrap;
        }
        .single-footer{
            padding-right: 40px;
            margin-bottom: 25px;
            width: 50%;
            @media (min-width:576px) {
                width: auto;
            }
        }

.footer-brand-col{
    width: 100%;
    margin-bottom: 40px;
    @media (min-width:1400px) {
        width: 353px;
    }
    
}
.footer-social-col{
    max-width: 215px;
    width: 100%;
    @media (max-width:576px) {
        max-width: 50%;
        width: 100%;
        .footer-social-inner{
            display: flex;
        }
        .footer-select-group{
            margin-top: -10px;
        }
    }
}


.footer-social{
    display: flex;
    flex-wrap: wrap;
    margin-left:-7.5px;
    margin-right:-7.5px;
    a{
        padding:7.5px;
        img{
            max-width:24px;
        }
    }
}
.footer-list-col{
    display: flex;
    .single-list-block{
        padding-right: 40px;
    }
}


.footer-select-menu{
    width: 149px;
    .selectbox{
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        height: 32px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0.05em;
        color: #000000;
        position: relative;
        cursor: pointer;
        background: rgba(58, 134, 255, 0.05);
        border: 1px solid rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        &:after{
            content: url(/images/icons/icon-caret-down.png);
            padding-left:3px;
            margin-left: auto;
            padding-right: 9px;
        };
        img{
            margin-right: 5px;
            max-width: 100%;
        }
    }
    .szh-menu-container{
        width: 100%;
        ul{
            width: 100%;
            padding-top: 5px;
            padding-bottom: 5px;
            li{
                padding-left: 10px;
                padding-right: 10px;
            }
        }
    }
}

.footer-select-group{
    .footer-select-menu{
        margin-top: 8px;
    }
}
`
export const FooterList = styled.ul`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 0;
   
`
export const FooterBrandBlock = styled.div`
    background: linear-gradient(270deg, rgba(58, 134, 255, 0.2) 0%, rgba(255, 190, 11, 0.2) 47.92%, rgba(251, 86, 7, 0.2) 100%);
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 11px 14px;
    margin-bottom: 15px;
    min-height:75px;
    img{
        max-width: 100%;
        margin-bottom: 10px;
    }
    p{
        font-weight: 700;
        font-size: 13px;
        line-height: ${pxToEm(17,13)};
        letter-spacing: 0.1em;
        margin-bottom: 0;
    }
`
export const FooterBlock = styled.ul`
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    margin-bottom: 0;
   
`
FooterList.Item = styled.li`
    font-weight: 500;
    font-size: 13px;
    line-height:15.73px;
    letter-spacing: 0.05em;
    color: rgb(0 0 0 / 80%);
    a{
        color: inherit;
        padding-top: 6px;
        padding-bottom: 5px;
    }
`


export default Footer;