import React from "react";
export const setCookie = (name: string,content: string) => {
  return window.localStorage.setItem(name,content);
}
export const getCookie = (name: string) =>{
  
  return window.localStorage.getItem(name)
}
export const removeCookie = (name: string) => {
  return window.localStorage.removeItem(name)
}