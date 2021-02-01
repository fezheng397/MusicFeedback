import React from 'react';
import ReactModal from 'react-modal';
import styled, { css } from 'styled-components';
import { modalStyles } from './styles';
import { rem } from 'polished';
import './style.css';

import { Header } from './components';

type ModalProps = {
  active?: boolean;
  children?: React.ReactNode;
  fullscreen?: boolean;
  maxWidth?: string;
  onClose?: () => void;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({
  active,
  children,
  fullscreen = false,
  maxWidth = rem(400),
  onClose,
  title,
}) => {
  const styles = modalStyles(maxWidth, fullscreen);
  return (
    <ReactModal
      ariaHideApp={false}
      closeTimeoutMS={150}
      isOpen={active}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      style={styles}
    >
      <ModalWrapper>
        <Header onClose={onClose} title={title} />
        <ContentWrapper>{children}</ContentWrapper>
      </ModalWrapper>
    </ReactModal>
  );
};

const ModalWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    overflow: auto;
  `}
`;

const ContentWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.layout2};
`;

export default Modal;
