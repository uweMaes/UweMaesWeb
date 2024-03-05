import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

function KFZVerwaltung() {
  const umlDiagrammUrl = `${process.env.PUBLIC_URL}/assets/project_images/kfzVerwaltung/UML.png`;
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Text fontSize="xl" mb={4}>
        KFZ Verwaltungsanwendung
      </Text>

      {/* Anwendungsbeschreibung */}
      <Text mb={2}>Über die Anwendung:</Text>
      <Text mb={4}>
        Die KFZ Verwaltungsanwendung ist eine umfassende Lösung zur Verwaltung
        von Fahrzeugen, inklusive Erfassung von Fahrzeugdaten, Tankvorgängen und
        der Anzeige von Statistiken. Entwickelt mit der Model-View-Controller
        (MVC) Architektur, bietet die Anwendung eine klare Trennung zwischen
        Benutzeroberfläche, Geschäftslogik und Datenzugriff, was zu einer
        modularen und leicht wartbaren Codebasis führt.
      </Text>
      {/* Empfohlener Screenshot: Hauptansicht der Anwendung */}

      {/* UML-Diagramm */}
      <Text mb={2}>Architekturdiagramm:</Text>
      <Image
        src={umlDiagrammUrl}
        alt="UML Diagramm der KFZ Verwaltungsanwendung"
        mb={4}
      />
      <Text mb={4}>
        Das UML-Diagramm illustriert die strukturierte Organisation der
        Anwendung. Es zeigt die Beziehungen zwischen den verschiedenen
        Komponenten wie Datenbank, Views und Controllern, sowie die Einbindung
        des MVC-Designs zur Optimierung der Anwendungsstruktur.
      </Text>
      {/* Empfohlener Screenshot: UML-Diagramm */}

      {/* Design und UI */}
      <Text mb={2}>Design und Benutzeroberfläche:</Text>
      <Text mb={4}>
        Das Design der KFZ Verwaltungsanwendung ist auf Benutzerfreundlichkeit
        und Effizienz ausgerichtet. Mit einer intuitiven Benutzeroberfläche
        ermöglicht die Anwendung eine schnelle Eingabe und Verwaltung von
        Fahrzeug- und Tankdaten, unterstützt durch visuelle Statistiken für
        einen sofortigen Überblick.
      </Text>
      {/* Empfohlener Screenshot: UI-Design, Eingabemasken */}

      {/* Code-Screenshots */}
      <Text mb={2}>Einblick in den Code:</Text>
      <Image src="/path/to/code-screenshot.png" alt="Code-Screenshot" mb={4} />
      <Text mb={4}>
        Die Codebasis folgt best practices in der Softwareentwicklung und nutzt
        moderne Technologien und Frameworks. Durch die Verwendung der
        MVC-Architektur ist der Code gut organisiert und leicht erweiterbar.
      </Text>
      {/* Empfohlener Screenshot: Ausschnitt aus dem Controller oder Model */}

      {/* GitHub-Link */}
      <Text mb={2}>Das Projekt auf GitHub:</Text>
      <Link
        href="https://github.com/deinGitHubBenutzername/deinProjektRepo"
        isExternal
      >
        GitHub-Repository
      </Link>
    </Box>
  );
}

export default KFZVerwaltung;
