import React, { useState } from "react";
import AnimateCC from "react-adobe-animate";

const App = () => {
    const [paused, setPaused] = useState(false);
    const [, setAnimationObject] = useState(null);
    const getAnimationObject = obj => setAnimationObject(obj);
    const onClick = () => setPaused(!paused);

    return (
        <div style={{ width: "300px" }}>
            <AnimateCC
                animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                getAnimationObject={getAnimationObject}
                paused={paused}
            />

            <AnimateCC
                animationName="CR_11155_MINAJESTY_2014_US_DIGITAL_300x600_HTML5"
                composition="45A2D185DEBE4854A737F3CE82FD6355"
                paused={paused}
            />

            <button onClick={onClick}>{paused ? "Unpause" : "Pause"}</button>
        </div>
    );
};

export default App;
