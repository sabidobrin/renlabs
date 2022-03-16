import { graphColumns, graphLine, horizontalDottedLine, horizontalSolidLine,
    iconCompare, iconFullscreen, verticalDottedLine, verticalSolidLine } from './svg';

export default function Challenge () {

    let items = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'].map((item) => <span className="item">{item}</span>);
    let timelines = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'].map((timeline) => <span className="timeline">{timeline}</span>);
    let lines = new Array(7).fill(0).map((line) => <img alt="line" src={verticalSolidLine} id="solid-line" />);

    function fetchPrice () {
        return (<>
            <span id="number">63,179.71</span>
            <span id="currency">USD</span>
            <span id="change">+ 2,161.42 (3.54%)</span>
        </>);
    }

    function drawGraph () {
        return (<>
            {lines}            
            <img alt="horizontal-dashed-line" src={horizontalDottedLine} id="horizontal-dashed-line" />            
            <img alt="graph-line" src={graphLine} id="graph-line" />
            <img alt="vertical-dashed-line" src={verticalDottedLine} id="vertical-dashed-line" />
            <img alt="graph-columns" src={graphColumns} id="graph-columns" />
            <img alt="horizontal-solid-line" src={horizontalSolidLine} id="horizontal-solid-line" />
            {/*<p id="fill" />*/}
            </>
        );
    }

    let fullscreenAction = (
        <span>
            <img alt="fullscreen-icon" src={iconFullscreen} id="fullscreen-icon" />
            <span id="fullscreen-text">Fullscreen</span>
        </span>
    );

    let compareAction = (
        <span>
            <img alt="compare-icon" src={iconCompare} id="compare-icon" />
            <span id="compare-text">Compare</span>
        </span>
    );

    let timelineAction = (
        <div id="timelines">
            {timelines}
            <p id="label-time" />
        </div>
    );
    
    return (
        <div id="desktop">
            <div id="price">{fetchPrice()}</div>
            <div id="menu">{items}</div>
            <div id="separator" />
            <div id="separator-item" />

            <div id="actions">{fullscreenAction}{compareAction}{timelineAction}</div>
            <div id="chart">{drawGraph()}</div>

            <p id="label-black"><span>64,850.35</span></p>
            <p id="label-violet"><span>63,179.71</span></p>
        </div>
    );
}