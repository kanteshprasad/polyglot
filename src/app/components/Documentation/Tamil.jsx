import React from 'react'
import { Box, Text,  VStack, Center, Flex, Heading } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
export default function Tamil() {



  return (

    <Box id='tamilDoc' maxWidth='80vw' ml='10vw' my={10} >
      

      <VStack width='80%' ml='10%'  >
    

        <Box>
          <Center>
            <Heading color='#ff725e' my={12} > தமிழ்  -- Tamil </Heading>
          </Center>
          <VStack width="100%" alignItems='center' gap={3} >
            
              <Text fontSize="30" fontWeight='600' > Translation Rules </Text>

              <TableContainer >
                <Table size='sm' variant='striped' colorScheme='teal'>
                  <TableCaption>Translation rules</TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Javascript Keyword</Th>
                      <Th>Polyglot Keyword</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>let</Td>
                      <Td>விடு</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>நிலையான</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>என்றால்</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>கூட</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>வேறு</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>எழுது</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>நிறுத்து</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>தொடரவும்</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>உண்மை</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>பொய்</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>போது</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>செய்</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>க்கான</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>உள்ளே</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>இறுதியாக</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>ஏதுமில்லை</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// எண்களின் மாதிரி வரிசை\nநிலையான எண்கள் = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// வரிசையின் மூலம் திரும்புதல்\nக்கான (விடு i = 0; i < எண்கள்.length; i++) {\n   // எண் சமமாக உள்ளதா என சரிபார்க்கவும்\n   என்றால் (எண்கள்[i] % 2 === 0) {\n       எழுது(எண்கள்[i] + \" சமமாக உள்ளது.\");\n       // மீதமுள்ள லூப் பாடியைத் தவிர்த்துவிட்டு அடுத்ததாக நகர்த்தவும்\n       தொடரவும்;\n   }\n\n   // எண் 5 ஐ விட அதிகமாக உள்ளதா என சரிபார்க்கவும்\n   என்றால் (எண்கள்[i] > 5) {\n       எழுது(எண்கள்[i] + \" 5 ஐ விட அதிகமாக உள்ளது.\");\n       // எண் 5 ஐ விட அதிகமாக இருந்தால் வளையத்திலிருந்து வெளியேறவும்\n       நிறுத்து;\n   }\n\n   // எந்த நிபந்தனையும் பூர்த்தி செய்யப்படாவிட்டால், எண்ணை அச்சிடவும்\n   எழுது(எண்கள்[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
