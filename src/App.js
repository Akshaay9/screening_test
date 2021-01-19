import "./App.css";
import pdf from "./pdf.pdf";
import React, { useState } from "react";

function App() {
  const [pdfState, setPdfState] = useState(false);
  const submitButtonHandler = () => {
    setPdfState(true)
  }
  return (
    <div className="App">
      <div className="form">
        <label htmlFor="Name">Enter your Name</label>
        <input type="text" />
        <label htmlFor="Name">Enter your Email</label>
        <input type="text" />
        <label htmlFor="Name">Enter your Address</label>
        <input type="text" />
        <label htmlFor="Name">Enter your GST</label>
        <input type="text" />
        <label htmlFor="Name">Enter your PAN Num</label>
        <input type="text" />
        <a
          href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          target="_blank"
        >
          <button onClick={() => submitButtonHandler()}>Press me</button>
        </a>
      </div>
      <div className="pdf">{pdfState ? <embed src={`${pdf}#page=1&zoom=50`} width="400" height="400"/> : ""}</div>
    </div>
  );
}

export default App;
