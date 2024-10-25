import React, { useState } from 'react';
import { useTabsData } from './useTabsData';
import { Tabs as MuiTabs, Tab, Box, CircularProgress, Typography, Paper } from '@mui/material';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];
const titles = ['Title 1', 'Title 2', 'Title 3', 'Title 4']; 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data, loading } = useTabsData(tabs[activeTab]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'black',
        minHeight: '100vh',
      }}
    >
      <Paper
        sx={{
          width: { xs: '100%', lg: '70%' },
          mx: 'auto',
          boxShadow: 3,
          bgcolor: 'background.paper',
        }}
      >
        <MuiTabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs"
          centered
          sx={{
            border: 'none',
            '& .MuiTab-root': {
              fontSize: { xs: '0.9rem', md: '1rem' },
              bgcolor: '#1f1f1c',
              color: 'white',
              border: 'none',
              '&:hover': {
                bgcolor: '#343536',
                color: '#fff',
              },
              '&.Mui-selected': {
                bgcolor: '#263d52',
              },
            },
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} sx={{ border: 'none' }} />
          ))}
        </MuiTabs>
        <Box
          sx={{
            padding: { xs: 3, sm: 4, md: 7, lg: 10 },
            marginTop: { xs: 2, sm: 4, md: 6, lg: 8 },
            textAlign: 'left',
          }}
        >
          <Typography variant="h6" sx={{ color: 'black', marginBottom: 2 }}>
            {titles[activeTab]}
          </Typography>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography variant="body1" sx={{ color: 'black' }}>{data || 'No data available'}</Typography>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default Tabs;