import { Box, Container, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { HeroBadge, HeroStyle,  TitleBlock } from "./style";
import ArrowIcon from "~svg/arrow-corner.svg";
import FooterButton from "~components/MiniComponents/button";

export default function HeroSection() {
    return (
        <HeroStyle>
            <Container>
                <Flex justifyContent="center">
                    <Box maxWidth="759px" w="100%" className="hero-content">
                        <TitleBlock>
                            <Text textStyle="64" as="h1" className="title" mb="30px">Discover the power of Web3 with us</Text>
                            <Text maxWidth="700px" textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)">With MaveFi &amp; other WIP products we aim to make web3 accessible to everyone.
                                We build products for Automation, Education, Finance &amp; lots more. Join the dream team </Text>
                        </TitleBlock>
                    </Box>
                </Flex>
                <FooterButton as="button" onClick={() => moveSectionDown()}/>
            </Container>
            <HeroBadge as="a" href="https://mavefi.com" target="_blank" rel='noopener noreferrer'>
                <p>New to Web3? Visit <span> mavefi.com</span> to learn free of any cost. </p><ArrowIcon/>
            </HeroBadge>
        </HeroStyle>
    )
}