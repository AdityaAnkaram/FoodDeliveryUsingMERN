import React, { useEffect } from 'react';
import {useSelector,useDispatch,} from 'react-redux';
import { getRestaurant } from '../actions/restaurantAction';
import "./css/count.css";
const CountRestaurant = () => {
    const dispatch=useDispatch();
    const {count,pureVegRestaurantsCount, showVegOnly, loading, error}=
    useSelector((state)=>state.restaurants);

    useEffect(()=>{
        dispatch(getRestaurant());
    },[dispatch,showVegOnly]);

  return (
    <div>
      {loading? 
      (<p>Loading Restaurant Count....</p>):
      error?(<p>Error: {error}</p>):
      (<p className='NumOfRestro'>
        {showVegOnly ? pureVegRestaurantsCount:count}
        <span className='Restro'>
            {showVegOnly ? pureVegRestaurantsCount===1?" Restaurant":" restaurants":count===1?" restaurant":" restaurants"}
        </span>
        <hr />
      </p>)
    }
    </div>
  )
}

export default CountRestaurant
