import React from 'react';
import styles from './ToggleSwitch.module.css';

const toggleSwitch = props => {

    return (
        <label className={styles.Label}>
            <input type='checkbox' className={styles.CheckBox} onChange={props.toggled} />
            <span className={styles.Span} />
        </label>
    );
}

export default toggleSwitch;