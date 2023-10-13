import React from 'react';
import { createRoot } from 'react-dom/client';
import { SearchBar } from './search_bar';

// idがrootの要素を追加
const rootElement = document.createElement('div');
rootElement.id = 'root';
const parentElement = document.querySelector('nav.navbar');
const refarenceElement = document.querySelector('nav.navbar>ul');
parentElement?.insertBefore(rootElement, refarenceElement.nextSibling);


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<SearchBar />);

document.addEventListener('keyup', focus);

function focus(e) {
	if (e.key == '/') {
        document.getElementById('react-select-2-input').focus();
    }
	return false;
}
