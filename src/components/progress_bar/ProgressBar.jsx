import "./ProgressBar.css"

export default function ProgressBar() {
    return (
        <div className="progress">
            <div className="barOverflow">
                <div className="bar"></div>
            </div>
            <span>10</span>
        </div>
    )
}