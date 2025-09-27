import image from "../components/location.png"
import "./travel.css"
export default function Entry(props){
  console.log(props)
  return(
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" 
        src={props.img.src} 
        alt={props.img.alt}
        />
      </div>
      <div>
        <img className="marker" src={image} alt="marker-image"></img>
        <span className="country">{props.country}</span>
        <a className="link" href={props.googleMapLink}>View On Google Maps</a>
        <h2>{props.title}</h2>
        <p className="trip Dates">{props.dates}</p>
        <p>{props.text}</p>
        <h1></h1>

      </div>
    </article>
  )
}