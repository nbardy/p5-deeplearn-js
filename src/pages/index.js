import React from 'react'
import Link from 'gatsby-link'
import SyntaxHighlighter from 'react-syntax-highlighter';
import AtomLight from 'react-syntax-highlighter/styles/hljs/atom-one-light';

import styles from './css/about.module.css';

const Home = () => (
  <div className={styles.About}>
    <h1>p5ML<span>.js</span></h1>
    <h2 className={styles.Description}>p5ML is a high level javascript library for machine learning. The main idea of this project is to further reduce the barriers between lower level machine learning and creative outputs using javascript.</h2>
    <h3>    
      p5ML provides two main functionalities:
      <br/>
      <ul>
        <li> A wrapper around <a href="https://deeplearnjs.org/" target="_blank">deeplearn.js</a> providing a simpler interface, that makes it easier to work with GPU accelerated machine learning in javascript.</li>
        <li> Custom ML methods. </li>
      </ul>
    </h3>
    <h4>Usage</h4>
    <p>Download the library and import:</p>
    <SyntaxHighlighter
      language={'html'}
      style={AtomLight}
      lineStyle={{fontsize: '18px'}}
    >
      {"<script src='p5ML.min.js'></script>"}
    </SyntaxHighlighter>
    <p>If you use npm:</p>
    <SyntaxHighlighter
    language={'bash'}
    style={AtomLight}
    lineStyle={{fontsize: '18px'}}
    >
      {"npm install p5ML --save"}
    </SyntaxHighlighter>
    <p>Check the <Link to="/documentation/">documentation</Link>, <Link to="/examples/">examples</Link> and <Link to="/tutorials/">tutorials</Link></p>
    <h4 id="About">About</h4>
    <p>This project is currently being develop at <a href="http://itp.nyu.edu/" target="_blank">NYU ITP</a> by a community of teachers, residents and students. </p>
  </div>
)

export default Home
