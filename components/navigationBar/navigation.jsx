"use client";

// import React, { useState } from "react";
// import "./navigation.css";
// import { navigationItems } from "@/constants/navigation";

// const Navigation = () => {
//   const [hoveredItem, setHoveredItem] = useState(null);
//   return (
//     <nav className="navigation">
//       {/* <ul className="navigation__list">
//         {navigationItems.map((items) => (
//           <li key={items.title} className="navigation__list-item">
//             {items.title}
//           </li>
//         ))}
//       </ul> */}
//       <div className="navigation__list">
//         {navigationItems.map((item, index) => (
//           <div
//             key={index}
//             onMouseEnter={() => setHoveredItem(item.title)}
//             onMouseLeave={() => setHoveredItem(null)}
//             className="navigation__list-item"
//           >
//             <span>{item.title}</span>
//             {hoveredItem === item.title &&
//               item.submenu &&
//               item.submenu.length > 0 && (
//                 <div
//                   className="dropdown__menu"
//                   onMouseEnter={() => setHoveredItem(item.title)}
//                 >
//                   <ul className="dropdown__menu-list">
//                     {item.submenu.map((subitem, subindex) => (
//                       <li key={subindex} className="dropdown__menu-list-item">
//                         {typeof subitem === "object" ? (
//                           <div>
//                             <span>{subitem.name}</span>
//                             <span>{subitem.icon}</span>
//                           </div>
//                         ) : (
//                           <span>{subitem}</span>
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//           </div>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import "./navigation.css";
import { navigationItems } from "@/constants/navigation";
import { FaLongArrowAltRight } from "react-icons/fa";

const Navigation = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  //   const calculateColumns = (submenu) => {
  //     const maxItemsPerColumn = 6;
  //     const numberOfColumns = Math.ceil(submenu.length / maxItemsPerColumn);
  //     return `repeat(${numberOfColumns}, 1fr)`;
  //   };

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
                <div
                  className="dropdown__menu"
                  //   style={{
                  //     gridTemplateColumns: calculateColumns(item.submenu),
                  //   }}
                >
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
