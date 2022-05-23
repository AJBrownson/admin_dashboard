import styled from 'styled-components'


export const MainWrapper = styled.div`
// background: linear-gradient(106.37deg, #ffe1bc 29.63%, #ffcfd1 51.55%, #f3c6f1 90.85%);
background: #A770EF;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
margin: 0;
`;


export const GlassWrapper = styled.div`
display: grid;
height: 97%;
width: 97%;
background: rgba(255, 255, 255, 0.44);
border-radius: 1rem;
gap: 16px;
grid-template-columns: 11rem auto 20rem;
overflow: hidden;

@media screen and (max-width: 1200px) {
    grid-template-columns: 10% 50% auto;
    overflow-y: scroll;
  };

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  };
`;