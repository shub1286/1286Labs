
import { Card } from "./style";
import MaveIcon from "~svg/mave-icon.svg"
import TwitterIcon from "~svg/twitter.svg"
import { Box, Text } from "@chakra-ui/react";

export default function FounderCard({ image, title, text, link, linkText }) {
  return (

    <Card>
      <Card.Image>
        <img className="w-100" src={image} alt="" />
      </Card.Image>
      <Card.Body>
          <Text as="h3" textStyle="heading-20" mb="6px">{title}</Text>
          <Text as="p" textStyle="text-13" mb="12px">{text}</Text>
        <Card.Footer>
          {link? <Card.Link as="a" href={link}><TwitterIcon className="twitter-icon"/>{linkText}<MaveIcon className="mave-icon"/></Card.Link> : <Card.Link as="span">{linkText}</Card.Link>}
        </Card.Footer>
      </Card.Body>
    </Card>

  )
}