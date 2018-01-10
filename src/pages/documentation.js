import React from 'react';
import Link from 'gatsby-link';
import SyntaxHighlighter from 'react-syntax-highlighter';
import AtomLight from 'react-syntax-highlighter/styles/hljs/atom-one-light';

import style from './css/documentation.module.css';

const Documentation = () => (
  <div className={style.Documentation}>
    <h1>Documentation</h1>

    <div className={style.Reference}>
      <h4>Getting Started</h4>
      <p>p5ML.js is heavily inspired by <a href="https://processing.org/">Processing</a> and <a href="https://p5js.org/">p5.js</a> and therefore, is meant to make machine learning accessible to artists, designers, educators and beginners by providing a simple and intuitive interface to common ML capabilities.</p>
      <h5>Set-up</h5>
      <p>Save the following HTML file to your computer:</p>
      <SyntaxHighlighter
      language={'html'}
      style={AtomLight}
      lineStyle={{fontsize: '18px'}}
      >
      {
`<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Intro to p5ML.js</title>
  </head>
  <body>
    <script src="libraries/p5ML.min.js"></script>
    <script>
      // Your code will go here 
    </script>
  </body>
</html>
`}
      </SyntaxHighlighter>

    </div>

    <div className={style.Reference} id="ImageNet">
      <h4>Imagenet</h4>
        <p>You can use neural networks to recognize the content of images. Imagenet is a class to classify an image using a given model. For now, only the <a href="https://github.com/PAIR-code/deeplearnjs/tree/master/models/squeezenet">SqueezNet</a> model is available.
        </p>
        <p>Returns an array of objects containing categories and probabilities.</p>
      <h5>Constructor</h5>
      <code className={style.Code}>Imagenet(<span>model</span>)</code>
      <p className={style.CodeDescription}><span>model</span>- A valid deeplearn.js model for image recognition.</p>
      <h5>Properties</h5>
      <h5>Methods</h5>
      <h5>Static Methods</h5>
      <h5>Example</h5>
      <SyntaxHighlighter
      language={'javascript'}
      style={AtomLight}
      lineStyle={{fontsize: '18px'}}
      >
      {
`// Create the classifier
const classifier = new p5ML.Imagenet('SqueezNet');
// Make a prediction
let prediction = classifier.predict(img, function(result){
  console.log(result) 
});
`}
      </SyntaxHighlighter>
      <h5>Source</h5>
      
    </div>

    <h4>KNN Image Classifier</h4>
    <h4>LSTM</h4>
    <h4>Neural Network</h4>
    <h4>Word2Vec</h4>
    <h4>Yolo</h4>
  </div>
)

export default Documentation
