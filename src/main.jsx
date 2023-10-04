import ReactDOM from "react-dom/client"
import "./index.scss"
import Routing from "./router/Routing.jsx"
import store from "./strore/store"
import { Provider } from "react-redux"
import Internet from "./components/intrnet/Internet"
import { ErrorBoundary } from "react-error-boundary"
import ErrorBoundryFallback from "./components/ErrorBoundry/ErrorBoundryFallback"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Internet>
      <ErrorBoundary FallbackComponent={ErrorBoundryFallback}>
        <Routing />
      </ErrorBoundary>
    </Internet>
  </Provider>
)
