import React, { useState, useEffect } from 'react';

interface StockData {
  symbol: string;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  timestamp: string;
}

export function StockTracker() {
  const [quantity, setQuantity] = useState(1);
  const [stockData, setStockData] = useState<StockData | null>(() => {
    const saved = localStorage.getItem('stockData');
    if (saved) {
      const { data, timestamp } = JSON.parse(saved);
      // Check if data is less than 5 minutes old
      if (Date.now() - timestamp < 5 * 60 * 1000) {
        return data;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(!stockData);
  const [error, setError] = useState('');

  useEffect(() => {
    const shouldFetchData = () => {
      const saved = localStorage.getItem('stockData');
      if (!saved) return true;
      
      const { timestamp } = JSON.parse(saved);
      // Return true if data is older than 5 minutes
      return Date.now() - timestamp >= 5 * 60 * 1000;
    };

    const fetchStockData = async () => {
      if (!shouldFetchData()) return;
      
      try {
        setLoading(true);
        // Get today's date
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        
        // Format date as YYYY-MM-DD
        const date = yesterday.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://api.polygon.io/v1/open-close/UBER/${date}?adjusted=true&apiKey=${import.meta.env.VITE_POLYGON_API_KEY}`
        );
        
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('API key is missing or invalid. Please check your environment configuration.');
          }
          throw new Error('Failed to fetch stock data');
        }
        
        const data = await response.json();
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data received from API');
        }
        
        const newStockData = {
          symbol: data.symbol || 'UBER',
          open: typeof data.open === 'number' ? data.open : 0,
          close: typeof data.close === 'number' ? data.close : 0,
          high: typeof data.high === 'number' ? data.high : 0,
          low: typeof data.low === 'number' ? data.low : 0,
          volume: typeof data.volume === 'number' ? data.volume : 0,
          timestamp: data.from || new Date().toISOString()
        };
        
        // Save to localStorage with timestamp
        localStorage.setItem('stockData', JSON.stringify({
          data: newStockData,
          timestamp: Date.now()
        }));
        
        setStockData(newStockData);
      } catch (err) {
        setError('Failed to fetch stock data. Please try again later.');
        console.error('Error fetching stock data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
    
    // Fetch data every 5 minutes
    const interval = setInterval(fetchStockData, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <main className="container">
        <div className="card stock-card">
          <div className="loading">Loading stock data... 📈</div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container">
        <div className="card stock-card">
          <div className="error">{error}</div>
        </div>
      </main>
    );
  }

  if (!stockData) {
    return (
      <main className="container">
        <div className="card stock-card">
          <div className="error">No stock data available</div>
        </div>
      </main>
    );
  }

  const formatPrice = (price: number) => {
    try {
      return (price * 1).toFixed(2);
    } catch {
      return '0.00';
    }
  };

  const formatVolume = (volume: number) => {
    try {
      return volume.toLocaleString();
    } catch {
      return '0';
    }
  };

  const formatDate = (timestamp: string) => {
    try {
      return new Date(timestamp).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Date not available';
    }
  };

  return (
    <main className="container">
      <div className="card stock-card">
        <h1>Your Stock Tracker</h1>
        <div className="stock-data">
          <div className="stock-header">
            <h2>{stockData.symbol}</h2>
            <div className="stock-date">
              {formatDate(stockData.timestamp)}
            </div>
          </div>
          
          <div className="stock-grid">
            <div className="stock-item">
              <span className="label">Quantity</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                style={{ 
                  width: '80px',
                  padding: '5px',
                  fontSize: '18px',
                  marginBottom: '10px'
                }}
              />
            </div>
            <div className="stock-item">
              <span className="label">Price Calculation</span>
              <span className="value" style={{ fontSize: '24px', color: '#ff69b4' }}>
                {quantity} x ${formatPrice(stockData.close)} = ${formatPrice(stockData.close * quantity)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
