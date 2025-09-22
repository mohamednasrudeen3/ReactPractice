import image from "../components/location.png"
import "./travel.css"
export default function Entry(){
  return(
    <article className="journal-entry">
      <div className="main-image-container">
        <img className="main-image" 
        src="https://scrimba.com/links/travel-journal-japan-image-url" 
        alt="mount-fuji"/>
      </div>
      <div>
        <img className="marker" src={image} alt="marker-image"></img>
        <span className="country">Japan</span>
        <a className="link" href="https://www.google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,
        +Japan/data=!4m2!3m1!1s0x6019629a42fdc899:\
        0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=1t:242&ictx=111">View On Google Maps</a>
        <h2>Mount Fuji</h2>
        <p className="trip Dates"> 12 Jan 2026- 24 Jan 2026</p>
        <p>Mount Fuji, Japan’s tallest peak at 3,776 meters, is an active stratovolcano and
           a symbol of beauty, strength, and spirituality. Known for its near-perfect cone 
           shape, it attracts climbers, artists, and tourists worldwide. A UNESCO World Heritage site, 
           Fuji inspires Japanese culture, art, and tradition, representing harmony between nature and humanity.</p>
        <h1></h1>

      </div>
    </article>
  )
}