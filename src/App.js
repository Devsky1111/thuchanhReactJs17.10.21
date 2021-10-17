import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';

function App() {
  const [items, setItems] = useState(menu)

  let listmenu = items.map((item, index) => {
    return <Menu key={item.id} list={item}></Menu>

  })
  function filterName(nameRecei) {
    if (nameRecei === "all") {
      setItems(items)
    }
    console.log(nameRecei)
    console.log(items)
    console.log(menu)
    let listfilter = menu.filter((ele, index) => {
      return ele.category === nameRecei
    })
    console.log(listfilter)
    setItems(listfilter)
  }
  return (
    <div className="menu">
      <Categories receitoCategory={filterName}></Categories>
      <div className="menu-list">
        {listmenu}
      </div>
    </div>
  );
}

export default App;
