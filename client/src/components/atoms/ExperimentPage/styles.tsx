import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2em 0;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-height: 300px;
  overflow: hidden;

  div {
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, rgba(var(--color-gradient), 0) 0%, rgba(var(--color-gradient), 0.8) 100%);
    z-index: 3;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

export const Caption = styled.p`
  font-size: 1.2rem;
  color: var(--text-color-secondary);
  font-weight: 500;
  margin: 0 0 1em 0;
  padding: 0;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.25em 0 0em 0;
  padding: 0;
`;

export const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5em 0 0.5em 0;
  padding: 0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: disc;
`;

export const NumberedList = styled.ol`
  margin: 0;
  padding: 0.5em 0;
  list-style: decimal;
`;

export const ListItem = styled.li`
  padding: 0.5em 0;
  font-size: 1.2rem;
`;
