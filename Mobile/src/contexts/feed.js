import React from 'react';
import {createContext, useState, useContext} from 'react';
import api from '../services/api';

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
  const [residences, setResidences] = useState([]);
  const [favoriteResidences, setFavoriteResidences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState(false);

  const [isFavoriteOk, setFavoriteOk] = useState(false);

  //Profile User
  const [isEmailAvailable, setIsEmailAvailable] = useState(true);
  const [isLocationAvailable, setIsLocationAvailable] = useState(true);
  const [isPhoneAvailable, setIsPhoneAvailable] = useState(true);

  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [user_state, setUserState] = useState('');
  const [user_city, setUserCity] = useState('');

  function CheckIfIsEmpty(x) {
    if (x === '') {
      return null;
    } else {
      return x;
    }
  }
  async function Search() {
    const response = await api.get('/residences', {
      params: {
        price: CheckIfIsEmpty(price),
        residence_type: CheckIfIsEmpty(residenceType),
        residence_place: CheckIfIsEmpty(residencePlace),
        allow_pets: allowPets,
        allow_smokers: allowSmokers,
        wifi,
        kitchen,
        tv,
        ac,
        notebook_work: notebookWork,
        grill,
        pool,
        parking,
        city: CheckIfIsEmpty(city),
      },
    });
    if (response.data === undefined) {
      return response;
    } else {
      setFiltered(true);
      setLoading(false);
      setResidences(response.data);

      return response.data;
    }
  }
  function setCurrentUserData(user) {
    setBio(user.bio);
    setPhone(user.phone);
    setUserState(user.user_state);
    setUserCity(user.user_city);
  }
  function UpdateUserData(id) {
    const data = {
      bio,
      phone,
      user_state,
      user_city,
    };
    api
      .put(`/users/${id}`, data)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }

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
        Search,
        residences,
        setResidences,
        loading,
        setLoading,
        filtered,
        setFiltered,
        favoriteResidences,
        setFavoriteResidences,
        isFavoriteOk,
        setFavoriteOk,
        isEmailAvailable,
        setIsEmailAvailable,
        isLocationAvailable,
        setIsLocationAvailable,
        isPhoneAvailable,
        setIsPhoneAvailable,
        bio,
        setBio,
        phone,
        setPhone,
        user_state,
        setUserState,
        user_city,
        setUserCity,
        setCurrentUserData,
        UpdateUserData,
      }}>
      {children}
    </FeedContext.Provider>
  );
}
export function useFeed() {
  const context = useContext(FeedContext);
  return context;
}
