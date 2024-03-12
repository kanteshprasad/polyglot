import { Progress } from "@chakra-ui/react";
import React from "react";


export default function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight =
        "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      const body = document.body;
      const html = document.documentElement;
      const documentHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      const windowBottom = windowHeight + window.pageYOffset;
      const percentage = Math.round((windowBottom / documentHeight) * 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Progress
      colorScheme="teal"
      size="xs"
      value={scrollPercentage}
      position="fixed"
      top="0"
      left="0"
      zIndex="1000"
      width="100%"
    />
  );
};


