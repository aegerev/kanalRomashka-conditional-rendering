import React, {useState} from 'react';
import MisterRogers from './assets/MR_puppets.jpg';
import RogersLetter from './assets/MRN_Letter.jpg';
import WontYouBeMyNeighbor from './assets/MRN_start.jpg';
import MisteRogersFeedingFish from './assets/FeedingFish.jpg';
import HeinzPlusMisterRogers from './assets/MisteRogersSet.jpg';
import './App.css';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
        <h1>Welcome, Neighbor!</h1>
        {isSubscribed ? (
          <SubscribedContent />
        ) : (
        <div>
            <p>Subscribe to unlock the latest article from the Neighborhood.</p>
            <button onClick={() => setIsSubscribed(true)}>
                Subscribe Today
            </button>
        </div>
        )}   
    </div>
  );
}

function SubscribedContent() {
  return (
    <div>
      <h2>Won't You Be My Neighbor?: A Portrait of Fred Rogers</h2>
    
      <br/>

      <img src={WontYouBeMyNeighbor} alt="Mister Rogers changing his shoes, which he did at the start of every episode."/>

      <br/>  <br/>

      <p>For more than 50 years, Mister Rogers' messages of kindness, compassion, and learning have inspired audiences around the world. His television show, “Mister Rogers' Neighborhood,” made its national debut on Feb. 19, 1968.

        <br/> <br/>

        The show lasted through 2001 and was the longest running series on public TV. Through reruns, Mister Rogers continues to be one of the most beloved characters in television history.

        <br/> <br/>

        Fred McFeely Rogers was born in Latrobe, Pa. on March 20, 1928. As a child he had an interest in puppetry and music and eventually went on to earn a degree in music composition from Rollins College in Winter Park, Fla. in 1951.

        <br/> <br/>

        After three years working for NBC, Rogers left commercial television and accepted a position at Pittsburgh's WQED, the nation's first community-owned television station. For the next seven years, Rogers worked as a producer and puppeteer on the local children's series “The Children's Corner.” During this time, Rogers also attended the Pittsburgh Theological Seminary and was ordained a Presbyterian Minister.

        <br/> <br/>

        In 1963, Rogers began to create a new children's show with a colorful cast of puppet characters and a trolley that transported viewers into the world of make-believe. The show was first produced and aired in Canada, then on the Eastern Education Network, and finally, in 1968, a company that eventually merged with PBS began national broadcasts of the series that made Mister Rogers a household name.

        <br/> <br/>

        <img src={MisteRogersFeedingFish} alt="Mister Rogers feeding the fish during “Mister Rogers' Neighborhood."/>

        <br/>

        With his signature sweater and tennis shoes, Mister Rogers delighted children and adults with his puppets, gentle ways, and positive outlook on life. But “Mister Rogers' Neighborhood” is also remembered for tackling subjects traditionally glossed over by children's shows. In his trademark quiet and simple way, Mister Rogers openly discussed competition, death, divorce, anger, and war with his young viewers. Throughout his career, audiences considered Mister Rogers a “television friend” who could talk honestly about what was important to children.

        <br/> <br/>

        When I was interviewed by the Postal Service, they asked me to reflect on the commonly heard statement that Fred Rogers was just as authentically kind as the Mister Rogers 'character' seen on television. Certainly, every account I have heard from those who worked with Fred or met him, of which there are many recollections here in Pittsburgh, describe how genuinely caring and good-hearted Fred Rogers was in real life.

        <br/> <br/>

        The final episode of the beloved series aired on August 31, 2001. Fred Rogers passed away in 2003 at the age of 74.
        
        <br/> <br/>

        Although Fred Rogers is no longer with us, his memory still remains. You can view the original set from “Mister Rogers' Neighborhood,” on long-term public display for the first time ever, along with several artifacts from the show and a lifelike figure of Mister Rogers as part of the Special Collections Gallery on the History Center's fourth floor.

        <img src={HeinzPlusMisterRogers} alt="The original “Mister Rogers' Neighborhood” set in the Special Collections Gallery on the History Center's fourth floor."/>

        <br/>

        Also, you can watch all the episodes on the <a href="https://www.misterrogers.org/watch/">official website</a> as well as weekdays at 7a and 1p, and new episodes Sundays at 11a on the new NET.

      </p>
    </div>
  )
}

export default App;
