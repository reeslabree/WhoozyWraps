/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import { Link } from 'components/link';

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as ="h1" variant ="heroPrimary">
            Quality over Quantity.
          </Heading>
          <Text as ="p" variant="heroSecondary">
            At Whoozy's we can transform your car's apprerence with ease.
            <p>
              Book today and make your dreams come true!
            </p>
          </Text>
          <Link href="/">
            <Button variant="primary">
              <a>Gallery</a>
            </Button>
          </Link>
        </Box>

        <Box sx ={styles.banner.imageBox}>
          <Image src ={BannerImg} alt='banner' />
        </Box>
      </container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};
