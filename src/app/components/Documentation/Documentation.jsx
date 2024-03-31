import React, { useState } from 'react';
import { Box, Center,UnorderedList,ListItem,  Heading, Text, Flex, Button, Link, Tooltip, DarkMode } from '@chakra-ui/react';
import Seperator from '../Seperator';
import Kannada from './Kannada';
import Hindi from './Hindi';
import Punjabi from './Punjabi';
import Telugu from './Telugu';
import Tamil from './Tamil';
import Odia from './Odia';

const Documentation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Kannada');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const renderLanguageComponent = () => {
    switch (selectedLanguage) {
      case 'Kannada':
        return <Kannada />;
      case 'Hindi':
        return <Hindi />;
      case 'Punjabi':
        return <Punjabi />;
      case 'Telugu':
        return <Telugu />;
      case 'Tamil':
        return <Tamil />;
      case 'Odia':
        return <Odia />;
      default:
        return null;
    }
  };

  return (
    <>
       <DarkMode>
      <Box mt={20} id='documentation' width="100vw">
      <Seperator /> 
    <Center>
       <Heading color='tomato' my={5}> Documentation </Heading>
    
       </Center>
       <Seperator/>
      </Box>

      <Center>
       <Text mt={10} mb={5} color='#ff725e' fontSize='large' > <strong>How to use..?</strong></Text>
       </Center>
      
      
      <UnorderedList letterSpacing={2} fontSize='large' width="70vw" ml='15vw' mt={10} mb={20} spacing={2}>
        <ListItem><i>Previously, our code editor featured an on-screen keyboard for convenience.</i></ListItem>
        <ListItem><i>However, to streamline the user experience, we've opted to remove this feature.</i></ListItem>
        <ListItem><i>Now, users can utilize <Link href='https://chromewebstore.google.com/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab' isExternal><strong>Google Input Tools extension</strong></Link> on Chrome for desktop users or any multi-language keyboard on mobile devices.</i></ListItem>
        <ListItem><i>This change ensures a smoother and more efficient coding process, offering flexibility and ease of use.</i></ListItem>
        <ListItem><i>Simply start typing in your preferred programming language, and let the tools do the rest. Happy coding!</i></ListItem>
      </UnorderedList>

        
      
    
     <Seperator/>
      
      <Flex justifyContent={'center'} alignItems={'center'} height={'250px'} width={'100%'}>
       <Tooltip label='Google input tools Chrome Extension'>
        <iframe
        about='Google input tools Chrome Extension'
          src="https://www.youtube.com/embed/wwODzmWHX8s?rel=0&wmode=opaque&enablejsapi=1&cc_load_policy=1"
          height={'80%'}
        />
        </Tooltip>
      </Flex>
      
      <Seperator/>

      <Center>
       <Text my={5} color='#ff725e' fontSize='large' > <strong>Under The Hood</strong></Text>
       </Center>
      
      
      <UnorderedList letterSpacing={2} fontSize='large' width="70vw" ml='15vw' mt={10} mb={20} spacing={2}>
        <ListItem>
          <i>This Code Playground operates by translating code written in your preferred language into <strong><em> JavaScript.</em></strong></i>
        </ListItem>
        <ListItem>
          <i>You can write code in <strong><em>multiple languages</em></strong> within a single execution.</i>
        </ListItem>
        <ListItem>
          <i>Below are the fundamental rules governing the translation process. As of now, only these keywords are supported:</i>
        </ListItem>
      </UnorderedList>

        
     
    
     <Seperator/>
    <Center>
       <Text my={5} color='#ff725e' fontSize='large' > <strong>Select Your Language</strong></Text>
       </Center>
      <Flex justifyContent={'center'} width='100%' flexWrap="wrap">
        {['Kannada', 'Hindi', 'Punjabi', 'Telugu', 'Tamil', 'Odia'].map((language) => (
          <Button
            key={language}
            colorScheme={selectedLanguage === language ? 'red' : 'gray'}  
            onClick={() => handleLanguageChange(language)}
            mb={2}
            mr={2}
          >
            {language}
          </Button>
        ))}
      </Flex>

      {/* Render selected language component */}
      <Box>
        {renderLanguageComponent()}
      </Box>
      </DarkMode>
    </>
  );
};

export default Documentation;
