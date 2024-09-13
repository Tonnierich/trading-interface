// components/AccountSelector.js
import React from 'react';
import Select from 'react-select';

const AccountSelector = ({ accounts, selectedAccount, onChange }) => {
  const options = accounts.map(account => ({
    value: account.id,
    label: account.name,
  }));

  return (
    <Select
      options={options}
      value={options.find(option => option.value === selectedAccount)}
      onChange={option => onChange(option.value)}
    />
  );
};

export default AccountSelector;

