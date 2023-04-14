import Link from 'next/link';
import { Copyright, FooterIcons, FooterWrapper } from './styles';

const Footer = () => (
  <FooterWrapper>
    <Copyright>
      Copyright &copy; 2023 <Link href={'https://github.com/Shurtu-gal'}>Ashish Padhy</Link> - All rights reserved
    </Copyright>
    <FooterIcons></FooterIcons>
  </FooterWrapper>
);

export default Footer;
