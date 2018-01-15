import React from 'react'
import Link from 'gatsby-link'

import styles from './../css/examples.module.css';

const Examples = () => (
  <div>
    <h1>Examples</h1>
    <p>A collection of simple examples built with p5ML.js</p>
    <ul>
      <li><Link to="/examples/simple-image-classification">Simple Image Classification</Link></li>
      <li><Link to="/examples/video-classification">Live Video Image Classification</Link></li>
      <li><Link to="/examples/knn-image-classification">KNN Image Classification</Link></li>
      <li><Link to="/examples/lstm-simple">LSTM Simple Text Generation</Link></li>
      <li><Link to="/examples/lstm-interactive">LSTM Interactive Text Generation</Link></li>
      <li><Link to="/examples/neural-network">Vanilla Neural Network</Link></li>
      <li><Link to="/examples/word2vec">Word2Vec</Link></li>
    </ul>
  </div>
)

export default Examples
