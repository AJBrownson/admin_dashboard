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
font-weight: 700;
display: flex;

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
cursor: pointer;

&:hover {
    background: pink;
    margin-left: 0;
}

&::before {
    content: "";
    width: 8px;
    height: 100%;
    background: pink;
    margin-right: calc(1rem - 8px);
}

&:last-child {
    position: absolute;
    bottom: 2.3rem;
    width: 100%;
}
`;