import React from 'react';
import { Box, Container, Heading, Image, Text, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'3'}
          alignItems={'center'}
          justifyContent={'center'}
          display={'flex'}
          flexWrap={'wrap'}
          // direction={['column', 'row']}
        >
          <div className="">
            <Image
              src={img5}
              h={['40', '400']}
              filter={'hue-rotate(-130deg)'}
            />
          </div>

          <div className="">
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              quod praesentium modi doloribus similique distinctio neque
              recusandae repudiandae perspiciatis reprehenderit provident illum
              incidunt, sed fugiat minus asperiores doloremque laboriosam
              repellat tempore beatae nobis? Obcaecati cupiditate suscipit
              praesentium nesciunt ab animi placeat ad pariatur nemo magni
              expedita labore natus ut aperiam, libero culpa enim vero.
              Excepturi, quam dicta inventore non similique molestiae modi ad
              suscipit reprehenderit, temporibus fugiat earum laborum atque
              deleniti itaque corrupti sed maxime! Earum quis quibusdam quaerat
              laudantium facilis necessitatibus nobis eum eos odio enim,
              pariatur dolore cupiditate, laboriosam sapiente amet molestiae
              magni nulla quam iure explicabo molestias!
            </Text>
          </div>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    dynamicHeight={'20rem'}
  >
    <Box w={'full'}>
      <Image src={img1} height={'34rem'} />
      <Heading
        bgColor={'blackAlpha.600'}
        // height={'2rem'}
        fontSize={'2.6rem'}
        color={'white'}
        {...headingOptions}
      >
        Watch the Futute
      </Heading>
    </Box>
    <Box w={'full'}>
      <Image src={img2} height={'34rem'} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        {...headingOptions}
        fontSize={'2.6rem'}
      >
        Futute is gaming
      </Heading>
    </Box>
    <Box w={'full'}>
      <Image src={img3} height={'34rem'} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        {...headingOptions}
        fontSize={'2.6rem'}
      >
        Gaming on console
      </Heading>
    </Box>
    <Box w={'full'}>
      <Image src={img4} height={'34rem'} />
      <Heading
        bgColor={'blackAlpha.600'}
        color={'white'}
        {...headingOptions}
        fontSize={'2.6rem'}
      >
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
