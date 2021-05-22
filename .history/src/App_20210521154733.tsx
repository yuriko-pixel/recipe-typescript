import React from 'react';
import RandomRecipe from './components/RandomReipe'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RandomRecipe/>
      </div>
      </QueryClientProvider>
  );
}

export default App;
