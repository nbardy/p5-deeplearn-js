---
title: "Example"
path: "/examples/simple-image-classification"
name: "Simple ImageNet"
---

Simple image classification example. Built with p5.js.

<iframe src="https://cvalenzuela.github.io/p5-deeplearn-js/examples/imagenet/" style="height:300px"></iframe>

## Code

```javascript
let imagenet;
let img;

function preload() {
  // Initialize the imageNet method with the Squeeznet model.
  imagenet = new p5ml.ImageNet('Squeezenet');
}

function setup() {
  img = createImg('images/kitten.jpg', imageReady);
  createCanvas(320, 240);
}

function imageReady() {
  img.attribute('width', 227);
  img.attribute('height', 227);
  img.hide();

  createCanvas(320, 240);
  background(0);
  image(img, 0, 0, width, height);

  // Get a prediction for that image
  imagenet.predict(img.elt, 10, gotResult);
}

// When we get the results
function gotResult(results) {
  // The results are in an array ordered by probability.
  select('#result').html(results[0].label);
  select('#probability').html(nf(results[0].probability, 0, 2));
}
```

## [Source]()

