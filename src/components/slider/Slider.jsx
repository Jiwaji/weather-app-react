import './Slider.css'

export default function Slider() {
    return (
        <div className="slidecontainer">
            <input type="range" min="1" max="100" value="100" className="slider" id="myRange" readOnly/>
        </div>
    )
}