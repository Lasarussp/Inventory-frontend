import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <h1>Welcome to our BoB'G Inventory Business</h1>
        <div className={styles.paragraph}>
          <p>
            Invoicing app Build with MongoDB, Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src='https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png'
            alt='inventory-app'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;