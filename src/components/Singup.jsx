import React from 'react'
import { Button, Container, Heading, Input, VStack, Text, Avatar} from '@chakra-ui/react';
import { Form, Link } from 'react-router-dom';

const Singup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={'96'} m={'auto'} my={'16'}
            >
                <Heading>Welcome To Video Hub</Heading>
                <Avatar boxSize={'32'} alignSelf={'center'}></Avatar>
                <Input placeholder={'Name'}
                type={'text'}
                required
                focusBorderColor={'purple'}/>
                <Input placeholder={'Email'}
                type={'email'}
                required
                focusBorderColor={'purple'}/>
                <Input placeholder={'Password'}
                type={'password'}
                required
                focusBorderColor={'purple'}/>
                {/* <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                    <Link to={'/forgetpassword'} >Forget password</Link>
                </Button> */}
                <Button colorScheme='purple' type='submit'>Register</Button>

                <Text textAlign={'right'}>Already Have account? {' '}
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                <Link to={'/login'}>Login</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Singup