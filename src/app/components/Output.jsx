import { useState } from "react";
import { Box, Button, Text, useToast, HStack , VStack , Flex, } from "@chakra-ui/react";
import { executeCode } from "../api/api";


const Output = ({code}) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const obj = new Map([
    // Kannada
    ["ಆಗಿಸು", "let"],["ಸ್ಥಿರ" ,"const"],["ಇವಾಗ", "if"],["ಆದರೂ", "else if"], ["ಅಥವ", "else"],["ಬರೆಯಿರಿ", "console.log"],["ನಿಲ್ಲಿಸು","break"],["ಮುಂದುವರಿಸಿ","continue"], ["ನಿಜ","true"],["ಸುಳ್ಳು","false"],
   ["ಸಮಯದಲ್ಲಿ","while"], ["ಮಾಡು","do"], ["ಪ್ರತಿ","for"],["ಒಳಗೆ","in"], ["ಶೂನ್ಯ","null"],
   
    // Telugu
    ["వీలు","let"],["స్థిరమైన","const"], ["ఇప్పుడు","if"],["అయినప్పటికీ","else if"], ["లేకపోతే","else"],["వ్రాయు","console.log"],["కొనసాగించు","continue"], ["ఆపండి","break"], ["నిజం","true"],["అబద్ధం","false"],
    ["అయితే", "while"],["చేయు","do"],["కోసం","for"],["లో","in"], ["శూన్య","null"],
    
    // Tamil
    ["விடு","let"] ,  ["நிலையான","const"] ,  ["என்றால்","if"],["கூட","else if"],["வேறு","else"], ["எழுது","console.log"],["தொடரவும்","continue"],["நிறுத்து","break"],["உண்மை","true"],["பொய்","false"],
    ["போது", "while"],["செய்","do"],["க்கான","for"],["உள்ளே","in"],["ஏதுமில்லை","null"],
    
     //Odia
    ["ଚାଲ", "let"],["ସ୍ଥିର","const"] , ["ଯଦି", "if"],["ଯଦିଓ", "else if"],["ଅନ୍ୟ", "else"],["ଲେଖ", "console.log"],["ବ୍ରେକ୍","break"],["ଯାଅ","continue"],["ସତ","true"],["ମିଥ୍ୟା","false"],
    ["ଯେତେବେଳେ","while"],["କର","do"],["ପାଇଁ","for"],["ଭିତରେ","in"],["ଶୂନ୍ୟ","null"],
    
    // Hindi
    ["हो", "let"],   ["स्थिर","const"] , ["अगर", "if"],
    ["और", "else if"],["अन्य", "else"],["लिखो", "console.log"],["विराम","break"],["जारी","continue"],["सत्य","true"],["असत्य","false"],["जबकि","while"],
    ["करना","do"],["लिए","for"],["में","in"],["शून्य","null"],
    
     // Punjabi
   ["ਚਲੋ", "let"],["ਸਥਿਰ","const"] , ["ਜੇਕਰ", "if"],["ਵੀ", "else if"],["ਹੋਰ", "else"],["ਲਿਖੋ", "console.log"],["ਵਿਰਾਮ","break"],["ਜਾਰੀ","continue"],["ਸੱਚ","true"],
    ["ਝੂਠਾ","false"],  ["ਜਦਕਿ","while"],["ਕਰਦੇ","do"],["ਲਈ","for"],["ਵਿੱਚ","in"], ["ਜ਼ੀਰੋ","null"],["ਅੰਤ","finally"],
 
   

  ]);

const runCode = async () => {
  const objKeys = new Set(obj.keys());

  
  const inputArray = code.split(/([[\]{}(),;\s+=\-*])/);
  const sourceCode = inputArray.map(elem => objKeys.has(elem) ? obj.get(elem) : elem).join('');

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
    <VStack width="100%" height="100%"  >
        <HStack my={4}>
      <Button
        bgColor='lightseagreen'
       
        isLoading={isLoading}
        onClick={runCode}
      >
        Run Code
      </Button>
      
      <Button bgColor='tomato' onClick={clearOutput}>
          Clear Output
        </Button>
        
      </HStack> 
      
      <Box
  style={{ color: "white" }}
  bgColor="grey"
  height="auto"
  width="100%"
  mr={0}
  color={isError ? "red.400" : ""}
  borderColor={isError ? "red.500" : "#333"}
  overflowY="auto"
>
  {output ? (
    output.map((line, i) => (
      <Box key={i}>
        <Flex>
          <Text mr={2} color="black" >{i + 1}: </Text>
          <Text>{line}</Text>
        </Flex>
      </Box>
    ))
  ) : null}
</Box>

      
        
    </VStack>
    
  );
};
export default Output;
