import React from 'react';
import styles from './itemList.module.css';

const ItemList=({item})=>{
   const {dsply_nmll,underlying_name,issuer_code,type,BID,percent_moneyness,delta_per_wrnt}=item;
    return(
        <ul className={styles.container}>
          <li className={styles.warrent}>{dsply_nmll}</li> 
          <li className={styles.warrent}>{underlying_name}</li>
          <li className={styles.warrent}>{issuer_code}</li>
          <li className={styles.warrent}>{type}</li>
          <li className={styles.warrent}>{BID}</li>
          <li className={styles.warrent}>{percent_moneyness}</li>
          <li className={styles.warrent}>{delta_per_wrnt}</li>
        </ul>
    )
}

export default ItemList;