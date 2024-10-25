import React from 'react';
import Tabs from './components/Tabs';
import { TabsProvider } from './components/TabsContext';

function App() {
  return (
    <TabsProvider>
      <div className="App">
        <Tabs />
      </div>
    </TabsProvider>
  );
}

export default App;
