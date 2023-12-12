import { Flex , Box, VStack, Input, Heading, List, ListItem, Textarea, IconButton, HStack } from "@chakra-ui/react";
import { PhoneIcon, HamburgerIcon } from "@chakra-ui/icons";

function Message() {
  return (
    <Flex height="100vh">
      <Box width="20%" backgroundColor="#3C3546" color="white" paddingRight="20px">
        <Heading size="md" p={5}>CS 320</Heading>
        <Heading size="sm" p={5}>Introduction to SWE</Heading>
      </Box>
      <Box width="80%" pl={5} display="flex">
      <VStack width="30%">
          <Input 
            my={5}
            borderRadius="lg"
            placeholder="Search..."
            backgroundColor="white"
            width="100%"
          />
          <Box borderRadius="lg" backgroundColor="white" border="1px solid black" p={5} mb={5} width="100%">
            <Heading size="md" mb={3}>Study Group</Heading>
            <List spacing={3}>
              <ListItem>Message Group 1</ListItem>
              <ListItem>Message Group 2</ListItem>
              <ListItem>Message Group 3</ListItem>
              <ListItem>Message Group 4</ListItem>
            </List>
          </Box>
          <Box borderRadius="lg" backgroundColor="white" border="1px solid black" p={5} width="100%">
            <Heading size="md" mb={3}>Classmates</Heading>
            <List spacing={3}>
              <ListItem>Classmate 1</ListItem>
              <ListItem>Classmate 2</ListItem>
              <ListItem>Classmate 3</ListItem>
              <ListItem>Classmate 4</ListItem>
              <ListItem>Classmate 5</ListItem>
              <ListItem>Classmate 6</ListItem>
              <ListItem>Classmate 7</ListItem>
            </List>
          </Box>
        </VStack>
        <Box width="70%" p={5}>
        <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <VStack alignItems="flex-start">
              <Heading size="md">John Doe</Heading>
              <text fontSize="sm" color="gray.500">Last online: 5 minutes ago</text>
            </VStack>
            <HStack>
              <IconButton icon={<PhoneIcon />} />
              <IconButton icon={<HamburgerIcon />} />
            </HStack>
          </Flex>
          <Flex flexDirection="column" height="80%" overflowY="auto" mb={5}>
            <Box borderRadius="lg" backgroundColor="#E4E6EB" p={3} alignSelf="flex-start" maxWidth="70%" mb={3}>
              <p>Hi John, how are you?</p>
            </Box>
            <Box borderRadius="lg" backgroundColor="#E4E6EB" p={3} alignSelf="flex-end" maxWidth="70%" mb={3}>
              <p>Im good, thanks! How about you?</p>
            </Box>
          </Flex>
          <Textarea placeholder="Type your message..." mt="auto" />
        </Box>
      </Box>
    </Flex>
  );
}

export default Message;