import styled, { css } from "styled-components";

const variants = {
  primary: css`
    color: #ffffff;
    background: linear-gradient(135deg, #6c5ce7, #a29bfe);
    box-shadow: 0 4px 14px rgba(108, 92, 231, 0.4);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #5b4bd5, #8f86f5);
      box-shadow: 0 6px 20px rgba(108, 92, 231, 0.55);
      transform: translateY(-2px);
    }
  `,
  secondary: css`
    color: #6c5ce7;
    background: transparent;
    border-color: #6c5ce7;

    &:hover:not(:disabled) {
      color: #ffffff;
      background: #6c5ce7;
      transform: translateY(-2px);
    }
  `,
  danger: css`
    color: #ffffff;
    background: linear-gradient(135deg, #ff6b6b, #ee5253);
    box-shadow: 0 4px 14px rgba(238, 82, 83, 0.4);

    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #ee5253, #d63031);
      box-shadow: 0 6px 20px rgba(238, 82, 83, 0.55);
      transform: translateY(-2px);
    }
  `,
};

const sizes = {
  small: css`
    padding: 6px 14px;
    font-size: 13px;
  `,
  medium: css`
    padding: 10px 24px;
    font-size: 16px;
  `,
  large: css`
    padding: 14px 34px;
    font-size: 19px;
  `,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid transparent;
  border-radius: ${(props) => (props.$pill ? "999px" : "10px")};
  font-family: inherit;
  font-weight: 600;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => sizes[props.$size] || sizes.medium}
  ${(props) => variants[props.$variant] || variants.primary}

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.97);
  }

  &:focus-visible {
    outline: 3px solid rgba(108, 92, 231, 0.4);
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default Button;
