import React from 'react';
import styles from './TopSection.module.css';

const TopSection=()=>{

    return (
        <div className={styles.container}>
        <div>
            <p>Shows the top traded warrants with the highest volume for the current day.</p>
        </div>
        <div className={styles.section}>
            <div className={styles.sectionItem1}>
                <span>Top 10 index</span>
                <span>warrants</span>
            </div>
            <div className={styles.sectionItem2}>
                <span>Top 10 stock</span>
                <span>warrants</span>
                </div>
        </div>
        </div>
    )
};

export default TopSection;