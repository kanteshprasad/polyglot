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
      zIndex="900"
      position="fixed"
      p={4}
    >
      
        
    
          <Menu>
            <MenuButton as={Button} > <GiHamburgerMenu /> </MenuButton>
            <MenuList>
          <MenuItem as='a' href="#home">Home</MenuItem>
          <MenuItem as='a' href="#playground">Playground</MenuItem>
         <MenuGroup title="Documentation  &#11167;">
          <MenuItem as='a' href='#kannadaDoc'>Kannada</MenuItem>
          <MenuItem as='a' href='#punjabiDoc'>Punjabi</MenuItem>
          <MenuItem as='a' href='#hindiDoc'>Hindi</MenuItem>
          <MenuItem as='a' href='#tamilDoc'>Tamil</MenuItem>
          <MenuItem as='a' href='#teluguDoc'>Telugu</MenuItem>
          <MenuItem as='a' href='#odiaDoc'>Odia</MenuItem>
          </MenuGroup>
            </MenuList>
          </Menu>
            
         
     
    </Flex>
 

  );
};

export default Navbar;
