import React, { useState, useContext, createContext } from "react";
import {
  Container,
  Inner,
  Item,
  Body,
  Frame,
  Title,
  Header,
} from "./accordion.styles";

const ToggleContext = createContext();
export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(true);
  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.ItemHeader = function AccordionHeader({ children, ...restProps }) {
  const { isShown, toggleIsShown } = useContext(ToggleContext);
  return (
    <Header onClick={() => toggleIsShown(!isShown)} {...restProps}>
      {children}
    </Header>
  );
};
Accordion.Body = function AccordionHeader({ children, ...restProps }) {
  const { isShown } = useContext(ToggleContext);
  return (
    <Body className={isShown ? "open" : "close"}>
      <span>{children}</span>
    </Body>
  );
};
