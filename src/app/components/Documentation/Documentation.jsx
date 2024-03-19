import React from 'react'
import {Box, Center, HStack, Heading, Text, VStack} from '@chakra-ui/react'
import Seperator from '../Seperator'
import Kannada from './Kannada'

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
  Our Playground operates by translating code written in your preferred language into JavaScript. You can write code in multiple languages within a single execution. Below are the fundamental rules governing the translation process:
</strong>
</Text>
      <Seperator />
      <Kannada/>
      </>
  )
}
