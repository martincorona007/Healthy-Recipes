import React from "react";
const contentHeader = () => {
  return {'Content-Type': 'application/json'}
}
const contentAndAuthToken = (token: string) => {
  return {'Content-Type': 'application/json', 'x-access-token':`${token}`}
}
export {contentHeader,contentAndAuthToken};