
import { Card } from "./style";
import MaveIcon from "~svg/mave-icon.svg"
import TwitterIcon from "~svg/twitter.svg"
import { Box, Text } from "@chakra-ui/react";

export default function FounderCardLarge({ image, title, text, link, linkText }) {
  return (

    <Card>
       <Text as="h3" textStyle="heading-20" mb="11px">Message from the Founders</Text>
        <Text as="p" textStyle="text-15" mb="10px">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown. </Text>
        <Text as="p" textStyle="text-15" >Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</Text>
    </Card>

  )
}