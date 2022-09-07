import styled from "@emotion/styled";
import Slider from "react-slick"
import { Container } from "@chakra-ui/react";
// import breakpoints from "~theme/foundations/breakpoints";
const defaultSettings =  {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots:false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1
          }
        },
      ]
  };

  const SliderWrapper = styled.div`
    overflow:hidden;
    .slick-list{
        margin: 0 -15px;
        padding-top:2px;
        padding-bottom:2px;
        ${p => p.slickListCss ? p.slickListCss:`@media(min-width:576px){
          width:140%;
      }`}
        @media(min-width:1200px){
            width:128%;
        }
        @media(min-width:1400px){
            width:114%;
        }
        @media(min-width:1800px){
            width:160%;
        }
    }
    .slick-slide{
        padding-right:15px;
        padding-left:15px;
    }
    ${p => p.allEqual && `
      .slick-list{
        display: flex;
      }
      .slick-track{
        display:flex!important;
        .slick-slide{
          height:100%;
          >div{
            height:100%;
            >div{
              height:100%;
            }
          }
        }
      }
    `} 

    
  `
export default function SliderPerView ({children,settings = defaultSettings ,...props}){
    return(
        <SliderWrapper {...props}>
            <Container className="slider-container">
                <Slider {...settings} >
                    {children}
                </Slider>
            </Container>
        </SliderWrapper>
    )
}