import { Box, Container, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import {  InvestorStyle,  TitleBlock } from "./style";
import ArrowIcon from "~svg/arrow-down.svg"
import { SectionButton } from "~styled/btn";
import FooterButton from "~components/MiniComponents/button";

export default function InvestorSection() {
    return (
        <InvestorStyle>
            <Container>
                <Box  w="100%" >
                    <TitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Investors</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)"mb="20px">We are planning to raise a seed round soon.</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)">Interested parties can get in touch with us via our Twitter <a href="https://www.twitter.com/1286Labs" target="_blank" rel='noopener noreferrer'>@1286Labs</a> or reach out to us via Email at <a href="mailto:shubham@mavefi.com">shubham@mavefi.com</a>, <a href="mailto:nate@mavefi.com">nate@mavefi.com</a></Text>
                    </TitleBlock>
                </Box> 
                <FooterButton as="button"/>
            </Container>
        </InvestorStyle>
    )
}