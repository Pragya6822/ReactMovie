import { useState } from "react";

import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import EditMovie from "./components/EditMovie";
import NotAdmin from "./components/NotAdmin";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <div>
        <Link to="/">Movie list</Link>
        <Link to="/add">Add Movie</Link>
      </div>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/add" element={<AddMovie />} />
        <Route
          path="/edit/:id"
          element={
            <PrivateRoute>
              <EditMovie />
            </PrivateRoute>
          }
        />
        <Route path="/not-admin" element={<NotAdmin />} />
      </Routes>
    </>
  );
}

export default App;
