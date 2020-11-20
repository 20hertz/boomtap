import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';
import Controller from './Controller';
import { SamplesContext } from './SamplesLoader';

const App = () => {
  const { fetchIsInError, samples, samplesAreLoading } = useContext(
    SamplesContext
  );

  return (
    <>
      <h1 className="header">Tap dat</h1>
      {!!samples && !fetchIsInError && <Controller />}
      {samplesAreLoading && <div>Loading</div>}
      <button>Allow sounds</button>
      <h4>Made with ♥️ by Lø</h4>
    </>
  );
};

export default App;
