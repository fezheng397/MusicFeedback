import React from 'react';
import { renderWithTheme } from 'utilities/tests';
import { Button } from '../';
import '@testing-library/jest-dom';

describe('Button Tests', () => {
  describe('general', () => {
    it('renders properly', () => {
      const { getByText } = renderWithTheme(<Button>Button</Button>);
      const buttonElement = getByText('Button');
      expect(buttonElement).toBeInTheDocument();
    });
  });
});
