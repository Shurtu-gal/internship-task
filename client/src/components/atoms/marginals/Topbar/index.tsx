import styled from 'styled-components';
import { ToggleModeIcon } from '../../shared';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5em 4em;
  width: 100%;
  background-color: blue;
`;

const Topbar = () => (
  <Container>
    <ToggleModeIcon />
  </Container>
);

export default Topbar;
