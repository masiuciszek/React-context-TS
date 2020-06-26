import * as React from 'react';
import { useCountDispatch, useCountState } from '../context/CountContext';
interface Props {}

const Counter: React.FC<Props> = () => {
  const stateCount = useCountState();
  const dispatch = useCountDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  return (
    <div className='Counter'>
      <h1>
        Count is
        <p data-testid='countDisplay'>{stateCount?.count}</p>
      </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button
        disabled={stateCount?.count === 0}
        onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};
export default Counter;
