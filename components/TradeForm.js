// components/TradeForm.js
import React from 'react';
import { Button } from 'react-select'; // Update this line if using react-select or another library
import Select from 'react-select'; // Make sure to import from react-select or another library
import { Input, Label } from 'react-select'; // Update imports if necessary

const TradeForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="asset">Asset</Label>
        <Select
          id="asset"
          options={[
            { value: 'EURUSD', label: 'EUR/USD' },
            { value: 'GBPUSD', label: 'GBP/USD' },
            { value: 'USDJPY', label: 'USD/JPY' },
          ]}
        />
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Select
          id="type"
          options={[
            { value: 'buy', label: 'Buy' },
            { value: 'sell', label: 'Sell' },
          ]}
        />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input id="amount" type="number" placeholder="Enter amount" />
      </div>
      <Button type="submit">Place Trade</Button>
    </form>
  );
};

export default TradeForm;
