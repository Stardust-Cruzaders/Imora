import React from 'react';
import {createContext, useState, useContext} from 'react';
import cep from 'cep-promise';
import api from '../services/api';
const ResidenceAddContext = createContext();
export default function ResidenceAddProvider({children}) {
  //Residence Main
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [numRooms, setNumRooms] = useState('');
  const [numBathrooms, setNumBathrooms] = useState('');
  const [resourcePath, setResourcePath] = useState([]);

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
  const [maxResidentNum, setMaxResidentNum] = useState('');
  const [currentResidents, setCurrentResidents] = useState('0');
  const [allowPets, setAllowPets] = useState(false);
  const [allowSmokers, setAllowSmokers] = useState(false);

  const [conditions, setConditions] = useState([
    {id: 'Animais de estimação', valufeate: allowPets, icon: 'pets'},
    {
      id: 'Fumar dentro da residência',
      value: allowSmokers,
      icon: 'smoking-rooms',
    },
  ]);

  //Residence Zipcode
  const [zipcode, setZipcode] = useState('');
  const [loading, setLoading] = useState(false);
  const [addressFound, setAddressFound] = useState(false);
  //ResidenceAddress
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');
  const [locationTypeMessage, setLocationTypeMessage] = useState('');

  function HandleResidenceAdd(user_id) {
    const data = {
      residence_name: title,
      description: description,
      images: [
        'https://i.pinimg.com/564x/34/43/2f/34432f8d15ad73f2fb289195327b2ad4.jpg',
        'https://i.pinimg.com/564x/8b/09/43/8b0943a51a748b59e3f1aacffeb266dc.jpg',
        'https://i.pinimg.com/564x/eb/23/16/eb2316a4c199cb12436f6b9f440a2330.jpg',
        'https://i.pinimg.com/564x/ea/bf/e8/eabfe8dae949003e8ae55cf965899e76.jpg',
        'https://i.pinimg.com/564x/e0/33/17/e033172ea1e2726d95ece2a3e85e230d.jpg',
      ],
      available: true,
      zipcode: zipcode,
      state: state,
      city: city,
      neighborhood: neighborhood,
      street: street,
      numberr: number,
      complement: complement,
      residence_type: locationType,
      residence_place: checkedHouseType,
      price: price,
      allow_smokers: allowSmokers,
      allow_pets: allowPets,
      wifi: hasWifi,
      kitchen: hasKitchen,
      tv: hasTV,
      ac: hasAC,
      notebook_work: hasNotebookWork,
      grill: hasGrill,
      pool: hasPool,
      parking: hasParkingLot,
      num_rooms: numRooms,
      num_bathrooms: numBathrooms,
      current_residents: currentResidents,
      max_residents: maxResidentNum,
    };
    api
      .post(`/residences/${user_id}`, {
        data,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function checkIfEmpty(array) {
    if (array.length < 1) {
      return true;
    } else {
      return false;
    }
  }
  function CreateLocationTypeMessage(typeOfLocation) {
    switch (typeOfLocation) {
      case 'Espaço inteiro':
        return setLocationTypeMessage('Você terá o espaço todo só para você');
      case 'Quarto inteiro':
        return setLocationTypeMessage(
          'Você terá um quarto seu, mas também dividirá o espaço com outras pessoas',
        );
      case 'Quarto compartilhado':
        return setLocationTypeMessage(
          'Você terá que compartilhar um dormitório, assim como o espaço com outras pessoas',
        );
      default:
        setLocationTypeMessage('Sla kk');
        break;
    }
  }
  // eslint-disable-next-line no-shadow
  function GetAddress(zipcode) {
    setLoading(true);
    cep(zipcode)
      .then(function (result) {
        setLoading(false);
        setAddressFound(true);
        setState(result.state);
        setCity(result.city);
        setNeighborhood(result.neighborhood);
        setStreet(result.street);
      })
      .catch(function (err) {
        setAddressFound(false);
        setLoading(false);
        return err;
      });
  }
  return (
    <ResidenceAddContext.Provider
      value={{
        title,
        setTitle,
        price,
        setPrice,
        numRooms,
        setNumRooms,
        numBathrooms,
        setNumBathrooms,
        resourcePath,
        setResourcePath,
        locationType,
        setLocationType,
        checkedHouseType,
        setCheckedHouseType,
        description,
        setDescription,
        hasWifi,
        setHasWifi,
        hasTV,
        setHasTV,
        hasAC,
        setHasAC,
        hasNotebookWork,
        setHasNotebookWork,
        hasKitchen,
        setHasKitchen,
        hasGrill,
        setHasGrill,
        hasPool,
        setHasPool,
        hasParkingLot,
        setHasParkingLot,
        maxResidentNum,
        setMaxResidentNum,
        currentResidents,
        setCurrentResidents,
        allowPets,
        setAllowPets,
        allowSmokers,
        setAllowSmokers,
        zipcode,
        setZipcode,
        loading,
        addressFound,
        street,
        setStreet,
        number,
        setNumber,
        neighborhood,
        setNeighborhood,
        city,
        setCity,
        state,
        setState,
        comforts,
        setComforts,
        conditions,
        setConditions,
        checkIfEmpty,
        CreateLocationTypeMessage,
        locationTypeMessage,
        setLocationTypeMessage,
        GetAddress,
        complement,
        setComplement,
        HandleResidenceAdd,
      }}>
      {children}
    </ResidenceAddContext.Provider>
  );
}
export function useResidenceAdd() {
  const context = useContext(ResidenceAddContext);
  return context;
}
