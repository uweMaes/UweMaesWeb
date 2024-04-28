import React from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";

function ToDoListInfo() {
  const todoWithoutTasksImageUrl = `${process.env.PUBLIC_URL}/assets/project_images/To-Do/ToDo ohne Aufgaben.png`;
  const todoWithTasksImageUrl = `${process.env.PUBLIC_URL}/assets/project_images/To-Do/ToDo mit Aufgaben.png`;

  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
      <Text fontSize="xl" mb={4}>
        To-Do-Liste (WPF-Anwendung mit C#)
      </Text>

      {/* Beschreibung */}
      <Text mb={2}>Beschreibung:</Text>
      <Text mb={4}>
        Diese WPF-Anwendung wurde entwickelt, um Aufgaben als Grid-Objekte mit
        einem Label für den Aufgabentext und einer CheckBox für den Status der
        Aufgabe zu verwalten. Die Liste kann als .JSON-Datei gespeichert und
        geladen werden. Wenn die Liste leer ist, kann sie durch den
        Speichern-Button initialisiert und durch den Laden-Button geladen
        werden.
      </Text>

      {/* Bilder */}
      <Text mb={2}>Vorschau:</Text>
      <Image
        borderRadius="md"
        src={todoWithoutTasksImageUrl}
        alt="To-Do-Liste ohne Aufgaben"
        mb={4}
      />
      <Image
        borderRadius="md"
        src={todoWithTasksImageUrl}
        alt="To-Do-Liste mit Aufgaben"
        mb={4}
      />

      {/* GitHub-Link */}
      <Text mb={2}>GitHub-Repository:</Text>
      <Link href="https://github.com/uweMaes/To-Do-Liste" isExternal>
        To-Do-Liste (GitHub)
      </Link>
    </Box>
  );
}

export default ToDoListInfo;
