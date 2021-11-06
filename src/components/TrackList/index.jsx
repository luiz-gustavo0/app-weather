import React from 'react';
import {
  TrackListContainer,
  TrackListContent,
  TrackListHeading,
} from './styles';

export const TrackList = ({ tracks }) => {
  return (
    <>
      {tracks && (
        <TrackListHeading>Sugestões de musicas para você</TrackListHeading>
      )}
      <TrackListContainer>
        {tracks?.listOfMusic?.map((item) => (
          <TrackListContent key={item.track.key}>
            <img src={item.track.images.coverart} alt='Imagem' />
            <div>
              <span>{item.track.title}</span>
              <a href={item.track.url} target='_blank' rel='noreferrer'>
                {item.track.subtitle}
              </a>
            </div>
          </TrackListContent>
        ))}
      </TrackListContainer>
    </>
  );
};
