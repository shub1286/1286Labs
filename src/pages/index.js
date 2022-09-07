import React, { useState,useContext } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import AboutSection from "~sections/About";
import BugBountySection from "~sections/Bug";
import ContactSection from "~sections/Contact";
import FounderSection from "~sections/Founder";
import HeroSection from "~sections/Hero";
import InitiativesSection from "~sections/Initiatives";
import InvestorSection from "~sections/Investor";
import ProductSection from "~sections/Product";
import SolutionSection from "~sections/Solution";
import { useMediaQuery } from "@chakra-ui/react";
import FooterButton from "~components/MiniComponents/button";
import { Section } from "~styled/section";
import GlobalContext from "../context/GlobalContext";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {
  /*
   * require('../static/fullpage.scrollHorizontally.min.js'); // Optional. Required when using the "scrollHorizontally" extension.
   */
};
const anchors = ["hero", "about", "product","solution","initiative","founder","investor","bug","contact"];
const  originalPages = [
    { id: "hero", comp: <HeroSection />,go:anchors[1] },
    { id: "about", comp: <AboutSection />,go:anchors[2] },
    { id: "product", comp: <ProductSection />,go:anchors[2] },
    { id: "solution", comp: <SolutionSection />,go:anchors[2] },
    { id: "initiative", comp: <InitiativesSection />,go:anchors[2] },
    { id: "founder", comp: <FounderSection />,go:anchors[2] },
    { id: "investor", comp: <InvestorSection />,go:anchors[2] },
    { id: "bug", comp: <BugBountySection />,go:anchors[2] },
    { id: "contact", comp: <ContactSection />},
  ];

  const Homepage = () => {
  const {handleActiveSection} = useContext(GlobalContext);
  // console.log(ctx)
  const // [sectionsColor, setsectionsColor] = useState([...originalColors]),
    [fullpages, setfullpages] = useState([...originalPages]);
    const [isWidthLargerThan1200] = useMediaQuery('(min-width: 1200px)');
    const [isWidthLesserThan1199] = useMediaQuery('(max-width: 1199px)');
  const onLeave = (origin, destination, direction) => {
    // console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
    const active = fullpage_api.getActiveSection().anchor;
    handleActiveSection(destination.anchor)
  };


  const moveSectionDown = () => {
      return fullpage_api.moveSectionDown();
  };

 
  return (
    <>{isWidthLargerThan1200 &&  <ReactFullpage
      pluginWrapper={pluginWrapper}
      onLeave={onLeave}
      scrollHorizontally={true}
      anchors={anchors}
      render={() =>
        (
          <ReactFullpage.Wrapper>
            {fullpages.map(({comp },index) => (
              <Section className="section" key={index}>
                {comp}
              </Section>
            ))}
          </ReactFullpage.Wrapper>
        )
      }
      />}
      {isWidthLesserThan1199 && <>
        {fullpages.map(({comp,id },index) => (
          <Section mobile={true} key={index} id={id}>
            {comp}
          </Section>
        ))}
      </>}
      </>
      );s
}
    export default Homepage;
    
