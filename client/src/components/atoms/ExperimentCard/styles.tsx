import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  padding: 1.5em;
  font-weight: 500;
  border-radius: 10px;
  background-color: var(--background-secondary);
  gap: 1em;
  box-shadow: 0 0 6px 2px rgba(var(--color-secondary-gradient), 0.3),
    0 0 8px 3px rgba(var(--color-secondary-gradient), 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 3px rgba(var(--color-secondary-gradient), 0.3),
      0 0 10px 4px rgba(var(--color-secondary-gradient), 0.1);
    transform: scale(1.05);
  }
`;

export const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  width: 100%;
`;

export const Subjects = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5em;
  align-items: center;
`;

export const Subject = styled.button`
  font-size: 0.8em;
  filter: brightness(0.8);
  color: black;
`;
