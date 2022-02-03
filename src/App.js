import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Home from "./pages/Home";
import History from "./pages/History";
function App() {
  return (
    <div >

<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">Kevin's Mesopotamia</Navbar.Brand>
    <Nav className="me-auto">
    <Nav.Link href="/history">History</Nav.Link>

      <Nav.Link href="/farming">Farming</Nav.Link>
      <Nav.Link href="/military">Military</Nav.Link>
      <Nav.Link href="/socialclass">Social Class</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>

       <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/history" element={<History/>} />

      </Routes>
    </div>
  );
}

export default App;
