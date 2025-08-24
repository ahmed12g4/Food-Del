import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 data-aos="fade-up">Explore our menu</h1>
      <p className="explore-menu-text" data-aos="fade-up" data-aos-delay="200">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients and culinary expertise. Our your
        cravings, one delicious meal at a time.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
              data-aos="zoom-in" // أنيميشن للعنصر
              data-aos-delay={index * 100} // تأخير تدريجي لكل عنصر
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr data-aos="fade-up" />
    </div>
  );
};

export default ExploreMenu;
