import locationIcon from '../../assets/location-dot.svg'

import './HighlightCard2.css'

export default function HighlightCard2({ title, value, unit, footer }) {
    return (
        <div className="highlight-card2">
            <div className="header">
                <p className="title">{title}</p>
            </div>
            <div className="content">
                <div className="details">
                    <span className='value'>{value}</span><span className='unit'>{unit}</span>
                </div>
            </div>
            <div className="footer">
            {footer}
                {/* <div className='direction-icon'><img src={locationIcon} alt="direction" /> WSW</div> */}
                {/* <div className='text'><p>{footer}</p></div> */}
            </div>
        </div>
    )
}