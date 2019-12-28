import React, { useCallback, useMemo, useState } from 'react';
import MemoHookThings from './MemoHookThings';
import Counter from './Counter'
const getThings = (byId, ids) => ids.map(id => byId[id]);

const MemoHook = () => {
  const [value, setValue] = useState(0);
  const [byId, setById] = useState({});
  const [ids, setIds] = useState([]);
  const handleIncrementClick = useCallback(() => {
    setValue(prev => prev + 1);
  }, []);
  const handleAddClick = useCallback(() => {
    const id = Date.now().toString();
    const thing = {
      id,
      title: 'A Title',
    };
    setById(prevById => {
      return { ...prevById, [id]: thing };
    });
    setIds(prevIds => {
      return [...prevIds, id];
    });
  }, []);
  const things = useMemo(() => getThings(byId, ids), [byId, ids]);

  return (
    <div className="row">
        <div className="col">
        <h2>Memo Hook</h2>
        <div>{value}</div>
        <div>
             <button className="button muted-button" onClick={handleIncrementClick}>Increment</button>
        </div>
        <div>
             <button className="button muted-button" onClick={handleAddClick}>Add</button>
        </div>
            <MemoHookThings things={things} />
        </div>
        <div className="col">
             <h2>Memo Counter Hook</h2>
			<Counter />
		</div>
     </div>
  );
}

export default MemoHook;