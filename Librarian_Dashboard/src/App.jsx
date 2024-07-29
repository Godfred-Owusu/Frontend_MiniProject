import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Books from "./components/Books";
import Students from "./components/Students";
import Borrows from "./components/Borrows";
import Report from "./components/Report";
import Calendar from "./components/Calendar";
import { ThemeContext } from "./components/context/ThemeContext";
import { MenuToggleContext } from "./components/context/MenuToggleContext";
import AddStudent from "./components/AddStudent";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
const App = () => {
  const [darkMood, setDarkMood] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <>
      <MenuToggleContext.Provider value={{ sidebarToggle, setSidebarToggle }}>
        <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
          <div className={`${darkMood && "dark"} overflow-x-hidden`}>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/books" element={<Books />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/add-book" element={<AddBook />} />
                  <Route path="/book/details/:id" element={<BookDetails />} />
                  <Route
                    path="/students/add-student"
                    element={<AddStudent />}
                  />
                  <Route path="/borrow" element={<Borrows />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </div>
        </ThemeContext.Provider>
      </MenuToggleContext.Provider>
    </>
  );
};

export default App;
