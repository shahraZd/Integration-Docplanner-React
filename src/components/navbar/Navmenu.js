import React from "react";

const Navmenu = (props) => {
  return (
    <ul>
      {props.menu.map(e => (
        <li>
          {e.title}
          {e.submenu && (
            <ul className="dropdown">
              {e.submenu.map(e => (
                <li>{e}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Navmenu;
