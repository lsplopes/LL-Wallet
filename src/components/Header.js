import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { email } = useSelector((state) => state.user);
  return (
    <div>
      <span data-testid="total-field">0</span>
      <span data-testid="header-currency-field">BRL</span>
      <span data-testid="email-field">{email}</span>
    </div>
  );
}
