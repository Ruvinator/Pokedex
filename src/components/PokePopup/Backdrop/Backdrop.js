import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = props => <div className={styles.Backdrop} onClick={props.backdropClicked} />

export default backdrop;