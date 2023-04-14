import { gql } from '@apollo/client';

const getExperimentById = gql`
  query GetExperimentById($id: ID!) {
    getExperimentById(id: $id) {
      id
      image
      title
      description
      difficulty
      subjectID
      categoryID
      materials {
        name
        quantity
      }
      steps {
        stepNumber
        image
        step
      }
      precautions
      subjects {
        id
        name
        description
      }
      categories {
        id
        name
        description
      }
    }
  }
`;

export default getExperimentById;
