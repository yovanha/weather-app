import styled from "styled-components";

export const Root = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

export const Card = styled.div`
  padding: 2em;
`;

export const ReadTheDocs = styled.p`
  color: #888;
`;

export const Text = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
`

export const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`;

export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
`;

export const Phrase = styled.p`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 1em;
  color: #646cff;
`;
