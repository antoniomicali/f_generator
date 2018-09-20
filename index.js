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

restService.post("/audio", function(req, res) {
  var speech = "";
  switch (req.body.result.parameters.AudioSample.toLowerCase()) {
    case "music one":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">Sorry, I did not get the audio file</audio></speak>';
      break;
    case "music two":
      speech =
        '<speak><audio src="https://actions.google.com/sounds/v1/cartoon/slide_whistle.ogg">Sorry, I did not get the audio file</audio></speak>';
      break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "f-generator"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
