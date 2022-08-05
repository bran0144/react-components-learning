import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from 'react';
import ReactPlaceHolder from 'react-placeholder';

function SpeakersList({ showSessions }) {
  const {
    speakerRecUpdated, isLoading,
    hasErrored, error,
    onFavoriteToggle,
  } = useRequestSpeakers(2000)

 if (hasErrored === true) {
  return (
    <div className="text-danger">
      ERROR: <b> loading Speaker Data failed {error}</b>
    </div>
  )
 }

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
      type="media"
      rows={15}
      className="speakerlist-placeholder"
      ready={isLoading === false}>
      <div className="row">
        {speakersData.map(function (speaker) {
          return <Speaker 
              key={speaker.id} 
              speaker={speaker}
              showSessions={showSessions} 
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id);
              }}/>;
        })}
      </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default SpeakersList;
