
import { Card } from "./style";
import MaveIcon from "~svg/mave-icon.svg"
import { Box, Text } from "@chakra-ui/react";


const secretText="⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️"
const secrettitle = "⬛️⬛️⬛️⬛️⬛️⬛️⬛️⬛️"
const secretBtn = "TOP SECRET"
export default function ProductCard({ image = "./image/png/product-card-img.png", badge={}, title, text, link, linkText,secret }) {
  return (

    <Card>
      <Card.Image>
        <img className="w-100" src={image} alt="" />
      </Card.Image>
      <Card.Body>
        <Card.Title>
          <Text as="h3" textStyle="heading-15" mb="7px">{secret? secrettitle: title}</Text>
          {!secret &&
          <Card.Badge variation={badge.variation}>{badge.text}</Card.Badge>}
        </Card.Title>
        <Text as="p" textStyle="text-13" mb="20px">{secret? secretText: text}</Text>
        <Card.Footer>
        {secret? secretBtn: <>{link? <Card.Link as="a" href={link}>{linkText}<MaveIcon className="mave-icon"/></Card.Link> : <Card.Link as="span">{linkText}</Card.Link>}</>}
        </Card.Footer>
      </Card.Body>
    </Card>

  )
}