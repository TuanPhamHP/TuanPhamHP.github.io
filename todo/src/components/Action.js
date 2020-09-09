import React, { useState, useRef } from 'react'; // jsx 

function Action({ handleAddItem }) {
    const [value, setValue] = useState("");
    const input = useRef();

    const handleAddValue = (event) => {
        event.preventDefault();
        handleAddItem(value);
        setValue("");
        input.current.focus();
    }
    
    return (
        <form className="action" onSubmit={handleAddValue}>
            <input 
                autoFocus
                ref={input}
                type="text"
                className="action__input"
                placeholder="Nhap text ... "
                value={value}
                onChange={event => {
                    setValue(event.target.value);
                }}
                
                required
            />
            <button type="submit" className="action__btn">Add</button>
        </form>
    );
}
export default Action;
