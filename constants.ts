import { Product, Feature } from './types';
import { Sparkles, Zap, Feather } from 'lucide-react';
import React from 'react';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Midjourney Arch-Viz Prompts',
    price: 2499,
    image: 'https://picsum.photos/400/400?random=1',
    category: 'Prompts'
  },
  {
    id: 'p2',
    title: 'Stable Diffusion Texture Pack',
    price: 1899,
    image: 'https://picsum.photos/400/400?random=2',
    category: 'Assets'
  },
  {
    id: 'p3',
    title: 'ChatGPT Marketing Copy',
    price: 1299,
    image: 'https://picsum.photos/400/400?random=3',
    category: 'Templates'
  },
  {
    id: 'p4',
    title: 'Neon Cyberpunk UI Kit',
    price: 3500,
    image: 'https://picsum.photos/400/400?random=4',
    category: 'UI Kit'
  }
];

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