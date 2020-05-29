import React from 'react';
import {
  Navbar, Nav, Form, FormControl, Button, InputGroup
} from 'react-bootstrap';
import { FaPen, FaSearch  } from 'react-icons/fa';

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" id="header">
        <Navbar.Brand href="Home"><FaPen /></Navbar.Brand>
        <Nav className="mr-auto">
        </Nav>
        <Form inline>
          <InputGroup>
            <FormControl
              placeholder="Pesquisa"
              aria-label="Pesquisa"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
            <Button variant="secondary" className="btn-search"><FaSearch /></Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Navbar>
    </>
  );
}

