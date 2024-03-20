import React from 'react'
import {Box, Center, HStack, Heading, Text, VStack} from '@chakra-ui/react'
import Seperator from '../Seperator'
import Kannada from './Kannada'
import Hindi from './Hindi'
import Punjabi from './Punjabi'
import Telugu from './Telugu'
import Tamil from './Tamil'
import Odia from './Odia'

export default function Documentation() {
  return (
    <>
    <Box id='documentation' width="100vw">
    <Center>
        <Heading my={20} > Documentation </Heading>
    
      </Center>
      <Seperator />
      </Box>
      <Text fontSize='l' width="70vw" ml='15vw' my={20}>

<strong>
 This Code Playground operates by translating code written in your preferred language into JavaScript. You can write code in multiple languages within a single execution. Below are the fundamental rules governing the translation process. As of now, only these keywords are supported:
</strong>
</Text>
      <Seperator />
      <Kannada/>
      <Seperator />
      <Hindi/>
      <Seperator/>
      <Punjabi/>
      <Seperator/>
      <Telugu/>
      <Seperator/>
      <Tamil/>
      <Seperator/>
      <Odia/>
      <Seperator/>
      </>
  )
}
