import React, { useState, useEffect, useCallback } from 'react';
import './assets/style/main.scss';
import List from './components/List';
import Action from './components/Action';

// [
//   {
//     id: "1",
//     description: "Do 1",
//     done: false,
//   }
// ]

function genNewItem (description) {
  const id = Date.now() + Math.random(); // so tinh theo ms so voi thoi diem 0:00 1/1/1970
  return {
    id,
    description,
    done: false,
    edit: false
  }
}

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    let list = localStorage.getItem("list");
    if (list) {
      setList(JSON.parse(list));
    }
  }, [] /**dependencies: phu thuoc */);

  // const handleSaveIntoStorage = useCallback(() => {
  //   localStorage.setItem("list", JSON.stringify(list));
  // }, [list]); 

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);


  const handleAddItem = (description) => {
    const item = genNewItem(description);
    setList([...list, item]);
  }
  const handleDelete = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    console.log(newList);
    setList(newList); 
  }

  const handleChange = (id, event)=> {
    // tim thang co id la id
    const idx = list.findIndex((item) => {
      return item.id === id;
    });
    // sua done -> true
    const updatedItem = { ...list[idx] };
    updatedItem.description = event.target.value;
    // cap nhat list
    const updatedList = [...list];
    updatedList[idx] = updatedItem;
    setList(updatedList);
  }
  const handleToggleDone = (id) => {
    // tim thang co id la id
    const idx = list.findIndex((item) => {
      return item.id === id;
    });
    // sua done -> true
    const updatedItem = { ...list[idx] };
    updatedItem.done = !list[idx].done;
    // cap nhat list
    const updatedList = [...list];
    updatedList[idx] = updatedItem;
    setList(updatedList);
  }
  const handleEdit =(id)=>{
    const idx = list.findIndex((item)=>{
      return item.id === id;
    });
    const editItem = {...list[idx]};
    editItem.edit = true;
    const updatedList = [...list];
    updatedList[idx] = editItem;
    setList(updatedList);
  }
  const handleSave = (id) =>{
    const idx = list.findIndex((item)=>{
      return item.id === id;
    });
    const editItem = {...list[idx]};
    editItem.edit = false;
    const updatedList = [...list];
    updatedList[idx] = editItem;
    setList(updatedList);
  }
  // console.log(list);
  return (
    <div className="app">
      <Action handleAddItem={handleAddItem} />
      <div className="app__list">
        <List items ={list} 
          handleDelete={handleDelete} 
          handleToggleDone={handleToggleDone} 
          handleChange={handleChange} 
          handleEdit={handleEdit}
          handleSave={handleSave}
        />
      </div>
    </div>
  );
}

export default App;
