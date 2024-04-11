import "./HighlightCard.css"

import locationIcon from '../../assets/location-dot.svg'

export default function HighlightCard({ title, children, type }) {
    return (
        <div className="highlight-card">
            <div className="header">
                <p className="title">{title}</p>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}