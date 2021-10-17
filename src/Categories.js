import React from 'react';

const Categories = ({ receitoCategory }) => {
  function filterName(nametofilter) {
    receitoCategory(nametofilter)
  }
  return <div className="menu-heading">
    <h2>Our Menu</h2>
    <div className="button-group">
      <button className="btn btn btn-outline-warning" onClick={() => filterName("all")}>All</button>
      <button className="btn btn btn-outline-warning" onClick={() => filterName("breakfast")}>Breakfast</button>
      <button className="btn btn btn-outline-warning" onClick={() => filterName("lunch")}>Lunch</button>
      <button className="btn btn btn-outline-warning" onClick={() => filterName("shakes")}>Shakes</button>
    </div>

  </div>;
};

export default Categories;
