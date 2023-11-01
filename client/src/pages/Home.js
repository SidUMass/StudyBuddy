import React from 'react';

import { Button, ring } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Image } from '@chakra-ui/react'

import { ReactComponent as Fellas } from "../images/fellas.svg";
import { useState, useEffect } from 'react';
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  
function Home() {
    let { height, width } = useWindowDimensions();
  return (
    <body className="App-Body">
        <Box paddingLeft="50px">
            <Flex alignItems={width >= 1168 ? "flex-start" : "center"} justifyContent="center">
                {/* Left Side Banner */}
                <Box width="50%" paddingTop="120px" paddingLeft="0">
                    {/* <Flex direction="column" alignItems={width >= 1168 ? "flex-start" : "center"} justifyContent="center"> */}
                        <Text fontSize ='58px' color='#E66F7B' marginBottom="30px" style={{ lineHeight: '1.2' }}>
                            Connect with other students from your class!
                        </Text>
                        <Text fontSize ='20px' color='grey' marginBottom="10px">
                            Click on a button to get started!
                        </Text>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {width >= 550 ? <Button colorScheme="blue" whiteSpace='normal'>Join a Study Group</Button> : <Button colorScheme="blue" whiteSpace='normal'>Join a Group</Button>}
                            {/* <Button colorScheme="blue" whiteSpace='normal'>Join a Study Group</Button> */}
                            <Button colorScheme="blue"variant="outline" whiteSpace='normal'>Learn More</Button>
                        </div>
                    {/* </Flex> */}
                </Box>

                {/* Right Side Banner */}
                <Box width="50%" marginLeft="auto">
                    {width >= 1168 && <Fellas />}
                </Box>
            </Flex>
        <Flex direction="column" alignItems="center" justifyContent="center">
            {/* Featured courses */}
            <Box>
            
            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="100px">
                Featured Courses
            </Text>

            <Text fontSize ='20px' color='grey'marginBottom="10px">
                Some of our popular courses
            </Text>
            
            <Flex direction='row' align='center' justifyContent='center' flexWrap='wrap'>
                <Box flex="1" backgroundColor="white">
                <Box margin="10px">
                    <Image src='./images/download.jpeg' alt="Image 1" marginBottom="10px" />
                    <Text color='skyblue' fontSize="16px">CICS Department</Text>
                    <Text fontSize="20px">CS 320: Software Engineering</Text>
                    <Text fontSize="14px">Some info .............</Text>
                    <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open ></Button>
                </Box>
                </Box>
                <Box flex="1" backgroundColor="white" margin="15px">
                <Box margin="10px">
                    <Image src='./images/logo512.png' alt="Image 1" marginBottom="10px" />
                    <Text color='skyblue' fontSize="16px">CICS Department</Text>
                    <Text fontSize="20px">CS 320: Software Engineering</Text>
                    <Text fontSize="14px">Some info .............</Text>
                    <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open ></Button>
                </Box>
                </Box>
                <Box flex="1" backgroundColor="white" >
                <Box margin="10px">
                    <Image src='./images/logo512.png' alt="Image 1" marginBottom="10px" />
                    <Text color='skyblue' fontSize="16px">CICS Department</Text>
                    <Text fontSize="20px">CS 320: Software Engineering</Text>
                    <Text fontSize="14px">Some info .............</Text>
                    <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open ></Button>
                </Box>
                </Box>
            </Flex>
            

            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="400px">
                Each and every Student is important!
            </Text>

            <Text fontSize ='20px' color='grey'marginBottom="10px">
                Check out our Reviews below
            </Text>
            <Flex direction='row' align='center' justifyContent='center'>
                <Box flex="1"  margin="10px" padding="10px" display="flex" flexDirection="column" alignItems="center">
                    <Image borderRadius="full" boxSize="100px" src="./images/human-face.png" alt="Reviewer 1" marginBottom="10px" />
                    <Text textAlign="center" color="yellow" marginBottom="10px">★★★★★</Text>
                    <Text textAlign="center" color="white" fontSize="12px">Review .......</Text>
                    <Text  textAlign="center" color="white" fontSize="14px">Name</Text>
                    <Text textAlign="center" color="white" fontSize="12px">Role</Text>
                </Box>
                <Box flex="1"  margin="10px" padding="10px" display="flex" flexDirection="column" alignItems="center">
                    <Image borderRadius="full" boxSize="100px" src="./images/human-face.png" alt="Reviewer 2" marginBottom="10px" />
                    <Text textAlign="center" color="yellow" marginBottom="10px">★★★★★</Text>
                    <Text textAlign="center" color="white" fontSize="12px">Review .......</Text>
                    <Text textAlign="center" color="white" fontSize="14px">Name</Text>
                    <Text textAlign="center" color="white" fontSize="12px">Role</Text>
                </Box>
            </Flex>

            </Box>
            
            
            <Box pb="100px"marginRight={"60px"}>
            <Text fontSize ='40px' color='white'marginBottom="10px" marginTop="400px"textAllign="center"marginLeft={"320px"}>
                JOIN US!
            </Text>
           
            <Text fontSize ='16px' color='grey'marginBottom="20px"textAllign="center">
                Want to join our platform? By entering your email address below, you'll gain 
                access to an exclusive<br /> opportunity to manage and showcase your college courses.
                Take advantage of our platform's powerful<br /> features to organize, promote, and share
                your educational journey with the world. <br />We can't wait to see what you bring to the table!
            </Text>
            
            
            <Flex alignItems="center" justifyContent="center">
            <Input placeholder="Enter your Email Here" size="lg" style={{ background: 'white' }} />
            <Button bg="#E66F7B" color="white"size="lg">Submit</Button>
            </Flex>
            </Box>
            
            
        </Flex>
        </Box>
        
    </body>
  );
}

export default Home;
