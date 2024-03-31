import { React,useRef, useEffect  } from 'react'
import { Link, Text, Button, Box, VStack, HStack, LightMode, Tooltip, Center, Grid, GridItem, Flex } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import PolyLogo from "../Images/PolyLogo"
import Typed from 'typed.js';


export default function Hero() {
  const el = useRef(null);
  
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<strong> Kannada, Hindi,  Punjabi, Tamil, Telugu and Odia</strong> '],
      typeSpeed: 75,
      loop: true,
      startDelay:1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

 


  return (

    <>
    <Grid w='90vw' marginLeft='5vw' templateAreas={`"header header header"
                                       "caption caption caption"
                                       "lang lang lang"
                                      "footer footer footer"`}
        gridTemplateRows={'30vh 15vh 15vh 30vh'}
        gridTemplateColumns={'30vw 30vw 30vw'}
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold' height='90vh' marginTop='5vh'
         justifyContent='center'
         alignItems='center'
        
         >
       <GridItem  area={'header'}   >
          <Box width={{base:'100%',md:'60%',lg:'50%'}} marginLeft={{base:'0',md:'20%',lg:'25%'}} >
           <PolyLogo/>
          </Box>
       </GridItem>


      

      <GridItem area='caption'>

       <Box width='100%' >
       <Text color='white' textAlign='center' className='caption'  fontSize={'x-large'} id='caption'  fontWeight='400'>
       <strong>  Coding  Made  possible in Indian languages </strong> 
       </Text>

       </Box>
      </GridItem>

     
      <GridItem area='lang'>
      <Box width='100%' >
       <Text ref={el} color='#ff725e' textAlign='center'   fontSize={'x-large'}   fontWeight='400'>
    
       </Text>

       </Box>

      </GridItem>

      <GridItem  area={'footer'}>
       

    
      <LightMode>
         <VStack width={'100%'}>
         <Tooltip label="LinkedIn">
        <Link color={'white'} ml={2} href='https://www.linkedin.com/in/kantesh-prasad-h-k-b8a897260' target="_blank" rel="noopener noreferrer">
        Made By:  @Kantesh Prasad </Link>
        </Tooltip>
          <HStack justifyContent={'center'} mb={20} width="100%">
             <Center>
            <Tooltip label="Source on Github">
             
              
                <Link mr={2}   href='https://github.com/kanteshprasad/polyglot' target="_blank" rel="noopener noreferrer">
                <Button gap={2}  width={'200px'} height={'45px'}  colorScheme='blue'>
                Source on  <FaGithub/>
                </Button>
                </Link>
                
              
            </Tooltip>

            <Tooltip label="Follow Me on Instagram" >
              
            
                <Link width={'100%'}  href='https://www.instagram.com/kantesh_prasad/' target="_blank" rel="noopener noreferrer">
                <Button gap={2}  width={'200px'} height={'45px'} colorScheme='pink'>
                Follow Me
                <FaInstagram />
                </Button>
                </Link>
               
            
            </Tooltip>
            </Center>
          </HStack>
          </VStack>
        </LightMode>
       
        </GridItem>
      </Grid>


    </>


  )
}
