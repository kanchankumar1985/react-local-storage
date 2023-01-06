import React , {useEffect, useState} from 'react'

function getSavedLocalStorageValue (key , initialValue) {
  const savedValue  = localStorage.getItem(key);
  if(savedValue){
    return savedValue;
  } else {
    if(initialValue instanceof Function) return initialValue();
    return initialValue;
  }
}
export default function useLocalStorage(key , initialValue) {
  const [storageText , setStorageText] = useState(()=> {
    console.log('<---------- useState inside useLocalStorage -------->' , initialValue);
    return getSavedLocalStorageValue(key , initialValue);
  });
  
  useEffect(() => {
    localStorage.setItem(key , storageText);
  } , [storageText]);

  return [storageText , setStorageText];
}
