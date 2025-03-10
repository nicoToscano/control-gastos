import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'


ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
