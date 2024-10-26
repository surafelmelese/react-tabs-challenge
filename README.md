
# React Tabs Challenge

[Live Demo](https://react-tabs-challenge-eta.vercel.app/)

## Overview
This project is a **React Tabs Component** challenge. The goal is to create a dynamic tab interface that fetches content from a REST API and implements caching for optimized performance. The project was built using `create-react-app` and styled with Material UI.

## Features
- **Dynamic Tab Content**: Content is fetched from the [Loripsum API](https://loripsum.net/) for each tab.
- **Caching with Local Storage**: The app caches tab data to improve performance and reduce redundant API calls.
- **State Management**: Implemented custom hooks and a React Context API for state management.

## Folder Structure
The main files are organized as follows:

```
src/
|-- components/
|   |-- Tabs.jsx          # Main Tabs component
|   |-- TabsContext.jsx   # Context provider for managing tab data
|   |-- useTabsData.jsx   # Custom hook for fetching and caching data
```

## Component Details

### Tabs.jsx
- Contains the UI for the tabs and manages the **active tab** state.
- Fetches data for the active tab using the `useTabsData` hook.
- Displays a loading spinner until the data is fetched and cached.

### TabsContext.jsx
- Provides a context to manage **tab data** and expose it to other components.
- Uses `updateTabData` to update data for each tab in the context.

### useTabsData.jsx
- Custom hook that fetches tab content based on the active tab.
- **Caching**: Checks for cached data in local storage before making an API call.
- **Error Handling**: Manages any errors during data fetching and parsing.

## Technologies Used
- **React** (via create-react-app)
- **Material UI** for styling
- **Local Storage** for caching
- **React Context API** for state management
- **Fetch API** for data retrieval

## Installation and Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-tabs-challenge.git
   cd react-tabs-challenge
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

Enjoy exploring the app and feel free to contribute!
