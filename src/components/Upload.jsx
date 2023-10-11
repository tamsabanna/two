import { Button, Center, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxWidth={'container.xl'} h={'100vh'} p={'16'}>
        <VStack color={'purple'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'5max'}/>
            <form> 
                <HStack>
                    <Input required type='file' css={{
                        "&::file-selector-button":{border:'none',
                        width:'calc(100% + 36px)',
                        height:'100%',
                        marginLeft:'-18px', color:'purple', backgroundColor:'white', cursor:'pointer'},
                }}
                />
                    <Button type='submit' colorScheme='purple' >Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
  )
}

export default Upload