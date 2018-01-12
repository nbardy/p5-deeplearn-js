---
path: "/docs/imagenet"
name: "Imagenet"
---

You can use neural networks to recognize the content of images. Imagenet is a class to classify an image using a given model. For now, only the [SqueezeNet](https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet) model is available.

### Example

```javascript
// Create the classifier
const classifier = new p5ML.Imagenet('SqueezeNet');
// Make a prediction
let prediction = classifier.predict(img, function(result){
  console.log(result) 
});
```

## Constructor
  ```javascript
  Imagenet(model)
  ```
  > `model` - A String value for a valid deeplearn.js model for image recognition. Only the [SqueezeNet](https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet) model is available.


## Properties

  ```javascript
  .model
  ```
  > The name of the model used.

  ```javascript
  .ready
  ```
  > Boolean value that specifies if the model has loaded.

  ```javascript
  .math
  ```
  > The environment Math element.

  ```javascript
  .squeezeNet
  ```
  > The [original SqueezNet model](https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet) from deeplearn.js 

## Methods

  ```javascript
  .predict(image, callback)
  ```
  > Given an image, returns an array of objects containing categories and probabilities.

  > `image` -  An image element containing valid pixels.

  > `callback` - A function to run once the model has made the prediction.

## Static Methods

  ```javascript
  loadModel(model)
  ```
  > Loads a deeplearn.js model.

## Source

[/src/ImageNet/index.js](https://github.com/cvalenzuela/p5-deeplearn-js/blob/master/src/ImageNet/index.js)