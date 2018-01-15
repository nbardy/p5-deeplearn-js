import React from 'react'
import Link from 'gatsby-link'

const Glossary = () => (
  <div>
    <h1>Glossaries</h1>
    <ul>
      <li><Link to="/glossary/statistics">Statistics</Link></li>
      <li><Link to="/glossary/mathematics">Mathematics</Link></li>
      <li><Link to="/glossary/machine-learning">Machine Learning</Link></li>
    </ul>
  </div>
)

export default Glossary
