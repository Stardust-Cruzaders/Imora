import React from 'react';
import {createContext, useState, useContext} from 'react';

const FeedContext = createContext();
export default function FeedProvider({children}) {
  const [residenceName, setResidenceName] = useState('');
  const [price, setPrice] = useState(null);
  const [residenceType, setResidenceType] = useState(null);
  const [residencePlace, setResidencePlace] = useState(null);
  const [allowPets, setAllowPets] = useState(null);
  const [allowSmokers, setAllowSmokers] = useState(null);
  const [wifi, setWifi] = useState(null);
  const [kitchen, setKitchen] = useState(null);
  const [tv, setTV] = useState(null);
  const [ac, setAC] = useState(null);
  const [notebookWork, setNotebookWork] = useState(null);
  const [grill, setGrill] = useState(null);
  const [pool, setPool] = useState(null);
  const [parking, setParking] = useState(null);
  const [city, setCity] = useState(null);

  function Search() {}
  return (
    <FeedContext.Provider
      value={{
        residenceName,
        setResidenceName,
        price,
        setPrice,
        residenceType,
        setResidenceType,
        residencePlace,
        setResidencePlace,
        allowPets,
        setAllowPets,
        allowSmokers,
        setAllowSmokers,
        wifi,
        setWifi,
        kitchen,
        setKitchen,
        tv,
        setTV,
        ac,
        setAC,
        notebookWork,
        setNotebookWork,
        grill,
        setGrill,
        pool,
        setPool,
        parking,
        setParking,
        city,
        setCity,
      }}>
      {children}
    </FeedContext.Provider>
  );
}
export function useFeed() {
  const context = useContext(FeedContext);
  return context;
}
