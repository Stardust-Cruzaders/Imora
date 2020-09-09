/* eslint-disable prettier/prettier */
import React from 'react';
import {createContext, useState, useContext} from 'react';


const ResidenceAddContext = createContext();
export default function ResidenceAddProvider({children}){

  //Residence Main
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [numBathrooms, setNumBathrooms] = useState('');

  //Residence Type
  const [locationType, setLocationType] = useState('Espaço inteiro');
  const [checkedHouseType, setCheckedHouseType] = useState('Casa');
  const [description, setDescription] = useState('');

  //Residence Comforts
  const [hasWifi, setHasWifi] = useState(false);
  const [hasTV, setHasTV] = useState(false);
  const [hasAC, setHasAC] = useState(false);
  const [hasNotebookWork, setHasNotebookWork] = useState(false);
  const [hasKitchen, setHasKitchen] = useState(false);
  const [hasGrill, setHasGrill] = useState(false);

  const [hasPool, setHasPool] = useState(false);
  const [hasParkingLot, setHasParkingLot] = useState(false);

  //Residence Conditions
  const [maxResidentNum, setMaxResidentNum] = useState('1');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  const [genderPreference, setGenderPreference] = useState('Indiferente');

  //Residence Zipcode
  const [zipcode, setZipcode] = useState('');

  //ResidenceAddress
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [proximity, setProximity] = useState('');

  return (
    <ResidenceAddContext.Provider
      value={{
        title,setTitle,
        price,setPrice,
        numRooms, setNumRooms,
        numBathrooms,setNumBathrooms,
        locationType,setLocationType,
        checkedHouseType, setCheckedHouseType,
        description,setDescription,
        hasWifi, setHasWifi,
        hasTV, setHasTV,
        hasAC, setHasAC,
        hasNotebookWork, setHasNotebookWork,
        hasKitchen, setHasKitchen,
        hasGrill, setHasGrill,
        hasPool, setHasPool,
        hasParkingLot, setHasParkingLot,
        maxResidentNum, setMaxResidentNum,
        allowPets, setAllowPets,
        allowSmokers, setAllowSmokers,
        genderPreference, setGenderPreference,
        zipcode, setZipcode,
        street, setStreet,
        number, setNumber,
        neighborhood, setNeighborhood,
        city, setCity,
        state, setState,
        proximity, setProximity,
      }}>
      {children}
      </ResidenceAddContext.Provider>
  );
}
export function useResidenceAdd(){
  const context = useContext(ResidenceAddContext);
  return context;
}
