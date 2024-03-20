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
export default function Odia() {



  return (

    <Box id='odiaDoc' maxWidth='80vw' ml='10vw' my={10} >
      

      <VStack width='80%' ml='10%'  >
    

        <Box>
          <Center>
            <Heading my={12} > ଓଡିଆ  -- Odia </Heading>
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
                      <Td>ଚାଲ</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>ସ୍ଥିର</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>ଯଦି</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>ଯଦିଓ</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>ଅନ୍ୟ</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>ଲେଖ</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>ବ୍ରେକ୍</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>ଯାଅ</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>ସତ</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>ମିଥ୍ୟା</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>ଯେତେବେଳେ</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>କର</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>ପାଇଁ</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>ଭିତରେ</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>ଶେଷରେ</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>ଶୂନ୍ୟ</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// ସଂଖ୍ୟାଗୁଡ଼ିକର ନମୁନା ଆରେ | \nସ୍ଥିର ସଂଖ୍ୟାଗୁଡିକ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// ଆରେ ମାଧ୍ୟମରେ ପୁନରାବୃତ୍ତି |\nପାଇଁ (ଚାଲ i = 0; i < ସଂଖ୍ୟାଗୁଡିକ.length; i++) {\n   // ସଂଖ୍ୟାଟି ଅଛି କି ନାହିଁ ଯାଞ୍ଚ କରନ୍ତୁ |\n   ଯଦି (ସଂଖ୍ୟାଗୁଡିକ[i] % 2 === 0) {\n       ଲେଖ(ସଂଖ୍ୟାଗୁଡିକ[i] + \" ଏପରିକି\");\n       // ବାକି ଲୁପ୍ ବଡି ଛାଡି ପରବର୍ତ୍ତୀ ପୁନରାବୃତ୍ତି କୁ ଯାଆନ୍ତୁ |\n       ଯାଅ;\n   }\n\n   // ସଂଖ୍ୟା 5 ରୁ ଅଧିକ କି ନାହିଁ ଯାଞ୍ଚ କରନ୍ତୁ |\n   ଯଦି (ସଂଖ୍ୟାଗୁଡିକ[i] > 5) {\n       ଲେଖ(ସଂଖ୍ୟାଗୁଡିକ[i] + \" 5 ରୁ ଅଧିକ ଅଟେ |\");\n       // ସଂଖ୍ୟା 5 ରୁ ଅଧିକ ହେଲେ ଲୁପ୍ ଛାଡନ୍ତୁ |\n       ବ୍ରେକ୍;\n   }\n\n   // ଯଦି କ condition ଣସି ସର୍ତ୍ତ ପୂରଣ ହୁଏ ନାହିଁ, ସଂଖ୍ୟା ପ୍ରିଣ୍ଟ୍ କରନ୍ତୁ |\n   ଲେଖ(ସଂଖ୍ୟାଗୁଡିକ[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
