import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {

  setItem(key: string, value: any): void {
    localStorage.setItem(key,value);
  }
  setTItem<T>(key: string, value: T): void {
    localStorage.setItem(key,JSON.stringify(value));
  }
  
  getItem(key: string): String | null {
    const item = localStorage.getItem(key);
    return item;
  }

  getTItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item) as T;
    }
    return null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  } 
  
}
