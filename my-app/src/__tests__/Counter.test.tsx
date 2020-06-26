// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import '@testing-library/jest-dom';
import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import '@testing-library/jest-dom/extend-expect';
import {
  useCountDispatch,
  useCountState,
  CountProvider,
} from '../context/CountContext';

describe('<Counter />', () => {
  test('Counter', () => {
    const { getByText, getByLabelText, queryByText, getByTestId } = render(
      <CountProvider>
        <Counter />
      </CountProvider>,
    );
    expect(getByTestId('countDisplay').innerHTML).toBe('0');
    expect(getByTestId('countDisplay')).toBeInTheDocument();
    fireEvent.click(queryByText(/Increment/i));
    expect(getByTestId('countDisplay').innerHTML).toBe('1');
    fireEvent.click(queryByText(/Increment/i));
    expect(getByTestId('countDisplay').innerHTML).toBe('2');
    fireEvent.click(queryByText(/Reset/i));
    expect(getByTestId('countDisplay').innerHTML).toBe('0');
  });
});
