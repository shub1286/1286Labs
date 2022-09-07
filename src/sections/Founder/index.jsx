import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import data from "./data";
// import { SectionButton } from "~styled/btn";
import { CardDeck, FounderStyle, FounderTitleBlock} from "./style";
// import ArrowIcon from "~svg/arrow-down.svg"
import FounderCard from "~components/MiniComponents/Cards/FounderCard";
import FounderCardLarge from "~components/MiniComponents/Cards/FounderCardLarge";
import FooterButton from "~components/MiniComponents/button";
import SliderPerView from "~components/Layouts/SliderPerView";
import Slider from "react-slick/lib/slider";
export default function FounderSection() {
    const sliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots:false,
        arrows:false,
        autoplay: false,
        autoplaySpeed: 2500,
        responsive: [
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
        <FounderStyle>
            <Container>
                <Box w="100%" >
                    <FounderTitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Founders</Text>
                    </FounderTitleBlock>
                </Box>
               
                <Box>
                    <CardDeck>
                        <Slider {...sliderSettings} >
                            {React.Children.toArray(data.map(({ title, text, image, linkText, link }) => {
                                return (
                                    
                                    <FounderCard image={image} title={title} text={text} linkText={linkText} link={link} />
                                    
                                )
                            }))}
                        </Slider>
                        <Box className="large-card-block">
                            <FounderCardLarge/>
                        </Box>
                    </CardDeck>
                </Box>
                <FooterButton as="button"/>
            </Container>
        </FounderStyle>
    )
}