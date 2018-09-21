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
  var rand_num = Math.floor(Math.random() * 6);
  var languageCode = req.body.queryResult.languageCode;
  var speech = "";
  if (languageCode == "it") {
    switch (rand_num) {
      case 0:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_vulgaris.wav">Ecco una scoreggia</audio></speak>';
        break;
      case 1:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_salonis.wav">Ecco una scoreggia</audio></speak>';
        break;
      case 2:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_humidis.wav">Ecco una scoreggia</audio></speak>';
        break;
      case 3:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_matutinis.wav">Ecco una scoreggia</audio></speak>';
        break;
      case 4:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_alonata.wav">Ecco una scoreggia</audio></speak>';
        break;
      case 5:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_deflagrante.wav">Ecco una scoreggia</audio></speak>';
        break;
    }
  }
  else {
    switch (rand_num) {
      case 0:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_vulgaris.wav">Here is a fart</audio></speak>';
        break;
      case 1:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_salonis.wav">Here is a fart</audio></speak>';
        break;
      case 2:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_humidis.wav">Here is a fart</audio></speak>';
        break;
      case 3:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_matutinis.wav">Here is a fart</audio></speak>';
        break;
      case 4:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_alonata.wav">Here is a fart</audio></speak>';
        break;
      case 5:
        speech = '<speak><audio src="https://www.magnaromagna.it/wp-content/uploads/2007/05/scoreggia_deflagrante.wav">Here is a fart</audio></speak>';
        break;
    }
  }
  return res.json({
    fulfillmentText: speech,
    source: "f-generator"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
