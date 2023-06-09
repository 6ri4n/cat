/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/catzen", async function (req, res) {
  // random cat images - https://api.thecatapi.com/v1/images/search
  // random cat fact - https://catfact.ninja/fact

  let catImage = await getRandomCatImage();
  while (catImage.includes("gif")) catImage = await getRandomCatImage();
  const catFact = await getRandomCatFact();
  while (catFact.length > 250) await getRandomCatFact();

  catImage && catFact
    ? res.status(200).json({ catImage, catFact })
    : res.status(500).json({ message: "Couldn't retrieve cat image or fact" });

  function getRandomCatImage() {
    return fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res[0].url;
      })
      .catch((err) => {
        return 0;
      });
  }

  function getRandomCatFact() {
    return fetch("https://catfact.ninja/fact")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        return res.fact;
      })
      .catch((err) => {
        return 0;
      });
  }
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
