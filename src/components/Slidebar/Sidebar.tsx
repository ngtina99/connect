import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/feel">How Do You Feel</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
