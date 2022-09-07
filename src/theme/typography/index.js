import { lineHeight } from "~utils/";

export const FONT_WEIGHT = {
    BOLD: 'bold',
    SEMI: 600,
    NORMAL: 'normal',
  };
const textStyles = {
    display1: {
      fontSize: '76.8px',
      fontWeight: FONT_WEIGHT.SEMI,
      lineHeight: '6rem',
    },
    "64":{
      fontSize:["34px",{md:"48px"},{lg:"54px"},{xl:"64px"}],
      lineHeight:lineHeight(81,64),
      letterSpacing:"-0.015em",
      fontWeight:"700"
    },
    "18":{
      fontSize:["16px",{lg:"18px"}],
      lineHeight:lineHeight(28.5,18),
      letterSpacing:"0.01em",
      fontWeight:"400"
    },
    "heading-20":{
      fontSize:"20px",
      lineHeight:lineHeight(27,20),
      letterSpacing:" 0.05em",
      fontWeight:"600"
    },
    "heading-24":{
      fontSize:"24px",
      fontWeight:"600",
      letterSpacing: "0.05em",
      lineHeight:lineHeight(32,24),
    },
    "heading-15":{
      fontWeight: "700",
      fontSize: "15px",
      lineHeight: lineHeight(20,15)
    },
    "text-13":{
      fontSize:"13px",
      lineHeight:lineHeight(21,13),
      letterSpacing:" 0.03em",
      fontWeight:"400"
    },
    "text-15":{
      fontSize:"15px",
      lineHeight:lineHeight(24,15),
      letterSpacing:"0.0eem",
      fontWeight:"400"
    }
  };

  export default textStyles;