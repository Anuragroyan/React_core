import React from 'react';
import LifecycleChildren from './Lifecycle_Method/LifecycleChildren';
// import EffectTutorial from './useEffect/EffectTutorial';
// import ReducerTutorial from './UseReducer/ReducerTutorial';
// import StateTutorial  from './UseState/StateTutorial';
// import StateTutorial2 from './UseState/StateTutorial2';
// import RefTutorial from './UseRef/RefTutorial';
// import LayoutEffectTutorial from './useLayoutEffect/LayoutEffectTutorial';
// import ImperativeHandle from './useImperative/ImperativeHandle';
// import ContextTutorial from './useContext/ContextTutorial';
// import MemoTutorial from './useMemo/MemoTutorial';
// import CallbackTutorial from './useCallback/CallbackTutorial';
// import UsersInfo from './state_props/usersInfo';
import LifecycleParent from './Lifecycle_Method/LifecycleParent';

const App = () => {
  const name = "anurag";
  const age = 25;
  return (
    <div className="App">
      <LifecycleParent/>
      {/* <UsersInfo name={name} age={age} /> */}
    </div>
  );
};

export default App;
