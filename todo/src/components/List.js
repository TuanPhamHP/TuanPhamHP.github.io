import React from 'react'; // jsx 
// import Item from './Item';

function List(props) {
    const { items, handleDelete, handleToggleDone, handleChange, handleEdit, handleSave } = props;
    return (
        <div className="List-tasks" >
            {
                items.map((item) => (
                    <div key={item.id} className={item.done ? "item done" : "item"}>
                        <input 
                            type="text" 
                            className="item__input"
                            readOnly={!item.edit}
                            onClick={() => handleEdit(item.id)}
                            onBlur={() => handleSave(item.id)}
                            value={item.description}
                            onChange={(event) => handleChange(item.id, event)}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    handleSave(item.id);
                                }
                            }}
                        />
                        <button className="item__btn" onClick={()=> handleToggleDone(item.id)}>{item.done ? "Re do" : "Done"}</button>
                        <button className="item__btn" onClick={() => handleDelete(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    );
}
export default List;