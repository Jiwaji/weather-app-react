import './Slider.css'

export default function Slider() {
    return (
        <div className="slidecontainer">
            <input
                type="range"
                min="1"
                max="100"
                value="50"
                className="slider"
                onChange={() => { }}
            />
        </div>
    )
}