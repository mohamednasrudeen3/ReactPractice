import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./components/data"
export default function App(){

  const entryElements = data.map((entry)=>{
    return(
      <Entry
         key={entry.id}
         img={entry.img}
         title={entry.title}
         country={entry.country}
         googleMapLink={entry.googleMapLink}
         dates={entry.dates}
         text={entry.text}
      />
    )
  })
  console.log(entryElements)
  return(
    <>
    <Header/>
    {entryElements}
    </>
  )
}