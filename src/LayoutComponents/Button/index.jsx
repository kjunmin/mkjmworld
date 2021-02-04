import styled from 'styled-components';

const Button = styled.button`
    font-size: 6vw;
    font-weight: bold;
    color: ${props => props.primary ? "var(--button-primary)" : "var(--button-secondary)"};
    margin: 1em;
    padding: 0.25em 1em;
    background: ${props =>  props.primary ? "var(--button-secondary)" : "var(--button-primary)"}; 
    box-sizing: border-box;
    border: 1.8px solid ${props =>  props.primary ? "var(--button-primary)" : "var(--button-secondary)"};
    border-radius: 5px;
    transition: background 500ms ease-in-out, color 1000ms ease-in-out;
`

export default Button;