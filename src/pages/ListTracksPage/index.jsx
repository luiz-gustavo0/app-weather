import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  ContentHeader,
  TrackListContainer,
  TrackListContent,
} from './styles';

import iconImg from '../../img/trash-o.svg';

export const ListTracksPage = () => {
  const [tracksList, setTracksList] = useState(null);

  useEffect(() => {
    const list = localStorage.getItem('tracksList');
    setTracksList(JSON.parse(list));
  }, []);

  const handleDeleteListTrack = (id) => {
    const filteredList = tracksList.filter((item) => item.id !== id);

    localStorage.setItem('tracksList', JSON.stringify(filteredList));
    setTracksList(filteredList);
  };

  return (
    <Container>
      <h2>Listas de Músicas</h2>
      {tracksList &&
        tracksList.map((item) => (
          <Content key={item.id}>
            <ContentHeader>
              <div>
                <p>{item.date}</p>
                <p>Cidade pesquisada: {item.city}</p>
              </div>
              <button onClick={() => handleDeleteListTrack(item.id)}>
                <img src={iconImg} alt='Icone Lixeira' />
              </button>
            </ContentHeader>

            <TrackListContainer>
              {item.listOfMusic?.map((music) => (
                <TrackListContent key={music.track.key}>
                  <img src={music.track.images.coverart} alt='Imagem' />
                  <div>
                    <a href={music.track.url} target='_blank' rel='noreferrer'>
                      {music.track.title}
                    </a>
                    <span>{music.track.subtitle}</span>
                  </div>
                </TrackListContent>
              ))}
            </TrackListContainer>
          </Content>
        ))}
    </Container>
  );
};
