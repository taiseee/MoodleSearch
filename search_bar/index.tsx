import React from 'react';
import { createRoot } from 'react-dom/client';
import { SearchBar } from './search_bar';

// idがrootの要素を追加
const rootElement = document.createElement('div');
rootElement.id = 'root';
const parentElement = document.querySelector('nav');
const refarenceElement = document.querySelector('nav ul');
parentElement?.insertBefore(rootElement, refarenceElement.nextSibling);


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<SearchBar />);
