import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.75em 2em;
  width: 100%;
  background-color: var(--background-secondary);
`;

export const Copyright = styled.p`
  font-size: 1em;
  color: var(--text-secondary);
`;

export const FooterIcons = styled.div`
  display: flex;
  gap: 1em;
`;
