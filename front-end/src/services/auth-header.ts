import React from "react";
const contentHeader = () => {
  return {'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'}
}
const contentAndAuthToken = (token: string) => {
  return {'Content-Type': 'application/json', 'x-access-token':`${token}`,'Access-Control-Allow-Origin': '*'}
}
export {contentHeader,contentAndAuthToken};