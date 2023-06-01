import "./App.css";
import React, { useState } from "react";

function App() {
  const [displayCatImage, setDisplayCatImage] = useState("");
  const [displayCatFact, setDisplayCatFact] = useState("");

  const generate = async () => {
    const response = await fetch(
      "https://y59hg4uhzc.execute-api.us-west-2.amazonaws.com/dev/catzen"
    );
    const { catImage, catFact } = await response.json();
    setDisplayCatImage(catImage);
    setDisplayCatFact(catFact);
  };

  return (
    <>
      <div class="container">
        <div class="grid-container">
          <div class="grid-item-1">
            <h1>CAT GENERATOR!!!</h1>
          </div>

          <div class="grid-item-2">
            <svg
              onClick={generate}
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="64.000000pt"
              height="64.000000pt"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M180 602 c-16 -17 -30 -38 -30 -47 0 -8 -20 -36 -45 -60 l-45 -44 2
                    -223 3 -223 249 -3 c182 -2 252 1 263 10 12 10 14 48 11 222 -3 228 -5 234
                    -61 271 -18 12 -34 33 -39 52 -13 50 -53 76 -108 69 -56 -7 -64 -7 -122 0 -43
                    5 -50 3 -78 -24z m108 -34 c7 -7 12 -21 12 -33 0 -28 -19 -45 -50 -45 -31 0
                    -50 17 -50 45 0 28 19 45 50 45 14 0 31 -5 38 -12z m140 0 c7 -7 12 -21 12
                    -33 0 -28 -19 -45 -50 -45 -31 0 -50 17 -50 45 0 28 19 45 50 45 14 0 31 -5
                    38 -12z m-235 -129 c30 -42 -16 -94 -62 -70 -23 13 -29 59 -9 79 19 19 55 14
                    71 -9z m325 9 c7 -7 12 -25 12 -40 0 -54 -79 -61 -93 -9 -11 44 50 80 81 49z
                    m-164 -34 c8 -3 20 -21 26 -39 8 -25 20 -37 46 -45 59 -20 61 -99 3 -119 -41
                    -14 -177 -14 -218 0 -58 20 -56 99 3 119 26 8 38 20 46 45 6 19 16 36 23 39
                    17 7 53 7 71 0z"
                />
              </g>
            </svg>
          </div>

          <div class="grid-item-3">
            <img src={displayCatImage ? displayCatImage : ""} />
          </div>

          <div class="grid-item-4">
            <p>{displayCatFact ? displayCatFact : ""}</p>
          </div>

          <div class="grid-item-5">
            <div>
              Images provided by{" "}
              <a href="https://thecatapi.com/" target="_blank">
                The Cat API
              </a>
            </div>
            <div>
              Facts provided by{" "}
              <a href="https://catfact.ninja/" target="_blank">
                Cat Fact Ninja
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
