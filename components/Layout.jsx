import Image from 'next/image';
import styles from '../styles/Layout.module.css';
import Navbar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.smallImageContainer}>
        <Image src='/backgroundImage.jpg' layout='fill' objectFit={'cover'} />
      </div>
      <div className={styles.fullImageContainer}>
        <Image
          src='/backgroundImageFull.jpg'
          layout='fill'
          objectFit={'cover'}
        />
      </div>
      <div className={styles.backgroundFilter} />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
