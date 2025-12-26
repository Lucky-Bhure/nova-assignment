import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AppLayout from "./layout/AppLayout";
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return (
    <>
      <Header />
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
      <Footer/>
    </>
  );
}

export default App;
