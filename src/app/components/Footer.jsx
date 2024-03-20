import React, { useEffect, useState } from "react";
import {
  Flex,
  Link,
  IconButton,
  HStack,
  Icon,
  Text, DarkMode
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import {  FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const fetchYear = () => {
      const year = new Date().getFullYear();
      setCurrentYear(year);
    };

    fetchYear();
  }, []);

  return (
 
    <Flex
      as="footer"
      justifyContent="space-between"
      alignItems="center"
      py={4}
      px={8}
      bgColor="gray.800"
      color="white"
    > 
      <Text>&copy; {currentYear} Kantesh Prasad</Text>
      <DarkMode>
      <HStack spacing={4}>
      
        {/* <Link href="YOUR_TWITTER_URL" isExternal>
          <IconButton
            aria-label="XTwitter"
            icon={<FaXTwitter />}
            variant="ghost"
          />
        </Link> */}
        <Link href="https://github.com/kanteshprasad/polyglot" isExternal>
          <IconButton
            aria-label="GitHub"
            icon={<Icon as={FaGithub} boxSize={5} />}
            variant="ghost"
          />
        </Link>
        <Link href="www.linkedin.com/in/kantesh-prasad-h-k-b8a897260" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<Icon as={FaLinkedin} boxSize={5} />}
            variant="ghost"
          />
        </Link>
        <Link href="https://www.instagram.com/kantesh_prasad/" isExternal>
          <IconButton
            aria-label="Instagram"
            icon={<Icon as={FiInstagram} boxSize={5} />}
            variant="ghost"
          />
        </Link>
       
      </HStack>
      </DarkMode>
      
    </Flex>
    
  );
};

export default Footer;
