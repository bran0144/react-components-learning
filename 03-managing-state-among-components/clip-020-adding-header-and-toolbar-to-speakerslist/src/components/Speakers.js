import SpeakersToolbar from "./SpeakersToolbar"
import SpeakersList from "./SpeakersList"
import { useState } from 'react';

const [showSessions, setShowSessions] = useState(true);

function Speakers( { theme, setTheme}) {
    return (
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme}
                showSessions={showSessions}
                setShowSessions={setShowSessions}
                />
            <SpeakersList showSessions={showSessions}/>
        </>
    )
}

export default Speakers;