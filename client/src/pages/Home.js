import React from 'react';

import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Image } from '@chakra-ui/react'

import { ReactComponent as Fellas } from "../images/fellas.svg";
import Tile_Default from "../images/tile-default.jpeg";
import Rev_1 from "../images/pic_rev1.jpeg";
import Rev_2 from "../images/pic_rev2.jpeg";

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
                        <Text fontSize='58px' color='#E66F7B' marginBottom="30px" style={{ lineHeight: '1.2' }}>
                            Connect with other students from your class!
                        </Text>
                        <Text fontSize='20px' color='grey' marginBottom="10px">
                            Click on a button to get started!
                        </Text>

                        {/* Buttons */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            {width >= 550 ? <Button colorScheme="blue" whiteSpace='normal'>Join a Study Group</Button> : <Button colorScheme="blue" whiteSpace='normal'>Join a Group</Button>}
                            {/* <Button colorScheme="blue" whiteSpace='normal'>Join a Study Group</Button> */}
                            <Button colorScheme="blue" variant="outline" whiteSpace='normal'>Learn More</Button>
                        </div>
                        {/* </Flex> */}
                    </Box>

                    {/* Right Side Banner */}
                    <Box width="50%" marginLeft="auto">
                        <Fellas />
                    </Box>
                </Flex>
                <Flex direction="column" justifyContent="center">
                    {/* Featured courses */}
                    <Text fontSize='40px' color='white' marginBottom="10px" marginTop="100px">
                        Featured Courses
                    </Text>
                    <Text fontSize='20px' color='grey' marginBottom="10px">
                        Some of our popular courses
                    </Text>

                    <Flex direction='row' align='center' justifyContent='center' flexWrap='wrap' className='featured-courses-tiles'>
                       <Box flex="1" backgroundColor="white" margin="10px">
                        <Box margin="10px">
                          <Image src={Tile_Default} alt="Image 1" className='tile-image' />
                          <Text color='skyblue' fontSize="16px">CICS Department</Text>
                          <Text fontSize="20px">CS 320: Software Engineering</Text>
                          <Text color='gray' fontSize="14px">Involves defining products, collaborating with customers, leading teams, ensuring quality, and the software lifecycle.</Text>
                          <Box display="flex" alignItems="center" marginTop="10px">
                          </Box>
                          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open</Button>
                        </Box>
                      </Box>
                        <Box flex="1" backgroundColor="white" margin="10px">
                        <Box margin="10px">
                          <Image src={Tile_Default} alt="Image 1" className='tile-image' />
                          <Text color='skyblue' fontSize="16px">Biology Department</Text>
                          <Text fontSize="20px">BIOL 311: General Genetics</Text>
                          <Text color='gray' fontSize="14px">Introduction to genetics including Mendelian and molecular developmental. Examples from a wide variety of organisms.</Text>
                          <Box display="flex" alignItems="center" marginTop="10px">
                          </Box>
                          <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open</Button>
                        </Box>
                      </Box>
                      <Box flex="1" backgroundColor="white" margin="10px">
                      <Box margin="10px">
                        <Image src={Tile_Default} alt="Image 1" className='tile-image' />
                        <Text color='skyblue' fontSize="16px">English Department</Text>
                        <Text fontSize="20px">ENG 131: Society and Literature</Text>
                        <Text color='gray' fontSize="14px">Introduction to the multifaceted ways literature both shapes and is shaped by its social and historical contexts.</Text>
                        <Box display="flex" alignItems="center" marginTop="10px">
                        </Box>
                        <Button marginTop="10px" borderRadius="30px" colorScheme="blue" color="skyblue" variant="outline">Open</Button>
                      </Box>
                    </Box>
                    </Flex>


                    <Text fontSize='40px' color='white' marginBottom="10px" marginTop="100px">
                        Each and every Student is important!
                    </Text>

                    <Text fontSize='20px' color='grey' marginBottom="10px">
                        Check out our Reviews below
                    </Text>
                    <Flex direction='row' align='center' justifyContent='center'>
                        <Box flex="1" margin="10px" padding="10px" display="flex" flexDirection="column" alignItems="center">
                            <Image borderRadius="full" className='rev-image' src={Rev_1} alt="Reviewer 1" marginBottom="10px" />
                            <Text textAlign="center" color="white" fontSize="12px" maxW="200px">"StudyBuddy transforms my TA role by simplifying communication, fostering collaboration, and streamlining resource sharing, greatly enhancing the teaching experience."</Text>
                            <Text textAlign="center" color="yellow" marginBottom="10px">★★★★★</Text>
                            <Text textAlign="center" color="white" fontSize="14px">Shawn Smith</Text>
                            <Text textAlign="center" color="white" fontSize="12px">Teaching Assistant</Text>
                        </Box>
                        <Box flex="1" margin="10px" padding="10px" display="flex" flexDirection="column" alignItems="center">
                            <Image borderRadius="full" className='rev-image' src={Rev_2} alt="Reviewer 2" marginBottom="10px" />
                            <Text textAlign="center" color="white" fontSize="12px" maxW="200px">"A game changer, it simplifying communication, fostering collaboration, and streamlining resource sharing, leading to a significantly enhanced learning experience"</Text>
                            <Text textAlign="center" color="yellow" marginBottom="10px">★★★★★</Text>
                            <Text textAlign="center" color="white" fontSize="14px">Tayquan Miles</Text>
                            <Text textAlign="center" color="white" fontSize="12px">Student</Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>


            <Box pb="100px" marginRight="60px" className='email-box'>
                <Text fontSize='40px' color='white' marginBottom="10px" marginTop="100px" textAllign="center" className='title-email-box'>
                    JOIN US!
                </Text>

                <Text fontSize='16px' color='grey' marginBottom="20px" textAlign="center">
                    Want to join our platform? By entering your email address below, you gain
                    access to an exclusive<br /> opportunity to manage and showcase your college courses.
                    Take advantage of our platform powerful<br /> features to organize, promote, and share
                    your educational journey with the world. <br />We can not wait to see what you bring to the table!
                </Text>


                <Flex alignItems="center" justifyContent="center">
                    <Input placeholder="Enter your Email Here" size="lg" style={{ background: 'white',height: '50px'}} />
                    <Button bg="#E66F7B" color="white" size="lg">Submit</Button>
                </Flex>
            </Box>
        
    </body >
  );
}

export default Home;
