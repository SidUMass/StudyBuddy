import React from 'react';

import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'

import { ReactComponent as Fellas } from "../images/fellas.svg";

function Home() {
  return (
    <body className="App-Body">
        <Box paddingLeft="100px">
            <Flex >
                {/* Left Side Banner */}
                <Box width="40%" paddingTop="120px">
                    <Text fontSize ='58px' color='#E66F7B' marginBottom="30px" style={{ lineHeight: '1.2' }}>
                        Connect with other students from your class!
                    </Text>
                    <Text fontSize ='20px' color='grey' marginBottom="10px">
                        Click on a button to get started!
                    </Text>

                    {/* Buttons */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button colorScheme="blue">Join a Study Group</Button>
                        <Button colorScheme="blue"variant="outline">Learn More</Button>
                    </div>
                </Box>

                {/* Right Side Banner */}
                <Box width="50%" paddingLeft="100px">
                    <Fellas />
                </Box>
            </Flex>

            {/* Featured courses */}
            <div className="App-Body-Featured">
            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="400px">
                Featured Courses
            </Text>

            <Text fontSize ='20px' color='grey'marginBottom="10px">
                Some of our popular courses
            </Text>


            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="400px">
                Each and every Student is important!
            </Text>

            <Text fontSize ='20px' color='grey'marginBottom="10px">
                Check out our Reviews below
            </Text>


            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="400px"textAllign="center"marginLeft="300px">
                JOIN US!
            </Text>

            <Text fontSize ='16px' color='grey'marginBottom="100px"textAllign="center">
                Want to join our platform? By entering your email address below, you'll gain 
                access to an exclusive<br /> opportunity to manage and showcase your college courses.
                Take advantage of our platform's powerful<br /> features to organize, promote, and share
                your educational journey with the world. <br />We can't wait to see what you bring to the table!
            </Text>

            <Box width="70%"pb="200px">
            <Flex align="center">
            <Input placeholder="Enter your Email Here" size="lg" style={{ background: 'white' }} />
            <Button bg="#E66F7B" color="white"size="lg">Submit</Button>
            </Flex>
            </Box>
            
            </div>
        </Box>
    </body>
  );
}

export default Home;
