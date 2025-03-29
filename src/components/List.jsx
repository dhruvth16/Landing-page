import React from "react";

function List({ text }) {
  return (
    <div>
      <ul className="flex items-center">
        <li className="flex items-center text-xl cursor-pointer hover:scale-[1.3] transition-all">
          {text}
        </li>
      </ul>
    </div>
  );
}

export default List;
