import React from "react";
import {  Flex,    Menu, 
  MenuButton,
  MenuList,
  MenuItem, Button, MenuGroup , DarkMode } from "@chakra-ui/react"; 

import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {


  return (

 
    <Flex
      background='transparent'
      justifyContent="space-between"
      width="100vw"
      pos="sticky"
      top="0"
      height='80px'
      zIndex="900"
      position="fixed"
      p={4}
    >
      
        
    
          <Menu >
            <MenuButton bgColor='white' color='black' as={Button} > <GiHamburgerMenu /> </MenuButton>
            <MenuList>
          <MenuItem as='a' href="#home">Home</MenuItem>
          <MenuItem as='a' href="#playground">Playground</MenuItem>
          <MenuItem as='a' href='#documentation'>Documentation</MenuItem>
            </MenuList>
          </Menu>
            
         
     
    </Flex>
 

  );
};

export default Navbar;
