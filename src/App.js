import React from 'react';
import EffectTutorial from './useEffect/EffectTutorial';
import ReducerTutorial from './UseReducer/ReducerTutorial';
import StateTutorial  from './UseState/StateTutorial';
import StateTutorial2 from './UseState/StateTutorial2';
import RefTutorial from './UseRef/RefTutorial';
import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './useImperative/ImperativeHandle';
import ContextTutorial from './useContext/ContextTutorial';
import MemoTutorial from './useMemo/MemoTutorial';
import CallbackTutorial from './useCallback/CallbackTutorial';

const App = () => {
  return (
    <div className="App">
      <RefTutorial/>
    </div>
  );
};

export default App;
