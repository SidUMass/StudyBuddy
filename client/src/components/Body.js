import React from 'react';

import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";




function Body() {
  return (
    <body className="App-Body">
        {/* Logo and Name */}
        <Text fontSize ='58px' color='#e91e63'>
            Connect with<br /> other students <br />from your class!
        </Text>
        <Text fontSize ='20px' color='grey'>
            Click on the button to get started!
        </Text>

        {/* Login Button */}
        <div style={{ display: 'flex', gap: '10px' }}>
        <Button colorScheme="blue">Join a Study Group</Button>
        <Button colorScheme="blue"variant="outline">Learn More</Button>
        </div>
        <Text fontSize ='40px' color='white'>
            Featured Courses
        </Text>
        <Text fontSize ='20px' color='grey'>
            Some of our popular courses
        </Text>

    </body>
  );
}

export default Body;
