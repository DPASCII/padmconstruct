'use client';

import Button from '../components/button';
import Jumbotron from '../components/jumbotron';

const HomePage = () => {
  return (
    <div>
      <Jumbotron
        images={[
          '/assets/1.jpg',
          '/assets/2.jpg',
          '/assets/3.jpg',
          '/assets/4.jpg',
          '/assets/5.jpg',
          '/assets/6.jpg',
          '/assets/7.jpg',
          '/assets/8.jpg',
        ]}
        title="Build Better. Build with Confidence."
        subtitle={
          'We turn your vision into reality \non time, on budget, and built to last'
        }
        children={
          <a href="mailto:padmconstruct@gmail.com">
            <Button label="Contact Us Now" />
          </a>
        }
      />
    </div>
  );
};

export default HomePage;
