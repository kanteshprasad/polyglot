import React from 'react'
import {Box , useColorModeValue} from "@chakra-ui/react"

export default function Line() {

const backColor = useColorModeValue( "red", "white")

  return (
    <>
   <Box className='line' w={25} h={25} bg={backColor}></Box>
   </>
  )
}
