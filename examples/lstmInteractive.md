---
title: "Example"
path: "/examples/lstm-interactive"
name: "LSTM Interactive Example"
---

Interactive text generation with LSTM. Built with p5.js.

<iframe src="https://cvalenzuela.github.io/p5-deeplearn-js/examples/lstm_interactive/" style="height:350px"></iframe>

## Code

```javascript
let textInput;
let tempSlider;
let lengthSlider;
let lstm;

function setup() {
  noCanvas();

  // Grab the DOM elements
  textInput = select('#textInput');
  lengthSlider = select('#lenSlider');
  tempSlider = select('#tempSlider');

  // Run generate anytime something changes
  textInput.input(generate);
  lengthSlider.input(generate);
  tempSlider.input(generate);

  // Create the LSTM Generator
  // Point it to a directory of model files
  lstm = new p5ml.LSTMGenerator('models/hemingway/');
}

function generate() {

  // Update the length and temperature span elements
  select('#length').html(lengthSlider.value());
  select('#temperature').html(tempSlider.value());

  // Grab the original text
  let original = textInput.value();
  // Make it to lower case
  let txt = original.toLowerCase();

  // Check if there's something
  if (txt.length > 0) {
    // Here is the data for the LSTM generator
    let data = {
      seed: txt,
      temperature: tempSlider.value(),
      length: lengthSlider.value()
    };

    // Generate text with the lstm
    lstm.generate(data, gotData);

    // Update the DOM elements with typed and generated text
    function gotData(result) {
      select('#original').html(original);
      select('#prediction').html(result.generated);
    }
  } else {
    // Clear everything
    select('#original').html('');
    select('#prediction').html('');
  }
}
```

## [Source]()

