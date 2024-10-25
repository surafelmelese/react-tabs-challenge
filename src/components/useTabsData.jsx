import { useState, useEffect } from 'react';
import { useTabsContext } from './TabsContext';

export const useTabsData = (tabId) => {
  console.log(`Fetching data for: ${tabId}`);
  const { tabData, updateTabData } = useTabsContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTabData = async () => {
      const cachedData = localStorage.getItem(`tabData_${tabId}`);
      if (cachedData) {
        try {
          const parsedData = JSON.parse(cachedData);
          updateTabData(tabId, parsedData.contents || parsedData);
        } catch (error) {
          console.warn(`Failed to parse cached data for ${tabId}:`, error);
          localStorage.removeItem(`tabData_${tabId}`);
          updateTabData(tabId, null);
        }
        return;
      }
      if (tabData[tabId] || loading) return;

      setLoading(true);

      try {
        const apiUrl = encodeURIComponent(`https://loripsum.net/api/1/short/plaintext?tab=${tabId}`);
        const response = await fetch(`https://api.allorigins.win/get?url=${apiUrl}`);

        if (!response.ok) throw new Error('Network response was not ok');

        const jsonResponse = await response.json();
        const { contents } = jsonResponse;
        updateTabData(tabId, contents);
        localStorage.setItem(`tabData_${tabId}`, JSON.stringify({ contents }));
      } catch (error) {
        console.error(`Error fetching tab data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    if (!tabData[tabId]) {
      fetchTabData();
    }
  }, [tabId, tabData, updateTabData, loading]);

  return { data: tabData[tabId], loading };
};
