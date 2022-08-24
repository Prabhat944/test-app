import React, { useEffect} from 'react';
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux';
import {AddItem} from '../../redux/Action/action';
import ItemList from './ItemList';
import styles from './itemList.module.css';

const BottomSection=()=>{

    const items=useSelector(state=>state.items)
   const dispatch=useDispatch();
    const fetchData=async()=>{
        const response=await axios.get('https://t12a.trkd-hs.com/apimqmy/MarketDataJSON?type=ranking&qid=1649761269012')
        .catch(err=>console.log('ERROR',err))
        
        dispatch(AddItem(response.data.topstock))
     
        
    }
   useEffect(()=>{
    fetchData()
    // eslint-disable-next-line
   },[])
  
   const topStock=items.map(item=><ItemList key={item.TURNOVER} item={item}/>);
    return(
        <div className={styles.topContainer}>
            <div className={styles.container}>
           <div className={styles.warrentH}><h2>Warrant name</h2></div> 
          <div className={styles.warrentH}><h2>Underlying</h2></div>
          <div className={styles.warrentH}><h2>issuer</h2></div>
          <div className={styles.warrentH}><h2>Type</h2></div>
          <div className={styles.warrentH}><h2>Bid(MYR)</h2></div>
          <div className={styles.warrentH}><h2>Change(%)</h2></div>
          <div className={styles.warrentH}><h2>Volume(000)</h2></div>
        </div>
            {topStock}
        </div>
    )
}

export default BottomSection;