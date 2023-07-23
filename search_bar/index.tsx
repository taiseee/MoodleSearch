import React from 'react';
import { createRoot } from 'react-dom/client';
import { SearchBar } from './search_bar';

// idがrootの要素を追加
const rootElement = document.createElement('div');
rootElement.id = 'root';
const parentElement = document.querySelector('nav');
const refarenceElement = document.querySelector('nav ul');
parentElement?.insertBefore(rootElement, refarenceElement.nextSibling);
// document.querySelector('nav ul')?.prepend(rootElement);


const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<SearchBar />);
