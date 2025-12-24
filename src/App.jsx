import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext"
import "./styles/pages/themes.css";
import router from "./routes/routes";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
