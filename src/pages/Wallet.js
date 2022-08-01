import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

export default function Wallet() {
  return (
    <div>
      <Header />
      <WalletForm />
      <Table />
    </div>
  );
}
