"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  var speech =
    req.body.queryResult &&
    req.body.queryResult.parameters &&
    req.body.queryResult.parameters.echoText
      ? req.body.queryResult.parameters.echoText
      : "Seems like some problem. Speak again.";
  return res.json({
    fulfillmentText: speech,
    source: "f-generator"
  });
});

restService.post("/audio", function(req, res) {
  var rand_num = Math.floor(Math.random() * 2);
  var speech = "";
  switch (rand_num) {
    case 0:
      speech = '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/fart_toot.ogg"></audio></speak>';
      break;
    case 1:
      speech = '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/wet_fart.ogg"></audio></speak>';
      break;
  }
  return res.json({
    fulfillmentText: speech,
    source: "f-generator"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
