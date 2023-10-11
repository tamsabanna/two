import React from 'react';
import {Carousel} from "react-responsive-carousel"; 
import { Box, Heading, Color, Image, AbsoluteCenter, Container, Stack, Text, } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions ={
    pos: 'absolute', 
    // m: 'auto',
    left: '50%',
    top: '50%',
    // right: '40%',
    // bottom: '45%',
    transform: 'tarnslate(-50%, -50%)',
    textTransform: 'uppercase',
    p:'4',
    size:'4xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container maxW={'container.xl'} minH={'100vh'} p={'16' } >
            <Heading textTransform={"uppercase"} py={'2' } w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>SERVICES</Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column', 'row']}>
                <Image src={img5} h={['40', '400']} filter={'hue-rotate(130deg)'}></Image>
                <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe voluptatum rerum beatae nihil rem eveniet consequuntur aperiam, maxime et ullam praesentium quam, aliquam ratione eos illo voluptas possimus perspiciatis tempore qui fugit in optio cum? Id magnam fugiat, similique sed inventore rem ex a at assumenda dolorum, dolore nulla hic cum ratione aspernatur. Explicabo saepe commodi eos optio, itaque alias dolores soluta illum voluptatem sit nisi modi doloribus quidem atque corporis cupiditate harum, eligendi temporibus incidunt. Voluptatum architecto minima neque porro ab distinctio expedita iure autem obcaecati tempore. Consequuntur, adipisci aspernatur, totam obcaecati numquam quia nemo deserunt dignissimos porro vero ipsum exercitationem. Quam officia sed consequuntur omnis eos recusandae illum suscipit earum quia ipsum adipisci expedita accusantium fugit maxime quas, debitis animi corporis provident commodi ex. Voluptatem atque nobis similique placeat ipsa autem! Voluptates ducimus magnam quia eligendi tempora dolorem, laudantium velit ab, aliquam impedit quidem perspiciatis hic possimus. Ullam cumque eveniet eum ipsam! Itaque corporis magnam dolor sapiente saepe. Molestias aliquam, nam necessitatibus quisquam aliquid rem explicabo ad. Iste fuga excepturi nemo at aperiam pariatur consequatur debitis placeat dolores quo voluptatum dicta sed harum quibusdam in, assumenda commodi enim delectus suscipit impedit numquam culpa dolore iure nostrum? Ratione, recusandae!</Text>
            </Stack>
        </Container>
    </Box>
  )
};

const MyCarousel =() => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} m={'auto'} {...headingOptions} >SEE OUR THE FUTURE</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading bgColor={'whiteAlpha.900'} color={'black'} m={'auto'} {...headingOptions} >GAMING IS FUTURE</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} m={'auto'} {...headingOptions} >GAMING ON CONSOLE</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading bgColor={'whiteAlpha.600'} color={'black'} m={'auto'} {...headingOptions} >NIGHT LIFE IS COOL</Heading>
        </Box>
    </Carousel>
)

export default Home