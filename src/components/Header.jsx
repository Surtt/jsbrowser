import React from 'react';
import {
  Tab, Row, Col, Nav, Button,
} from 'react-bootstrap';
import { ArrowLeft, ArrowRight, ArrowClockwise } from 'react-bootstrap-icons';
import Search from './Search.jsx';

const Header = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">

    <Nav variant="tabs">
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="first">Tab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-dark" eventKey="second">Tab 2</Nav.Link>
      </Nav.Item>
      <Button variant="light">+</Button>
    </Nav>

    <Row>
      <Col sm={1} className="d-flex justify-content-between align-items-center">
        <ArrowLeft size={26} />
        <ArrowRight size={26} />
        <ArrowClockwise size={26} />
      </Col>
      <Col sm={11}>
        <Search />
      </Col>
    </Row>

    <Tab.Content className="min-vh-100">
      <Tab.Pane eventKey="first">
        1
      </Tab.Pane>
      <Tab.Pane eventKey="second">
        2
      </Tab.Pane>
    </Tab.Content>
  </Tab.Container>
);

export default Header;
