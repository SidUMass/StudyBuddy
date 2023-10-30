'use client'

import { ReactNode } from 'react'
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
                <ListHeader>Get In Touch</ListHeader>
                <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
                </SocialButton>
                </Stack>
            </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Features</ListHeader>
            <Box as="a" href={'#'}>
              Business Marketing
            </Box>
            <Box as="a" href={'#'}>
              User Analytic
            </Box>
            <Box as="a" href={'#'}>
              Live Chat
            </Box>
            <Box as="a" href={'#'}>
              Unlimited Support
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Resources</ListHeader>
            <Box as="a" href={'#'}>
              Ios & Android App
            </Box>
            <Box as="a" href={'#'}>
              Watch a Demo
            </Box>
            <Box as="a" href={'#'}>
              Customers
            </Box>
            <Box as="a" href={'#'}>
              API
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box alignItems="center"justifyContent="center"display="flex">
        <Text color="gray">
            Made by CS320 Students copyright 2023
       </Text>
      </Box>
    </Box>
  )
}