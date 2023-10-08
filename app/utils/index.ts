import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function priceBgColorString(price: number) {
  switch(price){
    case 1:
      return `bg-amber-300`
    case 2:
      return `bg-rose-300`
    case 3:
      return `bg-violet-300`
    
    case 5:
      return `bg-orange-300`
    
    case 10:
      return `bg-green-300`
    
    case 20:
      return `bg-yellow-300`

    case 25:
      return `bg-red-300`
    
    case 30: 
      return `bg-lime-300`
    
    case 50: 
       return `bg-fuchsia-300`
  }
}