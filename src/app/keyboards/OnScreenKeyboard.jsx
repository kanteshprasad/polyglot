import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { Box, DarkMode, Select , useDisclosure, ScaleFade, Button, Flex, Spacer } from "@chakra-ui/react";
import keyboardLayouts from "./keylayouts";

const MyKeyboard = ({ onChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [layoutName, setLayoutName] = useState("default");
  const keyboard = useRef(null);
  const { isOpen, onToggle } = useDisclosure()

  



  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (button === "{shift}" || button === "{lock}") {
      handleShift();
    } else if (button === "{space}") {
      handleSpace();
    }  else if (button === "{enter}") {
      handleEnter();
    } else {
      onChange(button);
    }
  };

  const handleShift = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default");
  };

  const handleLanguageChange = (event) => {
    
    setSelectedLanguage(event.target.value);
  };

  const handleSpace = () => {
    onChange(" "); 
  };
  const handleEnter = () => {
    onChange("\n"); 
  };
  

  return (
    <Box  ml="10%" width="80%" color="black">
      <DarkMode>
      <Flex justifyContent="space-between">
  <Button mx={3} my={3} width="30%" bgGradient="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
    _hover={{
      bgGradient: "linear(to-r, red.500, yellow.500)",
    }} onClick={onToggle}>Keyboard</Button>
    
  <Select
  mx={3}
    my={3}
    color="white"
    fontWeight="bold"
    borderRadius="md"
    bgGradient="linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)"
    _hover={{
      bgGradient: "linear(to-r, red.500, yellow.500)",
    }}
    width="70%" // Adjusted width to 70%
    value={selectedLanguage}
    onChange={handleLanguageChange}
  >
    <option value="english">Select Language</option>
    <option value="kannada">ಕನ್ನಡ</option>
    <option value="hindi">हिंदी</option>
    <option value="tamil"> தமிழ்</option>
    <option value="telugu">తెలుగు</option>
    <option value="punjabi">ਪੰਜਾਬੀ</option>
    <option value="odia">ଓଡିଆ</option>
  </Select>
</Flex>


      </DarkMode>
      <ScaleFade initialScale={0.9} in={isOpen}>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layoutName}
        layout={keyboardLayouts[selectedLanguage].layout}
        onKeyPress={onKeyPress}
        color="black"
        className="custom-keyboard"
      />
      </ScaleFade>
    </Box>
  );
};

export default MyKeyboard;
