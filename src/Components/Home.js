import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Home">
      <div className="app">
        <div className="list-books">
          <Header />
          <div className="open-search">
            <Link to="/search">
              <button>+</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
