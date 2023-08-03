import { ApolloProvider } from "@apollo/client"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { client } from "./client.ts"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
