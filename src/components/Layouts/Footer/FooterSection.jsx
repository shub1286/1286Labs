
import { Menu, MenuItem } from '@szhsin/react-menu';
import { useState } from "react";
import Link from "~components/Core/Link"
import Footer, { FooterBrandBlock, FooterList } from "./style"
import { Container, Text, Image, useMediaQuery, Box } from '@chakra-ui/react';


const SelectGroup = () => {
  
  const [lang, setLang] = useState('English');
  const [system, setSystem] = useState('System');
  const handleLangClick = e => {
    setLang(e.value);
    console.log(e.value)
  };;
  const handleSystemClick = e => {
    setSystem(e.value);
    console.log(e.value)
  };;
  return (
    <div className="footer-select-group">
      <div className="footer-select-menu">
        <Menu menuButton={<span className="selectbox"><img src="/images/icons/icon-lang-globe.png" />{lang}</span>}>
          <MenuItem value="English 2" onClick={handleLangClick}>English 2</MenuItem>
          <MenuItem value="English 3" onClick={handleLangClick}>English 3</MenuItem>
          <MenuItem value="English 4" onClick={handleLangClick}>English 4</MenuItem>
        </Menu>
      </div>
      <div className="footer-select-menu">
        <Menu menuButton={<span className="selectbox"><img src="/images/icons/icon-computer.png" />{system}</span>}>
          <MenuItem value="system 1" onClick={handleSystemClick}>system 1</MenuItem>
          <MenuItem value="system 2" onClick={handleSystemClick}>system 2</MenuItem>
          <MenuItem value="system 3" onClick={handleSystemClick}>system 3</MenuItem>
        </Menu>
      </div>
    </div>
  )
}
export default function FooterSection() {
  // const [isMobile] = useMediaQuery(["(max-width:991px)"])
  // const [isTablet] = useMediaQuery(["(max-width:767px)"])
  const [isMobileLG] = useMediaQuery(["(max-width:575px)"])



	return (
    <Footer className="overflow-hidden">
      <Container>
        <div className="footer-wrapper">
          <div className="single-footer footer-brand-col">
            <Image src="./images/footer-logo.png" alt="footer-logo" maxWidth="310px" mb="14px" />
            {/* <FooterBrandBlock> 
               <img src="./images/footer-brand-image.png" alt="" />
                <p>Come Learn, Discover &amp; Mint with us.</p> 
            </FooterBrandBlock>*/}
            <Text fontSize="12px" as="p" fontWeight="400" color="#000000" letterSpacing="0.05em" lineHeight="19px" mb="23px">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</Text>
            <Text fontSize="12px" as="p" fontWeight="500" letterSpacing="0.01em" color="#000000">Part of the MaveFi™ Ecosystem. All Rights Reserved.</Text>
          </div>
          <div className="single-footer single-list-block">
            <Text textStyle="16" as="h3" fontWeight="700" color="#000000" mb="11px">COMPANY</Text>
            <FooterList className="footer-list">
              <FooterList.Item><Link to="/about">About</Link></FooterList.Item>
              <FooterList.Item><Link to="/careers">Careers</Link></FooterList.Item>
              <FooterList.Item><Link to="/contributors">Contributors</Link></FooterList.Item>
              <FooterList.Item><Link to="/partners">Partners</Link></FooterList.Item>
            </FooterList>
          </div>
          <div className="single-footer single-list-block">
            <Text textStyle="16" as="h3" fontWeight="700" color="#000000" mb="11px">DISCOVER</Text>
            <FooterList className="footer-list">
              <FooterList.Item><Link to="/portfolio">Portfolio</Link></FooterList.Item>
              <FooterList.Item><Link to="/learn-n-earn">Learn &amp; Earn</Link></FooterList.Item>
              <FooterList.Item><Link to="/profiles">Profiles</Link></FooterList.Item>
              <FooterList.Item><Link to="/glossary">Glossary</Link></FooterList.Item>
              <FooterList.Item><Link to="/market">NFT Rankings</Link></FooterList.Item>
            </FooterList>
          </div>
          <div className="single-footer single-list-block">
            <Text textStyle="16" as="h3" fontWeight="700" color="#000000" mb="11px" ml="0">RESOURCES</Text>
            <FooterList className="footer-list">
              <FooterList.Item><a href="https://docs.mavefi.com" target="_blank" rel="noreferrer">Docs</a></FooterList.Item>
              <FooterList.Item><Link to="/blog">Blog</Link></FooterList.Item>
              <FooterList.Item><a href="https://notion.mavefi.com" target="_blank" rel="noreferrer">Notion</a></FooterList.Item>
              <FooterList.Item><Link to="/newsletter">Newsletter</Link></FooterList.Item>
              <FooterList.Item><Link to="/faq">Faq</Link></FooterList.Item>
              <FooterList.Item><Link to="/support">Support</Link></FooterList.Item>
            </FooterList>
          </div>
          <div className="single-footer single-list-block">
            <Text textStyle="16" as="h3" fontWeight="700" color="#000000" mb="11px" ml="0">LEGAL DOCS</Text>
            <FooterList>
              <FooterList.Item><Link to="/risk">Risks</Link></FooterList.Item>
              <FooterList.Item><Link to="/disclaimer">Disclaimer</Link></FooterList.Item>
              <FooterList.Item><Link to="/trademark">Trademarks</Link></FooterList.Item>
              <FooterList.Item><Link to="/cookie">Cookie Policy</Link></FooterList.Item>
              <FooterList.Item><Link to="/privacy">Privacy Policy</Link></FooterList.Item>
              <FooterList.Item><Link to="/terms">Terms of Service</Link></FooterList.Item>
            </FooterList>
          </div>
          <div className="single-footer footer-social-col">
            <Text textStyle="16" as="h3" fontWeight="700" color="#000000" mb="11px" ml="0">SOCIAL LINKS</Text>
            <Box maxWidth="132px" className="footer-social-inner">
              <div className="footer-social">
                <a href="https://twitter.com/mavefi_" target="_blank" rel="noreferrer"><img src="./images/icon-twitter.svg" alt="" /></a>
                <a href=""><img src="./images/icon-discord.svg" alt="" /></a>
                <a href=""><img src="./images/icon-instagram.svg" alt="" /></a>
                <a href=""><img src="./images/icon-book.svg" alt="" /></a>
                <a href=""><img src="./images/icon-youtube.svg" alt="" /></a>
              </div>
              {!isMobileLG && <SelectGroup />}
            </Box>
          </div>
          {isMobileLG && <div className='single-footer me-lg-auto'><SelectGroup /></div>}
        </div>
      </Container>
    </Footer>
  )
}


