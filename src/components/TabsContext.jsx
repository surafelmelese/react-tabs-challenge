import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const [tabData, setTabData] = useState({});

  const updateTabData = (key, data) => {
    setTabData((prevData) => ({ ...prevData, [key]: data }));
  };

  return (
    <TabsContext.Provider value={{ tabData, updateTabData }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabsContext = () => useContext(TabsContext);
