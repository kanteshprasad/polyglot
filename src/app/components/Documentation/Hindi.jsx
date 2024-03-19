import React from 'react'
import { Box, Text,  VStack, Center, Flex } from '@chakra-ui/react'
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
export default function Kannada() {



  return (

    <Box id='hindiDoc' maxWidth='80vw' ml='10vw' >
      

      <VStack width='80%' ml='10%'  >
        

        <Box>
          <Center>
            <Text my={8} fontWeight='600' fontSize="2xl" > ಕನ್ನಡ  -- Kannada </Text>
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
                      <Td>ಆಗಿಸು</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>ಸ್ಥಿರ</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>ಇವಾಗ</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>ಆದರೂ</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>ಅಥವ</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>ಬರೆಯಿರಿ</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>ನಿಲ್ಲಿಸು</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>ಮುಂದುವರಿಸಿ</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>ನಿಜ</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>ಸುಳ್ಳು</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>ಸಮಯದಲ್ಲಿ</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>ಮಾಡು</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>ಪ್ರತಿ</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>ಒಳಗೆ</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>ಅಂತಿಮವಾಗಿ</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>ಶೂನ್ಯ</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// ಸಂಖ್ಯೆಗಳ ಮಾದರಿ ಶ್ರೇಣಿ\nಸ್ಥಿರ ಸಂಖ್ಯೆಗಳು = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// ರಚನೆಯ ಮೂಲಕ ಪುನರಾವರ್ತನೆ\nಪ್ರತಿ (ಆಗಿಸು i = 0; i < ಸಂಖ್ಯೆಗಳು.length; i++) {\n   // ಸಮ ಸಂಖ್ಯೆ ಇದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ\n   ಇವಾಗ (ಸಂಖ್ಯೆಗಳು[i] % 2 === 0) {\n       ಬರೆಯಿರಿ(ಸಂಖ್ಯೆಗಳು[i] + \" ಇದು ಸಮ ಸಂಖ್ಯೆಯಾಗಿದೆ\");\n       // ಲೂಪ್ ದೇಹದ ಉಳಿದ ಭಾಗವನ್ನು ಬಿಟ್ಟು ಮುಂದಿನ ಪುನರಾವರ್ತನೆಗೆ ಸರಿಸಿ\n       ಮುಂದುವರಿಸಿ;\n   }\n\n   // ಸಂಖ್ಯೆ 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ\n   ಇವಾಗ (ಸಂಖ್ಯೆಗಳು[i] > 5) {\n       ಬರೆಯಿರಿ(ಸಂಖ್ಯೆಗಳು[i] + \" 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಾಗಿರುತ್ತದೆ.\");\n       // ಸಂಖ್ಯೆ 5 ಕ್ಕಿಂತ ಹೆಚ್ಚಿದ್ದರೆ ಲೂಪ್‌ನಿಂದ ನಿರ್ಗಮಿಸಿ\n       ನಿಲ್ಲಿಸು;\n   }\n\n   // ಯಾವುದೇ ಷರತ್ತುಗಳನ್ನು ಪೂರೈಸದಿದ್ದರೆ, ಸಂಖ್ಯೆಯನ್ನು ಮುದ್ರಿಸಿ\n   ಬರೆಯಿರಿ(ಸಂಖ್ಯೆಗಳು[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
