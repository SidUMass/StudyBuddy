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
              object-fit="cover"
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
              <FormLabel>Username</FormLabel>
              <Input defaultValue="annasmith" />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input defaultValue="Anna Smith" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input defaultValue="********" />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input defaultValue="sanna@umass.edu" />
            </FormControl>
            <FormControl>
              <FormLabel>College</FormLabel>
              <Input defaultValue="University of Massachusetts Amherst" />
            </FormControl>
            <FormControl>
              <FormLabel>Major</FormLabel>
              <Input defaultValue="Computer Science" />
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
                <Th borderRight="1px solid black" color="white">Professor Name</Th>
                <Th borderRight="1px solid black" color="white">Number of Students</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr bg="#696076" height="70px">
                <Td borderRight="1px solid black">CS 320</Td>
                <Td borderRight="1px solid black">Software Engineering</Td>
                <Td borderRight="1px solid black">Fall 23</Td>
                <Td borderRight="1px solid black">Jaime Dávila</Td>
                <Td borderRight="1px solid black">28</Td>
              </Tr>
              {/* Add more rows as needed */}
              <Tr bg="#696076" height="70px">
              <Td borderRight="1px solid black">CS 345</Td>
              <Td borderRight="1px solid black">Pract & Appl of Data Management</Td>
              <Td borderRight="1px solid black">Fall 23</Td>
              <Td borderRight="1px solid black">Gordon Anderson</Td>
              <Td borderRight="1px solid black">56</Td>
            </Tr>
            <Tr bg="#696076" height="70px">
            <Td borderRight="1px solid black">BIOL 311</Td>
            <Td borderRight="1px solid black">General Genetics</Td>
            <Td borderRight="1px solid black">Spring 22</Td>
            <Td borderRight="1px solid black">Daniel Anderson</Td>
            <Td borderRight="1px solid black">136</Td>
          </Tr>
            </Tbody>
          </Table>
        </Box>
      )}
    </Flex>
  );
}

export default Profile;