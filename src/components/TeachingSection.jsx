import WayToTeach from "./WayToTeach.jsx";

import { ways } from '../data.js'

function TeachingSection() {
  return (
    <section>
      <h3>Наш подход к обучению</h3>
      <ul>
        {ways.map(way => {
          return <WayToTeach key = {way.title} {...way}/>
        })}
        {/*<WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            // для примера
            <WayToTeach
              title = {ways[3].title}
              description = {ways[3].description}/>*/}
      </ul>
    </section>
  )
}

export default TeachingSection