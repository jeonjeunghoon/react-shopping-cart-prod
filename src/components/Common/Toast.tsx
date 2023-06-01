import styled, { css } from 'styled-components';

import { useToast } from '../../hooks/useToast';

interface ToastStyleProps {
  variant: 'success' | 'error';
}

const Toast = () => {
  const toastInfo = useToast();

  if (toastInfo === null) return null;

  return <Container variant={toastInfo.variant}>{toastInfo.message}</Container>;
};

const toastStyle = {
  success: css`
    border: 3px solid green;
    color: green;
  `,
  error: css`
    border: 3px solid red;
    color: red;
  `,
};

const Container = styled.div<ToastStyleProps>`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 12px;

  height: 48px;
  width: 50%;

  margin: 0 auto;

  border-radius: 8px;
  ${({ variant }) => toastStyle[variant]}
  background-color: #ffffff;
  line-height: 48px;
  text-align: center;

  animation: 0.3s slideUp;

  @keyframes slideUp {
    from {
      bottom: -300px;
    }

    to {
      bottom: 12px;
    }
  }
`;

export default Toast;
