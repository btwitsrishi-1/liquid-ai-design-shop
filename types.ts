import React from 'react';

export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}