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
export default function Telugu() {



  return (

    <Box id='teluguDoc' maxWidth='80vw' ml='10vw' my={10} >
      

      <VStack width='80%' ml='10%'  >
    

        <Box>
          <Center>
            <Heading my={12} > తెలుగు  -- Telugu </Heading>
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
                      <Td>వీలు</Td>

                    </Tr>
                    <Tr>
                      <Td>const</Td>
                      <Td>స్థిరమైన</Td>

                    </Tr>
                    <Tr>
                      <Td>if</Td>
                      <Td>ఇప్పుడు</Td>

                    </Tr>

                    <Tr>
                      <Td>else if</Td>
                      <Td>అయినప్పటికీ</Td>

                    </Tr>
                    <Tr>
                      <Td>else</Td>
                      <Td>లేకపోతే</Td>

                    </Tr>
                    <Tr>
                      <Td>console.log</Td>
                      <Td>వ్రాయు</Td>

                    </Tr>
                    <Tr>
                      <Td>break</Td>
                      <Td>ఆపండి</Td>

                    </Tr>
                    <Tr>
                      <Td>continue</Td>
                      <Td>కొనసాగించు</Td>

                    </Tr>
                    <Tr>
                      <Td>true</Td>
                      <Td>నిజం</Td>

                    </Tr>
                    <Tr>

                      <Td>false</Td>
                      <Td>అబద్ధం</Td>

                    </Tr>
                    <Tr>
                      <Td>while</Td>
                      <Td>అయితే</Td>

                    </Tr>
                    <Tr>
                      <Td>do</Td>
                      <Td>చేయు</Td>

                    </Tr>
                    <Tr>
                      <Td>for</Td>
                      <Td>కోసం</Td>

                    </Tr>
                    <Tr>
                      <Td>in</Td>
                      <Td>లో</Td>

                    </Tr>
                    <Tr>
                      <Td>finally</Td>
                      <Td>చివరకు</Td>

                    </Tr>
                    <Tr>
                      <Td>null</Td>
                      <Td>శూన్య</Td>

                    </Tr>

                  </Tbody>
                  <Tfoot>
                  </Tfoot>
                </Table>
              </TableContainer>




            
             <Box ml='10vw' width='80vw'>
              <Text fontSize="30" fontWeight='600' my={4} > Example Snippet </Text>
              <pre style={{ overflowX: 'auto', overflowY: 'auto',  maxWidth: '90%' }}>
                {"\n// సంఖ్యల నమూనా శ్రేణి\nస్థిరమైన సంఖ్యలు = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// శ్రేణి ద్వారా పునరావృతం\n కోసం (వీలు i = 0; i < సంఖ్యలు.length; i++) {\n   // సంఖ్య సమానంగా ఉందో లేదో తనిఖీ చేయండి\n   ఇప్పుడు (సంఖ్యలు[i] % 2 === 0) {\n       వ్రాయు(సంఖ్యలు[i] + \" సమానంగా ఉంది.\");\n       // మిగిలిన లూప్ బాడీని దాటవేసి, తదుపరి దానికి తరలించండి\n       కొనసాగించు;\n   }\n\n   // సంఖ్య 5 కంటే ఎక్కువగా ఉందో లేదో తనిఖీ చేయండి\n   ఇప్పుడు (సంఖ్యలు[i] > 5) {\n       వ్రాయు(సంఖ్యలు[i] + \" 5 కంటే ఎక్కువ.\");\n       // సంఖ్య 5 కంటే ఎక్కువ ఉంటే లూప్ నుండి నిష్క్రమించండి\n       ఆపండి;\n   }\n\n   // రెండు షరతులు నెరవేరకపోతే, నంబర్‌ను ప్రింట్ చేయండి\n   వ్రాయు(సంఖ్యలు[i]);\n}\n\n"}
              </pre>
              </Box>
            

          </VStack>

        </Box>
      </VStack>



    </Box>



  )
}
