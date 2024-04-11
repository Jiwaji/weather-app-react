import weatherIcon from '../../assets/weather.svg';
import locationIcon from '../../assets/location-dot.svg';

import ProgressBar from '../progress_bar/ProgressBar';
import Slider from '../slider/Slider';
import HighlightCard from '../highlight_card/HighlightCard';
import HighlightCard2 from '../highlight_card/HighlightCard2';

export default function Hightlights() {
    return (
        <div className="highlights">
            <h5>Today Highlights</h5>
            <div className="highlights-cards">
                <HighlightCard title="UV Index">
                    <ProgressBar/>
                </HighlightCard>

                <HighlightCard2 title="Wind Speed" value={7.7} unit="km/h">
                </HighlightCard2>

                <HighlightCard title="Sunrise & Sunset">
                    <div className='sns'>
                        <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                        <div className='sns-time'>
                            <p>6:35 AM</p>
                            <p className='sns-diff'>-1m 46s</p>
                        </div>
                    </div>
                    <div className='sns'>
                        <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                        <div className='sns-time'>
                            <p>6:35 AM</p>
                            <p className='sns-diff'>-1m 46s</p>
                        </div>
                    </div>
                </HighlightCard>
                {/* <HighlightCard title="UV Index">
                    <ProgressBar />
                </HighlightCard>
                <HighlightCard2 title="Wind Speed" value={7.7} unit="km/h">
                </HighlightCard2>
                <HighlightCard title="Sunrise & Sunset">
                    <div className='sns'>
                        <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                        <div className='sns-time'>
                            <p>6:35 AM</p>
                            <p className='sns-diff'>-1m 46s</p>
                        </div>
                    </div>
                    <div className='sns'>
                        <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                        <div className='sns-time'>
                            <p>6:35 AM</p>
                            <p className='sns-diff'>-1m 46s</p>
                        </div>
                    </div>
                </HighlightCard>
                <HighlightCard2 title="Humidity" value="12" unit="%" footer="Normal &#128077;">
                </HighlightCard2> */}
                {/* <div className="highlight-card">
                    <p className="highlight-card-title">Wind Speed</p>
                    <div className="highlight-card-content wind">
                        <div className='wind-speed'>
                            <span className='wind-speed-value'>7.70</span><span className='wind-speed-unit'>km/h</span>
                        </div>
                        <div className='direction-icon'><img src={locationIcon} alt="direction" /> WSW</div>
                    </div>
                </div> */}
                {/* <div className="highlight-card">
                    <p className="highlight-card-title">Sunrise & Sunset</p>
                    <div className="highlight-card-content sns-highlight">
                        <div className='sns'>
                            <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                            <div className='sns-time'>
                                <p>6:35 AM</p>
                                <p className='sns-diff'>-1m 46s</p>
                            </div>
                        </div>
                        <div className='sns'>
                            <div className='sns-icon'><img src={weatherIcon} alt="sunrise" /></div>
                            <div className='sns-time'>
                                <p>6:35 AM</p>
                                <p className='sns-diff'>-1m 46s</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight-card">
                    <p className="highlight-card-title">Humidity</p>
                    <div className="highlight-card-content humidity">
                        <div className='hightlight-card-main'>
                            <div>
                                <span className='humidity-value'>12</span><span>%</span>
                            </div>
                            <div>
                                <Slider />
                            </div>
                        </div>
                        <div className='hightlight-card-footer'>Normal &#128077;</div>
                    </div>
                </div>
                <div className="highlight-card">
                    <p className="highlight-card-title">Visibility</p>
                    <div className="highlight-card-content visibility">
                        <div className='hightlight-card-main'>
                            <span className='visibility-value'>5.5</span><span>Km</span>
                        </div>
                        <div className='hightlight-card-footer'>Average &#128543;</div>
                    </div>
                </div>
                <div className="highlight-card">
                    <p className="highlight-card-title">Air Quality</p>
                    <div className="highlight-card-content air-quality">
                        <div className='hightlight-card-main'>
                            <div>
                                <span className='air-quality-value'>105</span>
                            </div>
                            <div>
                                <Slider />
                            </div>
                        </div>
                        <div className='hightlight-card-footer'>Average &#128078;</div>
                    </div>
                </div> */}
            </div>
        </div >
    )
}