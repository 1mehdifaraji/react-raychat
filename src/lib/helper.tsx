export const saveToLocalStorage = (itemName: string, value: string): void =>
  localStorage.setItem(itemName, value);

export const getFromLocalStorage = (itemName: string): LocalstorageItem =>
  localStorage.getItem(itemName);

export const clearLocalStorage = (): void => localStorage.clear();

export const getElemById = (elemId: string): Node | null =>
  document.getElementById(elemId);

export const removeElem = (element: Node): Node =>
  element.parentNode!.removeChild(element);

export const raychat = () => window.Raychat;

export const getDate = () => new Date().getFullYear();
