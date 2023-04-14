import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 5%;
  overflow: hidden;
  width: 100%;
  flex-grow: 1;

  @media (max-width: 720px) {
    padding: 0;
  }
`;

export default Container;
