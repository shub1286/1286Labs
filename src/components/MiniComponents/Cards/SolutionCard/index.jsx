
import { Card } from "./style";
import MaveIcon from "~svg/mave-icon.svg"
import { Box, Text } from "@chakra-ui/react";

export default function SolutionCard({ title, text }) {
  return (

    <Card>
      <Card.Body>
          <Text as="h3" textStyle="heading-24" mb="8px">{title}</Text>
          <Text as="p" textStyle="text-15">{text}</Text>
      </Card.Body>
    </Card>

  )
}