import React from 'react';

const Menu = ({ list }) => {
  return (
    <div className="menu-list__items" key={list.id}>
      <div className="items-img">
        <img src={list.img} alt={list.title} />
      </div>
      <div className="items-desc">
        <div className="items-desc__heading">
          <h2>{list.title}</h2>
          <div className="items-desc__price">
            {list.price}
          </div>
        </div>
        <p>I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed
        </p>
      </div>
    </div>


  );
};

export default Menu;
