import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <h1>Welcome To Our BoB'G Inventory Business App</h1>
        <div className={styles.paragraph}>
          <p>
            Invoice App with MongoDB, Express, React & Nodejs
          </p>
        </div>
        <div className={styles.imgContainer}>
          <img
            src='https://res.cloudinary.com/almpo/image/upload/v1637241441/special/banner_izy4xm.png'
            alt='invoice-app'
          />
        </div>
      </section>
    </div>
  );
};

export default Home;