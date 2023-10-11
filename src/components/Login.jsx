import { Button, Container, Heading, Input, VStack, Text} from '@chakra-ui/react';
import React from 'react';
import { Form, Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={'96'} m={'auto'} my={'16'}
            >
                <Heading>Welcome Back</Heading>
                <Input placeholder={'Email'}
                type={'email'}
                required
                focusBorderColor={'purple'}/>
                <Input placeholder={'Password'}
                type={'password'}
                required
                focusBorderColor={'purple'}/>
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                    <Link to={'/forgetpassword'} >Forget password</Link>
                </Button>
                <Button colorScheme='purple' type='submit'>Login</Button>

                <Text textAlign={'right'}>New user? {' '}
                <Button variant={'link'} alignSelf={'flex-end'} colorScheme='purple'>
                <Link to={'/singup'}>Sign up</Link>
                </Button>
                </Text>
            </VStack>
        </form>
    </Container>
  )
}

export default Login;