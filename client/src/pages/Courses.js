import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Button, Stack, Flex, Image } from "@chakra-ui/react";
import {Input} from '@chakra-ui/react'

function Courses() {
  
  const MenuItem = ({ children, isLast, to = "/", handleMouseOver, ...rest }) => {
    return (
      <Link to={to}>
        <Text display="inline-block" color={"white"} {...rest}>
          {children}
        </Text>
      </Link>
    );
  };

  return (
    <body className="App-Body">
      <Flex direction='column' align='center' justifyContent='center'>
        <Text fontSize ='58px' color='white' marginBottom="30px" style={{ lineHeight: '1.2' }}>
          Courses
        </Text>
        <Box>     
        <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
          <MenuItem color="#E66F7B" to="/">My Courses</MenuItem>
          <MenuItem to="/"> | </MenuItem>
          <MenuItem  to='/'> Schedule </MenuItem>
          <MenuItem to="/"> | </MenuItem>
          <MenuItem to="/"> Search Courses </MenuItem>
        </Stack>
        </Box>
      </Flex>
      <Box backgroundColor='#3C3546' paddingLeft='50px'>
      <Text align='left' fontSize='20px' color='white' paddingTop="30px" marginTop="50px" marginBottom="20px" style={{ lineHeight: '1.2' }}>
          Welcome to your courses!
      </Text>
      <Text align='left' fontSize='16px' color='white' marginBottom="20px" style={{ lineHeight: '1.2' }}>
          Course Overview
      </Text>
      <Input placeholder="Search..." size="sm" borderRadius="15px" marginBottom="30px" maxWidth="300px"/>
      <Flex direction='row' align='center' justifyContent='center' flexWrap='wrap'>
        <Box flex="1" backgroundColor="white" margin="10px">
        <Box margin="10px">
          <Image src='./images/download.jpeg' alt="Image 1" marginBottom="10px" />
          <Text color='skyblue' fontSize="16px">CICS Department</Text>
          <Text fontSize="20px">CS 320: Software Engineering</Text>
          <Text fontSize="14px">Some info .............</Text>
          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open </Button>
        </Box>
        </Box>
        <Box flex="1" backgroundColor="white" margin="10px">
        <Box margin="10px">
          <Image src='./images/logo512.png' alt="Image 1" marginBottom="10px" />
          <Text color='skyblue' fontSize="16px">CICS Department</Text>
          <Text fontSize="20px">CS 320: Software Engineering</Text>
          <Text fontSize="14px">Some info .............</Text>
          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open </Button>
        </Box>
        </Box>
        <Box flex="1" backgroundColor="white" margin="10px">
        <Box margin="10px">
          <Image src='./images/logo512.png' alt="Image 1" marginBottom="10px" />
          <Text color='skyblue' fontSize="16px">CICS Department</Text>
          <Text fontSize="20px">CS 320: Software Engineering</Text>
          <Text fontSize="14px">Some info .............</Text>
          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open </Button>
        </Box>
        </Box>
        
        <Box flex="1" backgroundColor="white" margin="10px">
        <Box margin="10px">
          <Image src='./images/logo512.png' alt="Image 1" marginBottom="10px" />
          <Text color='skyblue' fontSize="16px">CICS Department</Text>
          <Text fontSize="20px">CS 320: Software Engineering</Text>
          <Text fontSize="14px">Some info .............</Text>
          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open </Button>
        </Box>
        </Box>
      </Flex>
      </Box>
    </body>
  );
}

export default Courses;