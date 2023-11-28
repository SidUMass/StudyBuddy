import { Box, VStack, Heading, Text, Image, Button, Flex, SimpleGrid, Input, FormControl, FormLabel, Table, Thead, Tbody, Tr, Th, Td  } from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaBook, FaRss, FaCog } from "react-icons/fa";
import profileImage from './profile.jpg';

function Profile() {
  const [activeButton, setActiveButton] = useState("Profile");

  const handleClick = (name) => {
    setActiveButton(name);
  };

  const SidebarButton = ({ name, icon }) => (
    <Button
      leftIcon={icon}
      backgroundColor={activeButton === name ? "#544D5E" : "transparent"}
      color="white"
      onClick={() => handleClick(name)}
      width="100%"
      justifyContent="flex-start"
      borderRadius="none"
      borderRight={activeButton === name ? "2px solid #B089D8" : ""}
      _hover={{}}
      fontSize="lg" // increased font size
    >
      {name}
    </Button>
  );

  return (
    <Flex h="100vh" m="0" p="0">
      <VStack
        as="nav"
        spacing={6}
        align="stretch"
        backgroundColor="#3C3546"
        width="1/5"
        color="white"
      >
        <SidebarButton name="Profile" icon={<FaUser />} />
        <SidebarButton name="My courses" icon={<FaBook />} />
        <SidebarButton name="Activity feed" icon={<FaRss />} />
        <SidebarButton name="Settings" icon={<FaCog />} />
      </VStack>
      {activeButton === "Profile" && (
        <Box flex="1" padding={5} color="white">
          <Flex align="center">
            <Image
              borderRadius="full"
              boxSize="150px"
              src={profileImage}
              alt="Profile"
              mr={3}
            />
            <Box>
              <Heading>Anna Smith</Heading>
              <Text fontSize="xl">Umass Amherst</Text>
              <Text>Computer Science</Text>
            </Box>
          </Flex>
          <SimpleGrid columns={2} spacing={6} mt={5}>
            <FormControl>
              <FormLabel>Field 1</FormLabel>
              <Input defaultValue="Default text for Field 1" />
            </FormControl>
            <FormControl>
              <FormLabel>Field 2</FormLabel>
              <Input defaultValue="Default text for Field 2" />
            </FormControl>
            <FormControl>
              <FormLabel>Field 3</FormLabel>
              <Input defaultValue="Default text for Field 3" />
            </FormControl>
            <FormControl>
              <FormLabel>Field 4</FormLabel>
              <Input defaultValue="Default text for Field 4" />
            </FormControl>
            <FormControl>
              <FormLabel>Field 5</FormLabel>
              <Input defaultValue="Default text for Field 5" />
            </FormControl>
            <FormControl>
              <FormLabel>Field 6</FormLabel>
              <Input defaultValue="Default text for Field 6" />
            </FormControl>
          </SimpleGrid>
        </Box>
      )}
      {activeButton === "My courses" && (
        <Box flex="1" padding={5} color="white">
          <Heading>Anna Smith</Heading>
          <Text fontSize="xl">Umass Amherst</Text>
          <Heading mt={5} size="lg">My courses</Heading>
          <Table variant="simple" mt={5} size="sm" style={{tableLayout: 'auto'}}>
            
            <Thead>
              <Tr bg="#463F50" height="50px">
                <Th borderRight="1px solid black" color="white">Class</Th>
                <Th borderRight="1px solid black" color="white">Description</Th>
                <Th borderRight="1px solid black" color="white">Term</Th>
                <Th borderRight="1px solid black" color="white">Professor's Name</Th>
                <Th borderRight="1px solid black" color="white">Number of Students</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg="#696076" height="70px">
                <Td borderRight="1px solid black">Class 1</Td>
                <Td borderRight="1px solid black">Description 1</Td>
                <Td borderRight="1px solid black">Term 1</Td>
                <Td borderRight="1px solid black">Professor's Name 1</Td>
                <Td borderRight="1px solid black">Number of Students 1</Td>
              </Tr>
              {/* Add more rows as needed */}
            </Tbody>
          </Table>
        </Box>
      )}
    </Flex>
  );
}

export default Profile;