import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react';
import { Box, Text, Button, Stack, Flex, Icon } from "@chakra-ui/react";
import {ReactComponent as Logo} from "../logo.svg";
import Home from '../pages/Home';
import Courses from '../pages/Courses';
import { isLoggedIn } from '../pages/Login';
import { FaUser } from 'react-icons/fa';


const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpened }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpened ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};


const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link to={to}>
      <Text display="block" color={"white"} {...rest}>
        {children}
      </Text>
    </Link>
  );
};


const MenuLinks = ({ isOpened }) => {
  const location = useLocation();
  const username = "John Doe";
  return (
    <Box display={{ base: isOpened ? "block" : "none", md: "block" }} 
    flexBasis={{ base: "100%", md: "auto" }}>
      <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/courses" ReactComponent={Courses}> Courses </MenuItem>
        <MenuItem to="/profile"> Profile </MenuItem>
        <MenuItem to="/signup" isLast>
          {isLoggedIn ? (
            <Flex alignItems="center">
              <Text color={"white"}>{username}</Text>
              <Icon as={FaUser} ml={2} color={"white"} />
              <Text ml={2} color={"white"}>Umass</Text>
            </Flex>
          ) : (
            <Button
              size="sm"
              rounded="lg"
              color={["primary.500", "primary.500", "white", "white"]}
              bg="#E66F7B"
              _hover={{
                bg: "#422023"
              }}
            >
              Login
            </Button>
          )}
        </MenuItem> 
        
      </Stack>
    </Box>
  );
};


function Header() {
  const [isOpened, setIsOpened] = useState(false);
  const toggle = () => setIsOpened(isOpened => !isOpened);
  return (
    <header className="App-header">
        <Logo />
        <MenuToggle toggle={toggle} isOpened={isOpened} />
        <MenuLinks isOpened={isOpened} />
    </header>
  );
}

export default Header;