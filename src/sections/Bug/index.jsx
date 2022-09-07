import { Box, Container, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import {  BugBountyStyle,  TitleBlock } from "./style";
import ArrowIcon from "~svg/arrow-down.svg"
import { SectionButton } from "~styled/btn";
import FooterButton from "~components/MiniComponents/button";

export default function BugBountySection() {
    return (
        <BugBountyStyle>
            <Container>
                <Box  w="100%" >
                    <TitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Bug Bounty</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)"mb="20px">Because just like you, we too hate bugs.</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)"mb="20px">1286 Labs recognises the value that external researchers can bring to the security of our systems, and we welcome and seek to reward eligible contributions from such contributors. If you believe that you have found a security vulnerability on our technologies and programmes, we encourage you to let us know straight away. We will investigate all legitimate reports and do our best to quickly fix the problem. </Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)">You can get in touch with us at <a href="mailto:bugbounty@1286labs.com">bugbounty@1286labs.com</a> or shoout us a DM on Twitter <a href="https://www.twitter.com/1286Labs">@1286Labs</a></Text>
                    </TitleBlock>
                </Box>
                <FooterButton as="button"/>
            </Container>
        </BugBountyStyle>
    )
}