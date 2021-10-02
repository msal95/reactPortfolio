import React from "react";
import "./portfolioList.scss";

export const PortfolioList = (props) => {
  const { title, setSelected, id, active } = props;
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
