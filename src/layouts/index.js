import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './../css/global.css';
import styles from './../css/index.module.css';
import closeIcon from './../svg/closeIcon.svg';

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      showDocs: false
    }
  }

  showDocs = () => {
    const current = this.state.showDocs;
    this.setState({showDocs: !current});
  }

  render() {
    return (
      <div className={styles.Sidebar}>
        <Link className={styles.Title} to="/">
          <h4>p5ML.<span>js</span></h4>
          <p>A Javascript library for Machine Intelligence.</p>
        </Link>

        <div className={styles.Menu}>
          <ul>
            <li><Link to="/#about">About</Link></li>
            <br/>
            <li className={styles.Documentation}>
              <Link to="/docs/" onClick={this.showDocs}>Documentation</Link>
              {this.state.showDocs && <ul>
                <li><Link to="/docs/">Getting Started</Link></li>
                <li><Link to="/docs/imagenet">Imagenet</Link></li>
                <li><Link to="/docs/knnImage">KNN Image</Link></li>
                <li><Link to="/docs/lstm">LSTM</Link></li>
                <li><Link to="/docs/neuralNetwork">Neural Network</Link></li>
                <li><Link to="/docs/word2Vec">Word2Vec</Link></li>
                <li><Link to="/docs/yolo">Yolo</Link></li>
              </ul>}
            </li>
            <li><a href="https://github.com/ITPNYU/p5-deeplearn-js">Code</a></li>
            <br/>
            <li><Link to="/examples/">Examples</Link></li>
            <li><Link to="/experiments/">Experiments</Link></li>
            <br/>
            <li><a href="#">Training</a></li>
            <li><Link to="/learn/">Learn</Link></li>
            <li><Link to="/glossary/">Glossary</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

class DevelopMsg extends Component {
  constructor() {
    super();
    this.state = {
      show: true
    }
  }

  handleClick = () =>{
    this.setState({show: false})
  }

  render() {
    return (
      <div>
      {this.state.show  && <div className={styles.DevelopMsg}>
      <img src={closeIcon} className={styles.CloseIcon} alt="closeIcon" onClick={this.handleClick}/>This project is still in active in development.
      </div>}
      </div>
    )
  }

}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="p5ml"
      meta={[
        { name: 'description', content: 'p5ML is a high level javascript library for machine learning. The main idea of this project is to further reduce the barriers between lower level machine learning and creative outputs using javascript.' },
        { name: 'keywords', content: 'machine learning, javascript' },
      ]}
    />
    <Sidebar />
    <DevelopMsg />
    <div
      style={{
        display: 'inline-table',
        position: 'relative',
        left: '22rem',
        padding: '2em',
        maxWidth: '60vw'
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
