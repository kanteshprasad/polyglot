import React from "react";
import {  Flex,   Link } from "@chakra-ui/react"; 

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
      flexDirection='row'
      p={4}
    >
      
      <ul style={{display:'flex'}}>
          <li><a onClick={() => handleNavigation('/')}>Home</a></li>
          <li><a onClick={() => handleNavigation('/about')}>About</a></li>
          <li><a onClick={() => handleNavigation('/documentation')}>Documentation</a></li>
        </ul>
    
         
            
         
     
    </Flex>
 

  );
};

export default Navbar;
