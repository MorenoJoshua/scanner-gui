import React, { Component } from "react";
import { render } from "react-dom";
import "./once.scss";
import Form from "./components/form";
interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div className="container py-2">
        <div className="row">
          <div className="col-12 text-white-50 h3">Controls</div>
          <div className="col-12">
            <div className="card mb-3">
              <div className="card-body d-flex flex-wrap justify-content-between">
                {[
                  "take all",
                  "tilt",
                  "rotate",
                  "take picture",
                  "do loop",
                  "tilt min",
                  "tilt max",
                  "1 rotation",
                  "1 tilt loop"
                ].map(d => (
                  <span className="p-1 w-50">
                    <button className="btn btn-primary form-control">
                      {d}
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 text-white-50 h3">Configuration</div>

          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
