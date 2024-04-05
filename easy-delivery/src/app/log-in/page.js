'use client';
import LogIn from './LogIn';
import styles from './page.module.css';

function Home() {
  return (
    <div className={styles.container}>
      {/* <RestaurantCard
        imageSrc="url_to_your_image.jpg"
        restaurantName="Your Restaurant Name"
        rating={4.5}
        price="$$"
      /> */}
      <LogIn />
    </div>
  );
}

export default Home;