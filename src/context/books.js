import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueToShare = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;

// import BooksContext, {Provider} from './a.dsf
// import BooksContext from './a.dsf
// import {Provider} from './a.dsf