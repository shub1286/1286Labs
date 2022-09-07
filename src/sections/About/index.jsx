import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { SectionButton } from "~styled/btn";
import { AboutStyle, AboutTitleBlock } from "./style";
import ArrowIcon from "~svg/arrow-down.svg";
import FooterButton from "~components/MiniComponents/button";

export default function AboutSection() {
    return (
        <AboutStyle>
            <Container>
                <Box w="100%" >
                    <AboutTitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="16px">About</Text>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px">Through the power of connection in web3 - 1286Labs was founded. Mutual web3 interests led the founders to meet online and share a vision for a more trusted, accessible future. The safe onboarding of new users is a major issue in the current environment. </Text>
                        </Box>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px">1286 Labs is an idea factory that brings people, knowledge, trust, and connections together. We have a team of developers, creatives and experts in their fields to meet the needs of the rapidly expanding FinTech industry. </Text>
                        </Box>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px">Our team is not limited to one product, platform or tool. We strive to improve the user experience by bridging the gap between the web2 familiarity and web3 innovation.  </Text>
                        </Box>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px">A Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. </Text>
                        </Box>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</Text>
                        </Box>
                        <Box>
                            <Text textStyle="18" as="p" className="text" mb="20px"></Text>
                        </Box>
                    </AboutTitleBlock>
                </Box>
                <FooterButton as="button"/>
                
            </Container>
        </AboutStyle>
    )
}