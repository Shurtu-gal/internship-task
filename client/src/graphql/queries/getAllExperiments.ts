import { gql } from '@apollo/client';

const getAllExperiments = gql`
  query getAllExperiments {
    getAllExperiments {
      id
      title
      description
      difficulty
      image
      subjects {
        id
        name
        description
      }
    }
  }
`;

export default getAllExperiments;
