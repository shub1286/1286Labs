
import FacebookIcon from "~svg/facebook.svg"
import HamburgerIcon from "~svg/icon-hamburger.svg"
import CrossIcon from "~svg/cross-icon.svg"
import TextIcon from "~svg/m-icon.svg"
import TwitterIcon from "~svg/twitter.svg"
import { HeaderBrand, HeaderContentLeft, HeaderContentRight, HeaderMenu, HeaderSocialBlock, HeaderStyle } from "./style"
import { Show, Hide,useDisclosure } from '@chakra-ui/react'
import Menu from "./Menu"
import Offcanvas from "./Offcanvas"
import { useEffect } from "react"
import useMediaQuery from "src/hooks/useMedia"

export default function Header() {
  const isWidthLargerThan1200 = useMediaQuery(1200);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HeaderStyle>
      <div className="site-header">
        <HeaderContentLeft>
          <Hide above='xl'>
            {isOpen? <CrossIcon className="site-hamburger" onClick={onClose}/> : <HamburgerIcon className="site-hamburger" onClick={onOpen}/>}
            
          </Hide>
          <HeaderBrand>
            <img src="./image/png/logo.png" alt="" />
          </HeaderBrand>
        </HeaderContentLeft>
        <HeaderContentRight>
          {!isWidthLargerThan1200 && <HeaderMenu>
              <Menu />
            </HeaderMenu>}
          <HeaderSocialBlock>
            <div className="social-single">
              <a href=""><FacebookIcon /></a>
            </div>
            <div className="social-single">
              <a href=""><TextIcon /></a>
            </div>
            <div className="social-single">
              <a href="https://www.twitter.com/1286Labs" target="_blank" rel='noopener noreferrer'>
                <TwitterIcon />
              </a>
            </div>
          </HeaderSocialBlock>
        </HeaderContentRight>
      </div>
      <Offcanvas isOpen={isOpen} onClose={onClose}/>
    </HeaderStyle>
  )

}

