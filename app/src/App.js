import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchShiba } from "./actions/appActions";

import "./App.css";

function App(props) {
  const { fetchShiba } = props;
  const [url, setUrl] = useState(
    "https://dog.ceo/api/breed/shiba/images/random"
  );

  useEffect(() => {
    fetchShiba(url);
  }, [fetchShiba, url]);

  console.log(props);

  return (
    <div className="App">
      <h1>Gimme a Cute Shiba Inu! </h1>
      <img src={props.cuteShibaPic} alt="cutenesses" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cuteShibaPic: state.shiba,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchShiba })(App);
