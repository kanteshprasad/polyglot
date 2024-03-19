import React from "react";
import {  Flex, Link, HStack, DarkMode, } from "@chakra-ui/react"; 

import Togglemode from "../components/Togglemode";


const Navbar = () => {


  return (

    <nav>
    <Flex
      
      justifyContent="space-between"
      width="100vw"
      pos="sticky"
      top="0"
      zIndex="900"
      position="fixed"
      p={4}
      backdropFilter="blur(25px)" 
      backgroundColor="#171b22" 
    >
      <DarkMode>
        <HStack color="white" gap={2}>
          <Link href="#home">Home</Link>
          <Link href="#playground">Playground</Link>
          <Link href="#documentation">Docs</Link>
        </HStack>
      </DarkMode>
      <Togglemode/>
    </Flex>
  </nav>

  );
};

export default Navbar;
