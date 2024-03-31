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
export default function Hindi() {



  return (

    <Box id='hindiDoc' maxWidth='80vw' ml='10vw' my={10} >
      

      <VStack width='80%' ml='10%'  >
        

        <Box>
          <Center>
            <Heading color='#ff725e' my={12} > हिंदी  -- Hindi </Heading>
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
                      <Td>हो</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>स्थिर</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>अगर</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>और</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>अन्य</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>लिखो</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>विराम</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>जारी</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>सत्य</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>असत्य</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>जबकि</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>करना</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>लिए</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>में</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>अंत</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>शून्य</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// संख्याओं की एक नमूना श्रेणी\nस्थिर संख्या = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// संरचना के माध्यम से पुनरावृत्ति\nलिए (हो i = 0; i < संख्या.length; i++) {\n   // जांचें कि क्या कोई सम संख्या है\n   अगर (संख्या[i] % 2 === 0) {\n       लिखो(संख्या[i] + \" यह एक सम संख्या है\");\n       // शेष लूप बॉडी को छोड़ें और अगले पुनरावृत्ति पर जाएँ\n जारी;\n   }\n\n   // जांचें कि क्या संख्या 5 से अधिक है\n   अगर (संख्या[i] > 5) {\n       लिखो(संख्या[i] + \" 5 से बड़ा है.\");\n       // यदि संख्या 5 से अधिक है तो लूप से बाहर निकलें\n       विराम;\n   }\n\n   // यदि कोई भी शर्त पूरी नहीं होती है, तो नंबर प्रिंट करें\n   लिखो(संख्या[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
