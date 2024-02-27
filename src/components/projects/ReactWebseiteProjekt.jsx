import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import routing from "../../assets/project_images/meineWebseite/ScreenshotAppRouting.png";

function ReactWebseiteProjekt() {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Text fontSize="xl" mb={4}>
        React-Webseite
      </Text>

      {/* Über die Webseite */}
      <Text mb={2}>Über die Webseite:</Text>
      <Text mb={4}>
        Diese Webseite wurde als moderne Single-Page-Application (SPA) mit React
        entwickelt, um eine nahtlose Benutzererfahrung und schnelle Ladezeiten
        zu gewährleisten. Durch den Einsatz von React Hooks und Context API
        haben wir einen effizienten Zustandsmanagement-Flow implementiert, der
        die Komplexität der Anwendung reduziert und die Wartbarkeit verbessert.
      </Text>
      {/* Empfohlener Screenshot: Startseite der Webseite */}

      {/* Technologien und Bibliotheken */}
      <Text mb={2}>Genutzte Technologien und Bibliotheken:</Text>
      <Text mb={4}>
        Die Webseite nutzt eine Vielzahl moderner Technologien und Bibliotheken,
        darunter React für die Benutzeroberfläche, Chakra UI für das Design und
        die Layoutgestaltung, React Router für das Routing und Axios für
        HTTP-Anfragen. Diese Tools ermöglichen eine effiziente Entwicklung und
        bieten eine solide Grundlage für zukünftige Erweiterungen.
      </Text>
      {/* Empfohlener Screenshot: Ein Beispiel für eine Komponente mit Chakra UI */}

      {/* Features */}
      <Text mb={2}>Besondere Features:</Text>
      <Text mb={4}>
        Ein Highlight der Webseite ist das dynamische Routing, das es Benutzern
        ermöglicht, zwischen verschiedenen Seiten zu navigieren, ohne die Seite
        neu laden zu müssen. Zudem bietet die Webseite eine responsive
        Gestaltung, die für ein optimales Nutzererlebnis auf verschiedenen
        Geräten sorgt.
      </Text>
      {/* Empfohlener Screenshot: Responsive Design oder dynamische Interaktionen */}
      <Image
        borderRadius="full"
        boxSize="150px"
        src={routing}
        alt="Routing"
        mb={5}
        objectFit="cover"
      />

      {/* GitHub-Link */}
      <Text mb={2}>Das Projekt auf GitHub:</Text>
      <Link
        href="https://github.com/deinGitHubBenutzername/deinReactWebseiteRepo"
        isExternal
      >
        GitHub-Repository
      </Link>
    </Box>
  );
}

export default ReactWebseiteProjekt;
