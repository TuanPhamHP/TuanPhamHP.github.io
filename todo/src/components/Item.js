import React from 'react';
 
const Item = () => {
    return (
        <div className="item">
            <input className="item__input" type="text" readOnly />
            <button className="item__btn">Done</button>
            <button className="item__btn">Remove</button>
        </div>
    );
}
 
export default Item;
