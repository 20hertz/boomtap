import * as React from 'react';
import Providers from './Providers';
import Sampler from './Sampler';
import SamplesLoader from './SamplesLoader';
import MidiConnector from './MidiConnector';

const App = () => (
  <>
    <h1 className="header">boomTap</h1>
    <Providers>
      <>
        <SamplesLoader />
        <Sampler />
        <MidiConnector />
      </>
    </Providers>
    <footer>
      <h4>Made with ♥️ by Lø</h4>
    </footer>
  </>
);

export default App;
