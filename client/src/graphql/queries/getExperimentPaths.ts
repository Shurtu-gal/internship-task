import { gql } from '@apollo/client';

const getExperimentPaths = gql`
  query getExperimentPaths {
    getAllExperiments {
      id
      title
    }
  }
`;

export default getExperimentPaths;
