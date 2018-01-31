/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import { Box } from '../components/Layout';
import RandomPicker from '../components/RandomPicker';

export default ({ data }) => {
  const names = data.allNamesJson.edges.map(edge => edge.node.name);

  return (
    <div>
      <Box>
        <Box
          width={[1, 1, 1 / 2]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          align="center"
        >
          <h1>Gatsby Name Generator</h1>
          <RandomPicker names={names} />
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allNamesJson {
      edges {
        node {
          name
        }
      }
    }
  }
`;
