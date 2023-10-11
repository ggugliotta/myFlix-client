import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import { Container, Row } from "react-bootstrap";
import "./index.scss";
import { store } from "./redux/store";
import { Provider } from "react-redux";

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <MainView />
        </Row>
      </Container>
    </Provider>

  );
};

// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element
root.render(<MyFlixApplication />);