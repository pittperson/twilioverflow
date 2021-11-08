import React, { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { Container, Nav, Modal, Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Envelope } from "react-bootstrap-icons";
import "./Header.scss";

const Header = (props) => {
  // modal constants
  const [about, setAbout] = useState(false);
  const [search, setSearch] = useState(false);

  // search constant
  const [searchString, setSearchString] = useState("");

  // handle modals
  const closeAbout = () => setAbout(false);
  const openAbout = () => setAbout(true);
  const closeSearch = () => setSearch(false);
  const openSearch = () => setSearch(true);

  // handle search submit
  const handleSearch = (event) => {
    event.preventDefault();
    props.searchCallback(searchString);
    closeSearch();
  };

  return (
    <>
      <Navbar variant="dark" bg="danger" sticky="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/logo512.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
            Twilioverflow
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={openAbout}>About</Nav.Link>

            <Nav.Link href="mailto:twilioverflow@twilioverflow.com">
              Contact
            </Nav.Link>

            <Nav.Link onClick={openSearch}>Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={about} onHide={closeAbout}>
        <Modal.Header closeButton>
          <Modal.Title>About Twilioverflow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            New to Twilio, I was browsing stack
            <span style={{ fontWeight: "bold" }}>overflow</span> and me, being
            me, thought, "there has to be a quicker way to consume everything
            Twilio..." Enter Twilioverflow!
          </div>
          <br />
          <div>
            An aggregation of everything Twilio via stack
            <span style={{ fontWeight: "bold" }}>overflow</span>. Want to narrow
            things down? Just click on a tag below the title.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAbout}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={search} onHide={closeSearch}>
        <Modal.Header closeButton>
          <Modal.Title>Search Twilioverflow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <label>
                <input
                  type="text"
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
              </label>
              <input type="submit" value="Search" onClick={handleSearch} />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeSearch}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
