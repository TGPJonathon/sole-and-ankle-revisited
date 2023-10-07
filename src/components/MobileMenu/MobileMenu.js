/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MyDialogOverlay>
      <MyDialogContent>
        <CloseButton onClick={onDismiss}>
          <Icon id={'close'} />
        </CloseButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </MyDialogContent>
    </MyDialogOverlay>
  );
};

const MyDialogOverlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100dvh;
  width: 100dvw;
  background: rgba(96, 100, 108, 0.8);
`;

const MyDialogContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: inherit;
  margin-left: 75px;
  justify-content: space-between;
  padding-left: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: relative;
  margin-left: auto;
  padding: 26px 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;

  ${NavLink}:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  gap: 16px;

  ${NavLink} {
    font-size: 0.875rem;
    color: var(--color-gray-700);
  }
`;

export default MobileMenu;
