'use client';

import Button from './components/Button';
import Jumbotron from './components/Jumbotron';

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
        children={<Button label="Our Projects" style={{ height: '50px' }} />}
      />
    </div>
  );
};

export default HomePage;
