import {React, useRef} from 'react'
import {Center,Link, Text, Flex, Button,  Box, VStack, HStack, useColorModeValue ,Heading , IconButton , Icon  } from "@chakra-ui/react";
import { motion,useInView } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
const backcolor = useColorModeValue("#1a202c", "white")
const ref = useRef(null)
  const isInView = useInView(ref)

  return (

<>
      
        <VStack id='home' width="97vw" height="100vh" >
     
        <Flex  mt='15vh' alignItems='center' justifyContent='center' flexDirection={{ base: 'column', md: 'column', lg: 'row' }} height="50%" width="100%" gap='25px' >
       
          <Heading as={motion.h2} initial={{ x: -100  }} whileInView={{ x: 0  }} transition={{ 'easeIn': 4 }} id='logotext' fontSize={{ base: "60", md: "75", lg: "100" }}>
            Polyglot
          </Heading>
          <Box as={motion.div} initial={{ scale:0.25 }} whileInView={{ scale:1 }} transition={{ 'easeIn': 4 }} height={{ base: "5px", md: "5px", lg: "35%" }} width={{ base: "35%", md: "35%", lg: "5px" }} bg={backcolor} borderRadius="25px" />
          <Text marginLeft={{base: '4', md: '4', lg: '0'}} as={motion.p} initial={{ x: 300 }} whileInView={{ x: 0 }} transition={{ 'easeIn': 4 }}  id='caption' fontWeight='400'> Now, Code in Indian languages <br />
            Our Playground supports:<br /> <br />  <strong>  Kannada, Hindi, Punjabi, <br/> Tamil, Telugu and Odia </strong> </Text>
       
        </Flex>



      

        <Center mt={20} width="100%" >

      

          <VStack >
          
              <Text  mx={2}> Made by @Kantesh Prasad </Text>
       
            <HStack>
              <Button colorScheme='blue' mr={2}>
              <FaGithub />
                <Link ml={2} href='https://github.com/kanteshprasad/polyglot' target="_blank" rel="noopener noreferrer">
                  Github
                </Link>
              </Button>
              <Button colorScheme='red' ml={2}>
              <FaInstagram /> 
                <Link ml={2} href='https://www.instagram.com/kantesh_prasad/' target="_blank" rel="noopener noreferrer">
                   Instagram
                </Link>
              </Button>
            </HStack>


          </VStack>

        </Center>
        </VStack>
   
</>


  )
}
