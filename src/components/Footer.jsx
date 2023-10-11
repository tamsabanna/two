import { Box, Button, Center, HStack, Heading, Input, Stack, VStack, Text, } from '@chakra-ui/react'
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiNoEntry } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={['center', 'left']} >Subscribe to get updates</Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} focusBorderColor={'none'} outline={'none'}></Input>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'}></AiOutlineSend>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none', '1px solid white']} borderRight={['none', '1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>my tube</Heading>
                <Text>All rights are reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>social media</Heading>
                <Button variant={'link'} colorScheme='purple'>
                    <a href='https://instagram.com/tamsa_banna'>Instagram</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a href='https://github.com/tamsabanna'>Github</a>
                </Button>
                <Button variant={'link'} colorScheme='purple'>
                    <a href='https://linkdin.com/tamsabanna'>LinkdIn</a>
                </Button>
            </VStack>
        </Stack>
    </Box>
  )
}

export default Footer