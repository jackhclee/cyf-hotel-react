import React from "react";

const Footer = props => {
  return (
    <footer>
      <ul>
        {props.addressArray.map((part, idx) => (
          <li key={idx}>{part}</li>
        ))}
      </ul>
    </footer>
  );
};

export { Footer };
