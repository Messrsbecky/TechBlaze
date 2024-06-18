import Ask from "./partials/Ask";
import Events from "./partials/Events";
import Explore from "./partials/Explore";
import Hero from "./partials/Hero";
import Locations from "./partials/Locations";
import Supporters from "./partials/Supporters";
import Testimonials from "./partials/Testimonials";
import Transform from "./partials/Transform";

const Landing = () => {
    return ( 
        <div>
            <Hero/>
            <Supporters/>
            <Transform/>
            <Locations/>
            <Events/>
            <Testimonials/>
            <Explore/>
            <Ask/>
        </div>
     );
}
 
export default Landing;