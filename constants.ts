import { Feature } from './types';
import { Sparkles, Zap, Feather } from 'lucide-react';
import React from 'react';

// PRODUCTS removed as we are using Shopify Buy Button integration

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: 'Rapid Ideation',
    description: 'Generate hundreds of concepts in seconds. Let AI handle the brainstorming while you curate the masterpiece.',
    icon: React.createElement(Zap, { className: "w-8 h-8 text-cyan-300" })
  },
  {
    id: 'f2',
    title: 'Texture Generation',
    description: 'Create seamless, ultra-high-resolution textures from simple text descriptions. No more searching stock sites.',
    icon: React.createElement(Sparkles, { className: "w-8 h-8 text-purple-300" })
  },
  {
    id: 'f3',
    title: 'Copywriting Assist',
    description: 'Craft compelling narratives and marketing copy that resonates with your visual language effortlessly.',
    icon: React.createElement(Feather, { className: "w-8 h-8 text-pink-300" })
  }
];