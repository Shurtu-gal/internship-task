import Link from 'next/link';
import styled from 'styled-components';

interface ButtonStyleProps {
  backgroundColor?: string;
}

interface ButtonProps {
  backgroundColor?: string;
  link?: string;
  onClick?: () => void;
  text: string;
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || 'var(--background-secondary)'};
  color: #fff;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.7);
  }
`;

const Button = (props: ButtonProps) => {
  const { backgroundColor, link, onClick, text } = props;

  return (
    <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
      {link ? <Link href={link}>{text}</Link> : text}
    </ButtonWrapper>
  );
};

export default Button;
