import React from 'react';
import {createContext, useState, useContext} from 'react';

const FeedContext = createContext();
export default function FeedProvider({children}) {
  const [residenceName, setResidenceName] = useState('');
  const [price, setPrice] = useState(0);
  const [residenceType, setResidenceType] = useState('');
  const [residencePlace, setResidencePlace] = useState('');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [tv, setTV] = useState(false);
  const [ac, setAC] = useState(false);
  const [notebookWork, setNotebookWork] = useState(false);
  const [grill, setGrill] = useState(false);
  const [pool, setPool] = useState(false);
  const [parking, setParking] = useState(false);
  const [city, setCity] = useState(false);

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
