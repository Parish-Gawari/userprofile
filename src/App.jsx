import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PageRoute from "./routes/PageRoute";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <main>
        <ThemeProvider>
          <PageRoute />
        </ThemeProvider>
      </main>
    </>
  );
}

export default App;
