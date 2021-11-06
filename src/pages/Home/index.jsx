import React, { useState } from 'react';
import { Input } from '../../components/Input';
import { InputRadio } from '../../components/InputRadio';
import { TrackList } from '../../components/TrackList';
import {
  getMusicRecommendations,
  getWeatherByCity,
  getWeatherByCoordinates,
} from '../../services/api';
import { musicalStyleSuggestion } from '../../utils';
import {
  ErrorWrapper,
  HomeButonGroup,
  HomeContainer,
  HomeInputGroup,
  HomeSelectLocation,
  HomeWeatherInfo,
  SelectLocationHeader,
} from './styles';

import iconImg from '../../img/cloud-sun.svg';

export const Home = () => {
  const [tracks, setTracks] = useState(null);
  const [location, setLocation] = useState('Cidade');
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    let result;

    try {
      if (location === 'Cidade') {
        setLoading(true);
        setError(null);
        result = await getWeatherByCity(city);
      } else {
        result = await getWeatherByCoordinates(
          Number(latitude),
          Number(longitude)
        );
      }
      if (result) {
        setLoading(false);
        const temperature = result.main.temp;
        const musicalStyle = musicalStyleSuggestion(temperature);
        const response = await getMusicRecommendations(musicalStyle);

        setTracks({
          id: new Date().getTime(),
          date: new Date().toLocaleDateString('pt-br'),
          listOfMusic: response?.tracks?.hits,
          temperature,
          musicalStyle,
          city: result.name,
        });
        setCity('');
        setLatitude('');
        setLongitude('');
      }
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const handleSaveTrackList = () => {
    const list = JSON.parse(localStorage.getItem('tracksList'));
    if (list) {
      const newList = [tracks, ...list];
      localStorage.setItem('tracksList', JSON.stringify(newList));
    } else {
      localStorage.setItem('tracksList', JSON.stringify([tracks]));
    }
    setTracks(null);
  };

  const handleNotSaveTrackList = () => {
    setTracks(null);
  };

  return (
    <HomeContainer>
      <HomeSelectLocation>
        <div>
          <SelectLocationHeader>
            <img src={iconImg} alt='Icone de uma nuvem' />
            <h5>Pesquisar Clima</h5>
          </SelectLocationHeader>
          <InputRadio
            options={['Cidade', 'Latitude e Longitude']}
            value={location}
            setValue={setLocation}
          />
        </div>
        <div>
          {location === 'Cidade' ? (
            <HomeInputGroup>
              <Input
                value={city}
                setValue={setCity}
                placeholder={'Digite o nome da cidade'}
              />

              <button disabled={loading} onClick={handleSearch}>
                Buscar
              </button>
            </HomeInputGroup>
          ) : (
            <HomeInputGroup>
              <Input
                value={latitude}
                setValue={setLatitude}
                placeholder='Latitude'
              />
              <Input
                value={longitude}
                setValue={setLongitude}
                placeholder='Longitude'
              />

              <button onClick={handleSearch}>Buscar</button>
            </HomeInputGroup>
          )}
        </div>

        {error && (
          <ErrorWrapper>
            <p>Erro: {error}</p>
          </ErrorWrapper>
        )}
      </HomeSelectLocation>

      <HomeWeatherInfo>
        {tracks?.temperature && <h2>{tracks?.temperature}&#176;C </h2>}
        <div>
          <h4>{tracks?.city}</h4>
          <p>{tracks?.date}</p>
        </div>
      </HomeWeatherInfo>

      <TrackList tracks={tracks} />

      {tracks && (
        <HomeButonGroup>
          <button onClick={handleNotSaveTrackList}>Cancelar</button>
          <button onClick={handleSaveTrackList}>Salvar</button>
        </HomeButonGroup>
      )}
    </HomeContainer>
  );
};
