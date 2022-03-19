import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.addressArray.map((part, idx) => (
          <li key={idx}>{part}</li>
        ))}
      </ul>
      <div>
        Icon made from{" "}
        <a href="http://www.onlinewebfonts.com/icon">Icon Fonts</a> is licensed
        by CC BY 3.0
      </div>
    </footer>
  );
};

export { Footer };
