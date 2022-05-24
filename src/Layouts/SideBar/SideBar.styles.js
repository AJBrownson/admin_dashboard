import styled from 'styled-components'
import { FaOpencart } from 'react-icons/fa'



export const SideWrapper = styled.div`
display: flex;
flex-direction: column;
position: relative;
padding-top: 1rem;
transition: all 300ms ease;
`;



export const Logo = styled.div`
color: black;
justify-self: flex-start;
text-decoration: none;
font-size: 2rem;
font-weight: 600;
display: flex;
// align-items: center;

& > span {
    color: #A770EF;
}
`;


export const LogoIcon = styled(FaOpencart)`
margin-right: 0.5rem;
`;


export const Menu = styled.div`
margin-top: 4rem;
display: flex;
flex-direction: column;
gap: 2rem;
`;


export const MenuItem = styled.div`
display: flex;
align-items: center;
gap: 1rem;
height: 2.5rem;
margin-left: 2rem;
position: relative;
transition: all 300ms ease;
border-radius: 0.7rem;
font-size: 14px;
`;