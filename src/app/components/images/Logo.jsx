import React from "react"
import { Box, Flex, Grid, Heading, useColorModeValue } from "@chakra-ui/react"
import Line from "./Line"

export default function Logo() {


  return (
      <Flex>
        <Heading fontSize={{ base: "60", md: "75", lg: "100" }}>
          Polyglot
        </Heading>
        <Line/>
      </Flex> 
  )
}
