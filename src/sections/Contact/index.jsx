import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { BoxedLayout, ContactStyle, TitleBlock } from "./style";
import {Input, Textarea } from "~components/MiniComponents/Form";
import FooterButton from "~components/MiniComponents/button";
import {useState,useEffect} from "react"

export default function ContactSection() {
    const initialFormValues = {inquery:"",name:"",email:"",job:"",companyName:"",country:"",message:""};
    const [formValues, setFormValues] = useState(initialFormValues);
    const [valid, setValid] = useState(false)
    const handleChange = (e) =>{
        const {name,value} = e.currentTarget;
        setFormValues({...formValues,[name]:value})
        
    }
    useEffect(() => {
        const areTruthy = Object.values(formValues).every(
            value => value
          );
          setValid(areTruthy);
    })
    return (
        <ContactStyle>
            <Container>
                <Box w="100%" mb="50px">
                    <TitleBlock>
                        <Text textStyle="64" as="h1" className="title" mb="30px">Contact</Text>
                        <Text textStyle="18" as="p" color="rgba(255, 255, 255, 0.85)" mb="20px">1286 Labs is solving real-world problems with blockchain solutions for organizations of all sizes, from the local community to the global enterprise. We're building Web 3. Come explore with us.</Text>
                    </TitleBlock>
                </Box>
                <BoxedLayout>
                    <form action="/">
                       <SimpleGrid columns={{  md: 2, xl:3 }} spacingX="20px" spacingY="20px" mb="20px">
                       <div className="input-small-item">
                            <Input label="What is the nature of your inquiry? " type="text" className="floating-label" name="inquery"  onChange={(e) => handleChange(e)} value={formValues.inquery}/>
                        </div>
                        <div className="input-small-item">
                            <Input label="Full name" type="text" className="floating-label" name="name" onChange={(e) => handleChange(e)} value={formValues.name}/>
                        </div>
                        <div className="input-small-item">
                            <Input label="Email address" type="text" className="floating-label"  name="email" onChange={(e) => handleChange(e)} value={formValues.email}/>
                        </div>
                        <div className="input-small-item">
                            <Input label="Job title" type="text" className="floating-label" name="job" onChange={(e) => handleChange(e)} value={formValues.job}/>
                        </div>
                        <div className="input-small-item">
                            <Input label="Company name" type="text" className="floating-label" name="companyName" onChange={(e) => handleChange(e)} value={formValues.companyName}/>
                        </div>
                        <div className="input-small-item">
                            <Input label="Country/Region" type="text" className="floating-label"  name="country" onChange={(e) => handleChange(e)} value={formValues.country}/>
                        </div>
                       </SimpleGrid>
                        <Box mb="20px">
                            <Textarea label="How can we help you?" type="text" className="floating-label height" name="message"  onChange={(e) => handleChange(e)} value={formValues.message}/>
                        </Box>
                        <button className={`input-large-item btn submit-button ${valid ? "":"invalid"}`}>Submit</button>
                    </form>
                </BoxedLayout>
                <FooterButton as="button" direction="up"/>
            </Container>
        </ContactStyle>
    )
}