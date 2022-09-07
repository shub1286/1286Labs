import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import data from "./data";
import { SectionButton } from "~styled/btn";
import { ProductStyle, ProductTitleBlock, SliderBtnBlock } from "./style";
import ArrowIcon from "~svg/arrow-down.svg"
import LeftIcon from "~svg/chevron-right.svg"
import RightIcon from "~svg/chevron-left.svg"
import ProductCard from "~components/MiniComponents/Cards/ProductCard";
import SliderPerView from "~components/Layouts/SliderPerView";
import FooterButton from "~components/MiniComponents/button";

export default function ProductSection() {
  const sliderRef = React.useRef();
  const gotoNext = () => {
    sliderRef.current.slickNext();
  }
  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  }
    const sliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        autoplay: false,
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
                slidesToShow: 5
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 991,
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
                slidesToShow: 2
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1
              }
            },
          ]
      }
    return (
        <ProductStyle>
            <Container>
                <Box w="100%" >
                    <ProductTitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Products</Text>
                        <SliderBtnBlock>
                            <Box as="button" className="icon-single right" onClick={() => gotoNext()}>
                                <RightIcon id="icon" />
                            </Box>
                            <Box as="button" className="icon-single left" onClick={() => gotoPrev()}>
                                <LeftIcon id="icon" />
                            </Box>
                        </SliderBtnBlock>
                    </ProductTitleBlock>
                </Box>
            </Container>
                <Box className="product-slider">
                <SliderPerView settings={{...sliderSettings,ref:sliderRef}} slickListCss={`
                    @media(min-width:400px){
                    width:137%;
                    }
                `} >
                        {React.Children.toArray(data.map(({ title, text, badge, linkText,link, collected,secret }) => {
                            return (
                                <Box>
                                    <ProductCard secret={secret} title={title} badge={badge} text={text} linkText={linkText} link={link} collected={collected} />
                                </Box>
                            )
                        }))}
                </SliderPerView>
                </Box>
                  <FooterButton as="button"/>
        </ProductStyle>
    )
}