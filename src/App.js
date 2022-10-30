import React from "react";

import "./index.css";

export default function App() {
  return (
    <div className="all">
      <div className="container">
        <form className="search">
          <div className="d-flex justify-content-between">
            <input
              type="search"
              className="form-control  m-3"
              placeholder="Search a city..."
              autofocus="on"
              autocomplete="off"
            />
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary w-50 m-3"
            />
          </div>
        </form>
        <div className="row details">
          <h1>New York</h1>
          <small>
            Last updated:
            <br />
            <span></span>
          </small>
          <div className="col-6">
            <div className="d-flex">
              <img src="" alt="weather" />
              <div>
                <p> </p>
                <span>
                  <button className="active">°C</button>|
                  <button href="#">°F</button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>
              Humidity: <span></span>%
            </p>
            <p>
              Wind: <span></span> m/s
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="forecast"></div>
      <div>
        <p className="gitHub">
          <a href="https://github.com/Vikocc/weather">Open-sourced on GitHub</a>{" "}
          made by Vikki with ❤
        </p>
      </div>
    </div>
  );
}
