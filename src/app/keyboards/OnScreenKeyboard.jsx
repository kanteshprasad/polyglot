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
    width="100%" // Adjusted width to 70%
    value={selectedLanguage}
    onChange={handleLanguageChange}
  >
    <option value="english">Select Language</option>
    <option value="kannada">ಕನ್ನಡ -- Kannada</option>
    <option value="hindi">हिंदी -- Hindi</option>
    <option value="tamil"> தமிழ் -- Tamil</option>
    <option value="telugu">తెలుగు -- Telugu</option>
    <option value="punjabi">ਪੰਜਾਬੀ -- Punjabi</option>
    <option value="odia">ଓଡିଆ --  Odia</option>
  </Select>
</Flex>


      </DarkMode>
     
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layoutName}
        layout={keyboardLayouts[selectedLanguage].layout}
        onKeyPress={onKeyPress}
        color="black"
        className="custom-keyboard"
      />
     
    </Box>
  );
};

export default MyKeyboard;
