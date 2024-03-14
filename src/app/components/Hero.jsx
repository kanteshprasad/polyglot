import React from 'react'
import Logo from "../components/images/Logo"
import {Center,Link, Text,  Button,  LightMode, VStack, HStack, Code } from "@chakra-ui/react";

export default function Hero() {

  

  return (

    <Center  flexDirection="column"  height="100vh" width="99vw" >
           <LightMode>
      <Center   width="60%" height="60%" >
        <Logo width="100%"/>  </Center>


        <Center>
          
          <Text size={10} fontSize={30} color='white'   p={2} >
          Code in Indian Languages
          </Text>

         </Center>

        <Center width="100%" mt={4}>

       <LightMode/>

          <VStack>
          <LightMode>
            <Text color='black' mx={2}> Made by @Kantesh Prasad </Text>
            </LightMode>
          <HStack>
          <Button colorScheme='blue' mr={2}>
            <Link href='https://github.com/kanteshprasad/polyglot' target="_blank" rel="noopener noreferrer">
              Github
            </Link>
          </Button>
          <Button colorScheme='red' ml={2}>
            <Link href='https://www.instagram.com/kantesh_prasad/' target="_blank" rel="noopener noreferrer">
              Instagram
            </Link>
          </Button>
          </HStack>
          
         
          </VStack>
          
        </Center>
        </LightMode>
    </Center>
   
   
  )
}
