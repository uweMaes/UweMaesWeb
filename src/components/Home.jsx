import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800"); // Hintergrundfarbe für Light/Dark Mode
  const textColor = useColorModeValue("gray.700", "gray.200"); // Textfarbe für Light/Dark Mode

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh" py={10} px={5}>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-around"
        mb={10}
      >
        <Box flexShrink={0}></Box>
        <Box mt={[4, 0]} ml={[0, 10]} textAlign={["center", "left"]}>
          <Heading as="h1" size="xl" mb={4}>
            Willkommen auf meiner Seite!
          </Heading>
          <Text fontSize="lg" mb={4}>
            Mein Name ist Uwe Maes, und ich bin Quereinsteiger in der
            IT-Branche. Diese Seite gibt Einblicke in meine beruflichen
            Fähigkeiten, Projekte und Interessen.
          </Text>
          <Button colorScheme="teal" as={RouterLink} to="/about">
            Mehr über mich
          </Button>
        </Box>
      </Flex>

      <Box textAlign="center">
        <Heading as="h2" size="lg" mb={4}>
          Was du hier finden kannst:
        </Heading>
        <Text fontSize="lg">
          Einen detaillierten Einblick in meine <strong>Berufserfahrung</strong>{" "}
          und <strong>Ausbildung</strong>.
        </Text>
        <Text fontSize="lg">
          Eine Übersicht meiner <strong>Projekte</strong> und{" "}
          <strong>technischen Fähigkeiten</strong>.
        </Text>
        <Text fontSize="lg">
          Meine persönlichen <strong>Interessen</strong> und{" "}
          <strong>Hobbys</strong>.
        </Text>
      </Box>
    </Box>
  );
};

export default Home;
