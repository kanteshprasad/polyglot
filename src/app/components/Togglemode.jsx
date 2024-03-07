import { useColorMode } from "@chakra-ui/react"
import { Button, Box } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';



export default function Togglemode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <Button
        position="fixed"
        bottom="2rem"
        right="2rem"
        zIndex="999"
        borderRadius="full"
        p={2}
        onClick={toggleColorMode}
        size="lg" // Increase button size
        border="2px solid"
      >
        <FontAwesomeIcon icon={colorMode === 'light' ? faMoon : faSun } />
        
      </Button>
    )
  }