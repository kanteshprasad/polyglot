import { HStack, useColorMode , Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



export default function Togglemode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
    <HStack>
     
      <Button
        mx={3}
        zIndex="999"
        borderRadius="full"
        p={2}
        onClick={toggleColorMode}
        size="sm" // Increase button size
        border="2px solid"
      >
        <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun } />
        
      </Button>
      </HStack>
    )
  }