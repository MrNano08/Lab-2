import { useCounter } from "../Hooks/useCounter";
import "./Counter.css";

export function Counter() {
  const { count, clickCounter, clickReducer, resetCounter } = useCounter();

  return (
    <div className="counter-container">
      <h2 className="counter-value">{count}</h2>

      <div className="button-container">
        <button onClick={clickCounter} className="counter-button">+</button>
        <button onClick={resetCounter} className="counter-button reset">Reset</button>
        <button onClick={clickReducer} className="counter-button">-</button>
      </div>

      {count === 8 && (
        <p className="favorite-number">Mi numero favorito es el {count}</p>
      )}
    </div>
  );
}
