import { CounterTwoProps } from "./counter-two.types";

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <h2>Counter Two</h2>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};
