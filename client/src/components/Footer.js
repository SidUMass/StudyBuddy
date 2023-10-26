import { Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
function Footer() {
    return (
        <footer className="App-Footer">   
                    <Box pb="10px"bg="#FAFAFA"alignItems="center"justifyContent="center">

                        <Box marginLeft="50px"marginRight="50px"pb="20px"bg="white"alignItems="center"justifyContent="center">
                        <Flex justifyContent="space-between">
                        <Text ml="40px">
                            Get in Touch
                                
                        </Text>
                        <Text>
                            Company Info
                            
                        </Text>
                        <Text>
                            Features
                            
                        </Text>
                        <Text mr="40px">
                            Resources
                            
                        </Text>
                        </Flex>
                        </Box>
                    
                    
                            <Box alignItems="center"justifyContent="center"display="flex">
                                
                            <Text color="gray">
                            Made by CS320 Students copyright 2023
                            </Text>
                            </Box>
                    
                    </Box>

         </footer>
    );
  }
  
  export default Footer;
