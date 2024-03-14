import React from "react";
import { Box, Flex, Link, Button, Input,  useDisclosure, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    LightMode, } from "@chakra-ui/react"; 
import { HamburgerIcon } from '@chakra-ui/icons'



const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

  return (


    <Flex width="100vw" pos="sticky" top="0" zIndex="sticky" bg="transparent"   position="fixed" p={4}>
     
      
      
<LightMode></LightMode>
      <Button ref={btnRef}  onClick={onOpen}>
      <HamburgerIcon boxSize={8} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  
    </Flex>
  );
};

export default Navbar;
