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

  const [comforts, setComforts] = useState([
                    {id: 'Wifi', value: hasWifi, icon: 'wifi'},
                    {id: 'Televisão', value: hasTV, icon: 'youtube-tv'},
                    {
                      id: 'Ar-condicionado',
                      value: hasAC,
                      icon: 'weather-windy',
                    },
                    {
                      id: 'Lugar de trabalho adequado para notebook',
                      value: hasNotebookWork,
                      icon: 'laptop-windows',
                    },
                    {id: 'Cozinha', value: hasKitchen, icon: 'food-fork-drink'},
                    {id: 'Churrasqueira', value: hasGrill, icon: 'food-steak'},
                    {id: 'Piscina', value: hasPool, icon: 'pool'},
                    {
                      id: 'Estacionamento',
                      value: hasParkingLot,
                      icon: 'car-side',
                    },
  ]);
  //Residence Conditions
  const [maxResidentNum, setMaxResidentNum] = useState('1');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  const [conditions, setConditions] = useState([
    {id: 'Animais de estimação', valufeate: allowPets,  icon: 'pets'},
    {id: 'Fumar dentro da residência', value: allowSmokers,  icon: 'smoking-rooms'},
  ]);
  const [genderPreference, setGenderPreference] = useState('Indiferente');

  //Residence Zipcode
  const [zipcode, setZipcode] = useState('');

  //ResidenceAddress
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [locationTypeMessage, setLocationTypeMessage] = useState('');
  function checkIfEmpty(array){
    if (array.length < 1){
      return true;
    }
    else {
      return false;
    }
  }
  function CreateLocationTypeMessage(typeOfLocation){
    switch (typeOfLocation){
      case 'Espaço inteiro':
        return setLocationTypeMessage('Você terá o espaço todo só para você');
      case 'Quarto inteiro':
        return setLocationTypeMessage('Você terá um quarto seu, mas também dividirá o espaço com outras pessoas');
      case 'Quarto compartilhado':
        return setLocationTypeMessage('Você terá que compartilhar um dormitório, assim como o espaço com outras pessoas');
      default:
        setLocationTypeMessage('Sla kk');
        break;
    }
  }
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
        comforts,setComforts,
        conditions, setConditions,
        checkIfEmpty, CreateLocationTypeMessage,
        locationTypeMessage, setLocationTypeMessage,
      }}>
      {children}
      </ResidenceAddContext.Provider>
  );
}
export function useResidenceAdd(){
  const context = useContext(ResidenceAddContext);
  return context;
}
