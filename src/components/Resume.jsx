import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const Resume = () => {
  const cardBg = useColorModeValue("white", "gray.700");
  const shadow = useColorModeValue("md", "dark-lg");
  const bild1Url = `${process.env.PUBLIC_URL}/assets/images/Bild1.jpg`;
  const bild2Url = `${process.env.PUBLIC_URL}/assets/images/Bild2.jpg`;
  return (
    <Box p={10}>
      <Heading as="h1" size="xl" mb={5}>
        Lebenslauf
      </Heading>

      <VStack spacing={5} align="stretch">
        <Flex
          direction={["column", "row"]}
          align="center"
          justify="space-between"
          mb={5}
        >
          <Box bg={cardBg} boxShadow={shadow} p={5} borderRadius="lg" w="full">
            <Heading as="h2" size="lg" mb={3}>
              Berufserfahrung:
            </Heading>
            <Text>
              <strong>S3-Offizier</strong> - Stab Test und Versuch, 06/2019 -
              06/2022
            </Text>
            <Text>
              <strong>Kompanieeinsatzoffizier</strong> - 4./Jägerbataillon 91,
              10/2017 - 05/2019
            </Text>
            <Text>
              <strong>Kompanieeinsatzoffizier</strong> - 2./Jägerbataillon 291,
              02/2015 - 09/2017
            </Text>
          </Box>

          <Image
            src={bild1Url}
            alt="Lt Maes als Ehrenzugführer bei JgBtl 291"
            borderRadius="lg"
            boxSize="200px"
            mb={5}
            objectFit="cover"
            ml={[0, 5]} // Margin left, nur auf nicht-mobilen Bildschirmen
            mt={[5, 0]} // Margin top, nur auf mobilen Bildschirmen
            mr={["0", "0", "20%"]} // 20% Rechts Abstand nur für große Bildschirme
          />
        </Flex>
        <Flex
          direction={["column", "row"]}
          align="center"
          justify="space-between"
          mb={5}
        >
          <Box bg={cardBg} boxShadow={shadow} p={5} borderRadius="lg" w="full">
            <Heading as="h2" size="lg" mb={3}>
              Ausbildung:
            </Heading>
            <Text>
              <strong>Fernstudium Informatik</strong> - Berufsförderungsdienst
              der Bundeswehr, Seit 07/2022
            </Text>
            <Text>
              <strong>Flugsicherheitsoffizier Grundlehrgang</strong> - General
              Flugsicherheit der Bundeswehr, 12/2018
            </Text>
            <Text>
              <strong>Einzelkämpferlehrgang</strong> - Infanterieschule des
              Heeres, 05/2015
            </Text>
            <Text></Text>
            <Text>
              <strong>Übungsleiter Bundeswehr</strong> - Sportschule der
              Bundeswehr, 01/2015
            </Text>
            <Text>
              <strong>Offizierlehrgang 3</strong> - Infanterieschule des Heeres,
              01/2014 - 12/2014
            </Text>
            <Text>
              <strong>Offizierlehrgang 2</strong> - Offizierschule des Heeres,
              10/2013 - 12/2013
            </Text>
            <Text>
              <strong>Studium Staats- und Sozialwissenschaften</strong> -
              Universität der Bundeswehr München, 10/2010 - 09/2013
            </Text>
            <Text>
              <strong>Offizierlehrgang 1</strong> - Offizierschule des Heeres,
              07/2010 - 09/2010
            </Text>
            <Text>
              <strong>Truppenpraktikum</strong> - Panzergrenadierbataillon 212,
              01/2010 - 06/2010
            </Text>
            <Text>
              <strong>Offizieranwärterlehrgang</strong> -
              Offizieranwärterbataillon Idar-Oberstein, 07/2009 - 12/2009
            </Text>
            <Text>
              <strong>Abitur</strong> - Math.-Nat. Gymnasium Mönchengladbach,
              1999 - 2009
            </Text>
          </Box>

          <Image
            src={bild2Url}
            alt="Lt Maes im GTK Boxer"
            borderRadius="lg"
            boxSize="250px"
            mb={5}
            objectFit="cover"
            ml={[0, 5]} // Margin left, nur auf nicht-mobilen Bildschirmen
            mt={[5, 0]} // Margin top, nur auf mobilen Bildschirmen
            mr={["0", "0", "20%"]} // 20% Rechts Abstand nur für große Bildschirme
          />
        </Flex>
      </VStack>
    </Box>
  );
};

export default Resume;
