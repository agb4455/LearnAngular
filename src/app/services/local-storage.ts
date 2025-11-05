import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {

  setItem(key: string, value: any): void {
    localStorage.setItem(key,value);
  }
  
  getItem(key: string): String | null {
    const item = localStorage.getItem(key);
    return item;
  }
  
}
