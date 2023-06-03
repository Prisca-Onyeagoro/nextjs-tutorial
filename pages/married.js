import React from 'react';
import styles from '../styles/married.module.css';
import Footer from '../components/Footer';

const married = () => {
  return (
    <>
      <h2 className={styles.height}>yipeee i am married</h2>
    </>
  );
};

export default married;

married.getLayout = function pageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
