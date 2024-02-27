import { Flex, Text, Heading, Box } from "@chakra-ui/react";
import { FiGithub, FiPhone, FiMail } from "react-icons/fi";

function Contact() {
  return (
    <Box p={10}>
      <div>
        <Heading as="h1" size="xl" mb={5}>
          Kontakt
        </Heading>
        <Text>
          <strong>Konnte ich Ihr Interesse wecken? </strong>
        </Text>
        <Flex align="center">
          <Text>
            <strong>Schauen Sie sich auch mein</strong>
            <span style={{ marginRight: "4px" }}></span>
          </Text>
          {/* Leerzeichen hier eingefügt */}
          <FiGithub />
          <Text ml={1}>
            <strong>
              <a href="https://github.com/uweMaes">GitHub-Profil</a>
            </strong>
            <span style={{ marginRight: "4px" }}></span>
          </Text>
          <Text>
            <strong>an!</strong>
          </Text>
        </Flex>
        <Text>
          <strong>
            Oder kontaktieren Sie mich direkt, jederzeit per Mail oder
            telefonisch!
          </strong>
        </Text>
        <Flex align="center">
          <FiMail />
          <Text ml={2}>
            <a href="mailto:uwe.maes@web.de">E-Mail: uwe.maes@web.de</a>
          </Text>
        </Flex>
        <Flex align="center">
          <FiPhone />
          <Text ml={2}>
            <a href="tel:+491627451457">Telefon: 01627451457</a>
          </Text>
        </Flex>
        {/* Weitere Links hier */}
      </div>
    </Box>
  );
}

export default Contact;
