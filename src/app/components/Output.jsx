import { useState } from "react";
import { Box, Button, Text, useToast, HStack , VStack , Flex, LightMode, DarkMode} from "@chakra-ui/react";
import { executeCode } from "../api/api";

const Output = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const obj = { ಆಗಿಸು: "let",ಇವಾಗ: "if",ಆದರೂ: "else if",ಅಥವ: "else",ಬರೆಯಿರಿ: "console.log", };

  const runCode = async () => {
    const objKeys = new Set(Object.keys(obj));

    const inputCode = editorRef.current.getValue();
    const inputArray = inputCode.split(/([[\]{}(),;\s+=\-*])/);
    const sourceCode = inputArray.map(elem => objKeys.has(elem) ? obj[elem] : elem).join('');

    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode("javascript", sourceCode);
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "An error occurred.",
        description: error.message || "Unable to run code",
        status: "error",
        duration: 6000,
      });
    } finally {
      setIsLoading(false);
    }
  };
   
  const clearOutput = () => {
    setOutput(null);
    setIsError(false);
  };
  return (
    <VStack >
      <HStack>
      <Button
        style={{ backgroundColor: 'green', color: 'white' }}
        mb={4}
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      
      <Button style={{ backgroundColor: 'red', color: 'white' }} mb={4} onClick={clearOutput}>
          Clear
        </Button>
        
      </HStack>
      
      <Box style={{color:"white"}}
          bgColor="black"
          height="100%"
          width="80%"
          p={2}
          color={isError ? "red.400" : ""}
          border="1px solid"
          borderRadius={4}
          borderColor={isError ? "red.500" : "#333"}
          overflowY="auto"
        >
          {output ? (
            output.map((line, i) =>  <Box key={i}>
            
            <Flex key={i}>
        <Text mr={2} color="gray.500">{i + 1}:</Text>
        <Text>{line}</Text>
      </Flex>
          </Box>
          )
          ) : (
            <Text >1. Click "Run Code" to see the output here</Text>
          )}
        </Box>
       
        
    </VStack>
    
  );
};
export default Output;
