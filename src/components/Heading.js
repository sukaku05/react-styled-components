import styled, { css } from "styled-components";

const levelStyles = {
  1: css`
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -1px;
    background: linear-gradient(90deg, #6c5ce7, #ff6b6b);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  2: css`
    font-size: 2.4rem;
    font-weight: 700;
    color: #2d3436;
    padding-bottom: 6px;
    border-bottom: 4px solid #6c5ce7;
    display: inline-block;
  `,
  3: css`
    font-size: 1.9rem;
    font-weight: 700;
    color: #6c5ce7;
  `,
  4: css`
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d3436;
    padding-left: 12px;
    border-left: 5px solid #ff6b6b;
  `,
  5: css`
    font-size: 1.2rem;
    font-weight: 600;
    color: #636e72;
    text-transform: uppercase;
    letter-spacing: 2px;
  `,
  6: css`
    font-size: 1rem;
    font-weight: 500;
    font-style: italic;
    color: #b2bec3;
  `,
};

const Heading = styled.h1.attrs((props) => ({
  as: `h${props.$level >= 1 && props.$level <= 6 ? props.$level : 1}`,
}))`
  margin: 0 0 12px;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif;
  line-height: 1.2;
  text-align: ${(props) => props.$align || "left"};
  transition: transform 0.2s ease, letter-spacing 0.2s ease;

  ${(props) => levelStyles[props.$level] || levelStyles[1]}

  &:hover {
    transform: translateX(6px);
  }
`;

export default Heading;
