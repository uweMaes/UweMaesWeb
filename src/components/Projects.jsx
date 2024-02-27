import React, { useState } from "react";
import { Box, Text, Button, VStack, Collapse } from "@chakra-ui/react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import KFZ_Verwaltung from "./projects/KFZVerwaltung";
import ReactWebseiteProjekt from "./projects/ReactWebseiteProjekt";

const projects = [
  {
    id: 0,
    name: "KFZ Verwaltung mit Python und SQLite3",
    content: <KFZ_Verwaltung />,
    isCustomComponent: true,
  },
  {
    id: 1,
    name: "Meine eigene Webseite mit ReactJS und ChakraUI",
    content: <ReactWebseiteProjekt />,
    isCustomComponent: true,
  },
  { id: 2, name: "Projekt 2", content: "Inhalt von Projekt 2..." },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleProject = (id) => {
    setSelectedProject(selectedProject === id ? null : id);
  };

  return (
    <VStack spacing={4} width="100%">
      {projects.map((project) => (
        <Box
          key={project.id}
          p={5}
          shadow="md"
          borderWidth="1px"
          borderRadius="md"
          width="100%" // Setze die Breite auf 100%
        >
          <Text fontSize="xl">{project.name}</Text>
          <Collapse in={selectedProject === project.id}>
            <Box mt={4}>
              {project.isCustomComponent ? (
                project.content
              ) : (
                <Text>{project.content}</Text>
              )}
            </Box>
          </Collapse>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => toggleProject(project.id)}
            rightIcon={
              selectedProject === project.id ? (
                <FiChevronUp />
              ) : (
                <FiChevronDown />
              )
            }
          >
            {selectedProject === project.id ? "" : ""}
          </Button>
        </Box>
      ))}
    </VStack>
  );
}

export default Projects;
