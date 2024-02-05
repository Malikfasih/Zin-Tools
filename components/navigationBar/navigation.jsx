"use client";

import React, { useState } from "react";
import "./navigation.css";
import { navigationItems } from "@/constants/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="navigation">
      <div className="navigation__list">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredItem(item.title)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`navigation__list-item ${
              hoveredItem === item.title ? "hovered" : ""
            }`}
          >
            <span>{item.title}</span>
            {hoveredItem === item.title &&
              item.submenu &&
              item.submenu.length > 0 && (
                <div className="dropdown__menu">
                  <ul className="dropdown__menu-list">
                    {item.submenu.map((subitem, subindex) => (
                      <li key={subindex} className="dropdown__menu-list-item">
                        {typeof subitem === "object" ? (
                          <div className="subitem-link">
                            <span>{subitem.name}</span>
                            <FaLongArrowAltRight />
                          </div>
                        ) : (
                          <span>{subitem}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
