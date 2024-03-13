import React from 'react'
import Logo from "../components/images/Logo"
import { Box, Link, Flex, Spacer, Button,  DarkMode } from "@chakra-ui/react";

export default function Hero() {
  return (
    <DarkMode>
    <Flex flexDirection="column"  my={10} height="80vh" width="80vw" marginLeft="10vw" >
        <Logo />
        <Flex>
            <Button>
            <Link href='https://github.com/kanteshprasad/polyglot' target="_blank" rel="noopener noreferrer">
                Github
           </Link> 
            </Button>
            <Button>
            <Link colorScheme="" href='https://www.instagram.com/kantesh_prasad/' target="_blank" rel="noopener noreferrer">
                Instagram
           </Link> 
            </Button>
        </Flex>
    </Flex>
    </DarkMode>
  )
}
