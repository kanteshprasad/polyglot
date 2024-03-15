import React from "react";
import {  Flex, Link, HStack, } from "@chakra-ui/react"; 

import Togglemode from "../components/Togglemode";


const Navbar = () => {


  return (


    <Flex justifyContent="space-between" width="100vw" pos="sticky" top="0" zIndex="sticky" bg="transparent"   position="fixed" p={4}>
     
      
      


    <HStack gap="25px">
      <Link href="#hero" >Home</Link>
      <Link href="#playground" >Playground</Link>
      <Link href="#Documentation" >Docs</Link>
    </HStack>
     

     <Togglemode/>
    </Flex>
  );
};

export default Navbar;
