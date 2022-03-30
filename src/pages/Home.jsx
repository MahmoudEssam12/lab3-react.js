import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./css/Home.css";
function Home() {
  return (
    <header className="text-center d-flex flex-column justify-content-center px-3 home-header">
      <h1>Movies</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
        repellat quos, consequuntur officiis atque, autem provident sunt
        doloremque id voluptas modi ipsa vel laudantium quaerat quidem deleniti
        odio suscipit, aliquid repudiandae. Enim consectetur deleniti id
        pariatur deserunt ab excepturi animi magnam. Quaerat perspiciatis
        accusamus assumenda voluptate ratione. Labore, nam. Aspernatur!
      </p>
      <Link to="/movies">
        <Button variant="contained">Pick a Movie</Button>
      </Link>
    </header>
  );
}

export default Home;
