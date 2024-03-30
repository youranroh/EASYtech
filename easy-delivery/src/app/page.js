import Image from "next/image";
import styles from "./page.module.css";
import RestaurantCard from "./components/RestaurantCard";


function Home() {
  return (
    <div className={styles.container}>
      <RestaurantCard
        imageSrc="url_to_your_image.jpg"
        restaurantName="Your Restaurant Name"
        rating={4.5}
        price="$$"
      />
    </div>
  );
}

export default Home;