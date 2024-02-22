import React from "react";
import {
  Flex,
  Box,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg="teal.500" color="white" justifyContent="space-between" p={4}>
      <Box display={["none", "none", "block", "block"]} p="2">
        <ChakraLink
          as={Link}
          to="/"
          _hover={{ textDecoration: "none", color: "yellow.400" }}
        >
          <Text>Home</Text>
        </ChakraLink>
      </Box>
      <Box display={["none", "none", "block", "block"]} p="2">
        <ChakraLink
          as={Link}
          to="/about"
          _hover={{
            textDecoration: "none", // Entfernt die Unterstreichung beim Hovern
            color: "yellow.400",
          }}
        >
          <Text>Über mich</Text>
        </ChakraLink>
      </Box>
      <Box display={["none", "none", "block", "block"]} p="2">
        <ChakraLink
          as={Link}
          to="/resume"
          _hover={{
            textDecoration: "none", // Entfernt die Unterstreichung beim Hovern
            color: "yellow.400",
          }}
        >
          <Text>Lebenslauf</Text>
        </ChakraLink>
      </Box>
      <Box display={["none", "none", "block", "block"]} p="2">
        <ChakraLink
          as={Link}
          to="/projects"
          _hover={{
            textDecoration: "none", // Entfernt die Unterstreichung beim Hovern
            color: "yellow.400",
          }}
        >
          <Text>Projekte</Text>
        </ChakraLink>
      </Box>
      <Box display={["none", "none", "block", "block"]} p="2">
        <ChakraLink
          as={Link}
          to="/contact"
          _hover={{
            textDecoration: "none", // Entfernt die Unterstreichung beim Hovern
            color: "yellow.400",
          }}
        >
          <Text>Kontakt</Text>
        </ChakraLink>
      </Box>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        display={["flex", "flex", "none"]}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigationsmenü</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4}>
              <ChakraLink
                as={Link}
                to="/"
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="lg">Home</Text>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/about"
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="lg">Über mich</Text>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/resume"
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="lg">Lebenslauf</Text>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/projects"
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="lg">Projekte</Text>
              </ChakraLink>
              <ChakraLink
                as={Link}
                to="/contact"
                onClick={onClose}
                _hover={{ textDecoration: "none" }}
              >
                <Text fontSize="lg">Kontakt</Text>
              </ChakraLink>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navigation;
