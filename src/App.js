import "./App.css";

import { getInfo } from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const informationApi = useSelector((state) => state.reducers.info);

  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);

  return (
    <div className="App">
      {informationApi?.map((e, i) => {
        return <div key={i}>{e.name}</div>;
      })}
    </div>
  );
}

export default App;
