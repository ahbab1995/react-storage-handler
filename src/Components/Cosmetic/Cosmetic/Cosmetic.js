import React from 'react';
import  './Cosmetic.css';
import { addTodb, removeFormDB } from '../../../utilitie/storageDB'

const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic

    const addtoCard = (id) => {
        addTodb(id)
    }
    const removeData = (id) => {
        removeFormDB(id);
    }
    return (
        <div className='product'>
            <h2>Buy this: {name}</h2>
            <p>Only for: {price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={()=>addtoCard(id)}>Add to Card</button>
            <button onClick={() => {removeData(id)}}>Remove</button>
        </div>
    );
};

export default Cosmetic;