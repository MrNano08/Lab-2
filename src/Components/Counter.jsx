import { useCounter } from '../Hooks/useCounter';
export function Counter(){
    const {count, clickCounter, clickReducer} = useCounter();

    return(
        <div className="card">
        <p>{count}</p>
        <button onClick={clickCounter}>
          +
        </button>
        <button onClick={clickReducer}>
          -
        </button>
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    );


}