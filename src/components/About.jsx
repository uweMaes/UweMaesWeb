import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Link as RouterLink } from "react-router-dom";

const About = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const shadow = useColorModeValue("md", "dark-lg");
  const bildUrl = `${process.env.PUBLIC_URL}/assets/images/file(64).jpeg`;

  return (
    <VStack spacing={5} p={5}>
      <Box p={5}>
        <Heading as="h1" size="xl" mb={5}>
          Über mich
        </Heading>

        <Image
          borderRadius="full"
          boxSize="150px"
          src={bildUrl}
          alt="Ich im Anzug"
          mb={5}
          objectFit="cover"
        />

        <Text fontSize="lg" mb={5}>
          13 Jahre lang habe ich als Zeitsoldat in der Bundeswehr gedient,
          zuletzt im Dinestgrad eines Hauptmanns. Als Offizier umfassten meine
          Aufgaben Bereiche wie Planung und Organisation von Ausbildungen und
          Übungen und die Unterstützung des Vorgesetzten bei der Führung und
          Erziehung der Soldaten. Ebenso war ich selbst für Führung von über 100
          Soldaten im In- und Ausland verantwortlich. In meiner letzten
          Verwendung war ich in der Forschung und Weiterentwicklung des Heeres
          im Bereich Digitalisierung eingesetzt. Dort habe ich mich entschieden,
          meine Karriere in der IT-Branche fortzusetzen. Derzeit vertiefe ich
          mein Wissen durch ein Informatikstudium mit dem Schwerpunkt auf
          Softwareentwicklung.
        </Text>
      </Box>
      <Box bg={cardBg} boxShadow={shadow} p={5} borderRadius="lg" w="full">
        <Heading as="h2" size="lg" mb={3}>
          Berufliche Ziele und Antrieb
        </Heading>
        <Text fontSize="lg" mb={5}>
          Meine beruflichen Ziele liegen in der Entwicklung innovativer
          Softwarelösungen, die von der Anforderungsanalyse bis zum Betrieb und
          der Weiterentwicklung reichen. Besonders interessieren mich die Themen
          Clean Code, Refactoring und Softwaremetriken. Zudem faszinieren mich
          künstliche Intelligenz und die Möglichkeiten des Prompt Engineering,
          ein Bereich, der sich mit der effektiven Gestaltung von
          Eingabeaufforderungen für KI-Systeme beschäftigt.
        </Text>
      </Box>
      <Box bg={cardBg} boxShadow={shadow} p={5} borderRadius="lg" w="full">
        <Heading as="h2" size="lg" mb={3}>
          Persönliche Interessen
        </Heading>
        <Text fontSize="lg" mb={5}>
          In meiner Freizeit finde ich Ausgleich beim Segeln, Ausdauersport und
          meiner aktiven Mitgliedschaft in der freiwilligen Feuerwehr. Diese
          Aktivitäten spiegeln nicht nur meine persönlichen Interessen wider,
          sondern unterstreichen auch mein Engagement für Teamarbeit und
          Gemeinschaft.
        </Text>
      </Box>
      <Box bg={cardBg} boxShadow={shadow} p={5} borderRadius="lg" w="full">
        <Heading as="h2" size="lg" mb={3}>
          Mein Weg in die IT-Branche
        </Heading>
        <Text fontSize="lg" mb={5}>
          Als Quereinsteiger mit einem reichen Erfahrungsschatz bin ich auf der
          Suche nach meiner beruflichen Bestimmung in der IT. Ich bin besonders
          an nachhaltigen Technologien interessiert und derzeit auf der Suche
          nach einem Praktikum, das es mir ermöglicht, meine Fähigkeiten in der
          industriellen Softwareentwicklung zu erweitern und meine Produktivität
          in einem innovativen Umfeld unter Beweis zu stellen.
        </Text>

        <Flex align="center" justify="flex end">
          <Text fontSize="lg">
            {" "}
            Falls Ihr Unternehmen in spezialisierten oder weniger bekannten
            Technologien tätig ist und einen leidenschaftlichen und engagierten
            Anwärter sucht, freue ich mich über die Gelegenheit, mich mit neuen
            Herausforderungen auseinanderzusetzen.
          </Text>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="teal"
            variant="solid"
            ml={4}
            minW="120px"
            as={RouterLink}
            to="/Contact"
          >
            Kontakt
          </Button>
        </Flex>
      </Box>
    </VStack>
  );
};

export default About;
