import { useState } from 'react'
import styles from './counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={styles.root}>
      <div>{count}</div>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};