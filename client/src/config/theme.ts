import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
  theme: {
    primaryBackGround: string;
    secondaryBackGround: string;
    gradient: string;
    secondaryGradient: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    tertiaryTextColor: string;
  };
}

export const lightTheme = {
  primaryBackGround: '#f7f7f7',
  secondaryBackGround: '#ffffff',
  gradient: '255, 255, 255',
  secondaryGradient: '0, 0, 0',
  primaryTextColor: '#242424',
  secondaryTextColor: '#868686',
  tertiaryTextColor: '#B6B6B6',
};

export const darkTheme = {
  primaryBackGround: '#000000',
  secondaryBackGround: '#181818',
  gradient: '0, 0, 0',
  secondaryGradient: '255, 255, 255',
  primaryTextColor: '#EDEDED',
  secondaryTextColor: '#C4C4C4',
  tertiaryTextColor: '#ffffff',
};

export const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  :root {
    --background-primary: ${({ theme }) => theme.primaryBackGround};
		--background-secondary: ${({ theme }) => theme.secondaryBackGround};
		--color-gradient: ${({ theme }) => theme.gradient};
		--color-secondary-gradient: ${({ theme }) => theme.secondaryGradient};
    --text-color-primary: ${({ theme }) => theme.primaryTextColor};
    --text-color-secondary: ${({ theme }) => theme.secondaryTextColor};
    --text-color-tertiary: ${({ theme }) => theme.tertiaryTextColor};
  }

  body {
  	background-color: var(--background-primary);
    color: var(--text-color-primary);
    font-family: var(--font-family);
		display: flex;
		flex-direction: column;
  }
`;
