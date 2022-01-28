import { Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import "normalize-css";
import "./index.css";
import Main from "./components/Main";
import LoginPage from "./components/LoginPage.js";
import PayElement from "./components/PayElement.js";
import PrivateRoute from "./hoc/PrivateRoute.js";

function App() {
  return (
    <>
      <Header />
      <Container>
        <main>
          <Row>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route
                exact
                path="/pays"
                element={
                  <PrivateRoute>
                    <Main />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path="/pays/:id"
                element={
                  <PrivateRoute>
                    <PayElement />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Row>
        </main>
      </Container>
    </>
  );
}

export default App;
