import { Timeline } from "../components/TImeline"
import {experiences} from "../constants"
const Experiences = () => {
  return (
    <div id="experience"  className='w-full'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiences