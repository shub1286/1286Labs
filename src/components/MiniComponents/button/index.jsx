import { ScrollButton } from "./style";
import { Box, Text } from "@chakra-ui/react";
import ArrowIcon from "~svg/arrow-down.svg";

export default function FooterButton({direction="down",...props}) {
    const scrollTo = (direction) => {
        if(direction==="up"){
            return fullpage_api.moveTo("hero",0);
        }else{
            return fullpage_api.moveSectionDown();
        }
    };
  
    return (

        <ScrollButton {...props} onClick={() => scrollTo(direction)}>
            {direction === "down" ? <span className="btn scroll-btn">
                <Text mr="5px">SCROLL DOWN </Text>
                <ArrowIcon pl="5px" />
            </span>:<span className="btn scroll-btn up-arrow">
                <Text mr="5px">Back to Top </Text>
                <ArrowIcon pl="5px" />
            </span>}
            
        </ScrollButton>

    )
}