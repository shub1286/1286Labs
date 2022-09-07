import { Box, Container, Flex, Grid, SimpleGrid, Text } from "@chakra-ui/react";
import { InitiativesStyle,  TitleBlock } from "./style";
import ArrowIcon from "~svg/arrow-down.svg"
import { SectionButton } from "~styled/btn";
import FooterButton from "~components/MiniComponents/button";

export default function InitiativesSection() {
    return (
        <InitiativesStyle>
            <Container>
                <Box  w="100%" >
                    <TitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Initiatives</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)">Details coming soon :)</Text>
                    </TitleBlock>
                </Box>
                <FooterButton as="button"/>
            </Container>
        </InitiativesStyle>
    )
}