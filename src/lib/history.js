import { createBrowserHistory, createMemoryHistory } from 'history';

let historyObject = typeof window === 'undefined' ? createMemoryHistory() : createBrowserHistory();

export default historyObject;
