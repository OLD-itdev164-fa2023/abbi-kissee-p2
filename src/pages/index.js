import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout';

const Homepage = () => {
  return (
    <Layout pageTitle='Accessibility Resources'>
      <div>
            <h2>Welcome to our Accessibility Resource Website</h2>
            <h3>Use the navigational link above to access out list of resource centers in the milwaukee area based on your disability. </h3>
        </div>
    </Layout>
  )
};

export default Homepage;