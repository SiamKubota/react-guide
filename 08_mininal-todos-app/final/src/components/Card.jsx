import { Children } from "react";

export default function Card({ children, test }) {
  console.log("test: ", test);
  const subComponentList = Object.keys(Card);

  const subComponents = subComponentList.map((key) => {
    return Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <div className="card-default">
      {subComponents.map((component) => component)}
    </div>
  );
}

const Header = (props) => {
  console.log("[Header] props: ", props);
  return <div>{props.children}</div>;
};
Card.Header = Header;

const Body = (props) => <div>{props.children}</div>;
Card.Body = Body;

const Footer = (props) => <div>{props.children}</div>;
Card.Footer = Footer;
