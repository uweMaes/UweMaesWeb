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

// Link-Konfiguration für die Wiederverwendung
const links = [
  { to: "/", text: "Home" },
  { to: "/about", text: "Über mich" },
  { to: "/resume", text: "Lebenslauf" },
  { to: "/projects", text: "Projekte" },
  { to: "/contact", text: "Kontakt" },
];

// Wiederverwendbare Link-Komponente
const NavLink = ({ to, text }) => (
  <Box display={["none", "none", "block", "block"]} p="2">
    <ChakraLink
      as={Link}
      to={to}
      _hover={{ textDecoration: "none", color: "yellow.400" }}
    >
      <Text>{text}</Text>
    </ChakraLink>
  </Box>
);

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex bg="teal.500" color="white" justifyContent="space-between" p={4}>
      {links.map((link) => (
        <NavLink
          key={link.to}
          {...link}
          display={["none", "none", "block", "block"]}
        />
      ))}
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
              {links.map((link) => (
                <ChakraLink
                  key={link.to}
                  as={Link}
                  to={link.to}
                  onClick={onClose}
                  _hover={{ textDecoration: "none" }}
                >
                  <Text fontSize="lg">{link.text}</Text>
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navigation;
