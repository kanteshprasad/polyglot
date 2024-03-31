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
export default function Punjabi() {



  return (

    <Box id='punjabiDoc' maxWidth='80vw' ml='10vw' my={10} >
      

      <VStack width='80%' ml='10%'  >
    

        <Box>
          <Center>
            <Heading color='#ff725e' my={12} > ਪੰਜਾਬੀ  -- Punjabi </Heading>
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
                      <Td>ਚਲੋ</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>ਸਥਿਰ</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>ਜੇਕਰ</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>ਵੀ</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>ਹੋਰ</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>ਲਿਖੋ</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>ਵਿਰਾਮ</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>ਜਾਰੀ</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>ਸੱਚ</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>ਝੂਠਾ</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>ਜਦਕਿ</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>ਕਰਦੇ</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>ਲਈ</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>ਵਿੱਚ</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>ਅੰਤ</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>ਜ਼ੀਰੋ</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// ਸੰਖਿਆਵਾਂ ਦਾ ਨਮੂਨਾ ਐਰੇ\nਸਥਿਰ ਨੰਬਰ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// ਐਰੇ ਰਾਹੀਂ ਦੁਹਰਾਇਆ ਜਾ ਰਿਹਾ ਹੈ\nਲਈ (ਚਲੋ i = 0; i < ਨੰਬਰ.length; i++) {\n   // ਜਾਂਚ ਕਰੋ ਕਿ ਕੀ ਨੰਬਰ ਬਰਾਬਰ ਹੈ\n   ਜੇਕਰ (ਨੰਬਰ[i] % 2 === 0) {\n       ਲਿਖੋ(ਨੰਬਰ[i] + \" ਬਰਾਬਰ ਹੈ।\");\n       // ਲੂਪ ਬਾਡੀ ਦੇ ਬਾਕੀ ਹਿੱਸੇ ਨੂੰ ਛੱਡੋ ਅਤੇ ਅਗਲੇ ਇਸ 'ਤੇ ਜਾਓ\n       ਜਾਰੀ;\n   }\n\n   // ਜਾਂਚ ਕਰੋ ਕਿ ਕੀ ਸੰਖਿਆ 5 ਤੋਂ ਵੱਧ ਹੈ\n   ਜੇਕਰ (ਨੰਬਰ[i] > 5) {\n       ਲਿਖੋ(ਨੰਬਰ[i] + \" 5 ਤੋਂ ਵੱਧ ਹੈ।.\");\n       // ਲੂਪ ਤੋਂ ਬਾਹਰ ਨਿਕਲੋ ਜੇਕਰ ਸੰਖਿਆ 5 ਤੋਂ ਵੱਧ ਹੈ\n       ਵਿਰਾਮ;\n   }\n\n   // ਜੇਕਰ ਕੋਈ ਵੀ ਸ਼ਰਤ ਪੂਰੀ ਨਹੀਂ ਹੁੰਦੀ ਹੈ, ਤਾਂ ਨੰਬਰ ਪ੍ਰਿੰਟ ਕਰੋ\n   ਲਿਖੋ(ਨੰਬਰ[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
