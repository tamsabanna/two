import React from 'react';
import {DrawerOverlay, Drawer, DrawerBody, DrawerHeader, DrawerContent, DrawerCloseButton, Button, useDisclosure, VStack, HStack,} from "@chakra-ui/react"
import {Link} from "react-router-dom"
import {BiMenuAltLeft} from "react-icons/bi"

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

  return <>
  <Button 
  zIndex={'overlay'}
  pos={'fixed'}
  top={4}
  left={4}
  colorScheme='purple'
  p={0}
  w={10}
  h={10}
  borderRadius={'full'}
  onClick={onOpen}
  >
    <BiMenuAltLeft size={20}/>
  </Button>

  <Drawer isOpen={isOpen} placement='left'  onClose={onClose}>
<DrawerOverlay />
<DrawerContent>
<DrawerCloseButton />
<DrawerHeader>
    MY TUBE
</DrawerHeader>
<DrawerBody>
    <VStack alignItems={'flex-start'}>
        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
            <Link to={"/"}>Home</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
            <Link to={"/videos"}>VIDEOS</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
            <Link to={"/videos?category=free"}>FREE VIDEOS</Link>
        </Button>
        <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
            <Link to={"/upload"}>UPLOAD VIDEO</Link>
        </Button>
    </VStack>
    <HStack pos={'absolute'} bottom={10} left={0} w={'full'} justifyContent={'space-evenly'}>
        <Button onClick={onClose} colorScheme='purple'>
            <Link to={'/login'}>LOG IN</Link>
        </Button>
        <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
            <Link to={'/singup'}>Sing Up</Link>
        </Button>
    </HStack>
</DrawerBody>
</DrawerContent>
  </Drawer>
  </>;
}

export default Header;