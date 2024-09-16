import React, {useState} from 'react';
import MisterRogers from './assets/MR_puppets.jpg';
import RogersLetter from './assets/MRN_Letter.jpg';
import MRNStamp from './assets/MisterRogersUSPStamp.jpeg'
import './App.css';

function App() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div>
        <h1>Welcome To the Neighborhood!</h1>
        {isSubscribed ? (
          <SubscribedContent />
        ) : (
        <div>
            <p>Subscribe to unlock the latest article from the Neighborhood:</p>
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
      <h2>A Stamp on American Culture: Fred Rogers and Elvis Presley</h2>
    
      <br/>

      <img src={MRNStamp} alt="Mister Rogers and King Friday XIII on a USPS Stamp."/>

      <br/>  <br/>
      
      <p>“What do you think about having Fred Rogers featured on a stamp?” This is the question I was recently asked by a representative from the U.S. Postal Service in advance of its new stamp featuring Fred Rogers in commemoration of the 50th Anniversary of “Mister Rogers' Neighborhood.”

        <br/> <br/>

        Sitting under the camera lights, with the original set of “Mister Rogers' Neighborhood“ on display in the History Center's Special Collections gallery behind me, I spoke about the impact of Fred Rogers on American culture and the value of having him join the pantheon of other figures who have been honored because of their “extraordinary and enduring contributions to American Society.”

        <br/> <br/>

        As I spoke, I was struck by the similarities between this commemoration and that of another icon I have been deeply immersed in, Elvis Presley. My doctoral work was based at Graceland, Elvis' home. Having spent many hours conducting research at his home and years researching him, Elvis is never far from my thoughts. Elvis was honored on a U.S. stamp issued in 1993 as part of a music icon series, although some fans argued he should have received the kind of solitary recognition that Fred Rogers will be receiving. The more I thought about the fact that both of these American icons were honored by the Postal Service, the more I drew connections between them.

        <br/> <br/>

        Fred Rogers and Elvis Presley were part of the same generation, born only seven years apart (Fred Rogers in 1928 and Elvis Presley in 1935). They both began their careers in the mid-1950s. In 1954, Elvis made his first recording at Sun Studios in Memphis, while Fred began working at WQED, Pittsburgh's public television station, on the children's show “The Children's Corner.” Both men began pushing boundaries in their mediums, with Elvis' “That's All Right” ushering in the new rock n' roll era, while Fred worked to develop children's television programming that focused on education and empathy rather than traditional gimmicks.

        <br/> <br/>

        1968 would prove to be a seminal year in both of their careers, with Fred Rogers debuting the now iconic “Mister Rogers' Neighborhood” and Elvis staking the claim that he was still the King of Rock n' Roll during his triumphant television special, later dubbed “The Comeback Special,” that cemented his return to music after a decade of increasingly floundering movies. The turmoil of 1968 gave rise to Fred Rogers' comforting words and relationship-building with young television viewers, while Elvis' Comeback finale “If I Can Dream,” a response to the assassination of Martin Luther King, Jr., was perhaps the most galvanizing performance of his career, with a critic proclaiming “if ever there was music that bleeds, this is it.”

        <br/> <br/>

        Postal stamps are reserved for people who make an indelible mark on our culture, which can be said of both Fred Rogers and Elvis Presley, as they made incredible impacts on their media forms and audiences. Their appeal and effect were linked to their personalities, which enriched their work in immeasurable ways, whether on stage or on screen.

        <br/> <br/>

        When I was interviewed by the Postal Service, they asked me to reflect on the commonly heard statement that Fred Rogers was just as authentically kind as the Mister Rogers 'character' seen on television. Certainly, every account I have heard from those who worked with Fred or met him, of which there are many recollections here in Pittsburgh, describe how genuinely caring and good-hearted Fred Rogers was in real life.

        <br/> <br/>

        A collection of letters written by Fred Rogers to a fan of the show that is held within the History Center's Detre Library & Archives provides a glimpse of the kindness that Fred Rogers showed to all members of the Neighborhood, as he responded to a letter: 
        
          "Your beautiful letter meant a great deal to me. It really gives me a warm feeling to know that you have such fond memories of our program and that you continue to feel close to what we offer. The feelings that you shared are encouraging to all of us here... You are a special person, and we will remember with pleasure that you are part of our television Neighborhood."

        Fred Rogers' authentic personality shined through in all that he did, from his television production to his encounters with people in everyday life.
        
        <br/> <br/>

        <img src={MisterRogers} alt="Mister Rogers and his Puppet Crew."/>
        <br/>
        <img src={RogersLetter} alt="Mister Rogers' Letter To His Friend."/>

        <br/> <br/>

        This reminds me of one of the final quotes that visitors at Graceland hear, where Elvis' daughter, Lisa Marie, recalls the connection between her father's stage presence and who he was as a person:

          "Whatever he emanated on the stage was what he was when he was off.  I think people just felt his presence, it came through in his music, it came through on stage, his being was what was coming through. I just think he touches the spirit... his spirit came through in whatever he did and it would touch other spirits."

        This statement is indicative of the relationship that both Fred and Elvis had with their legions of fans and their ability to convey their personalities through mediums that affected their listeners and viewers in powerful ways.

        <br/> <br/>

        Both Fred Rogers and Elvis Presley were innovators in their emerging mediums, forging new paths, and making their stamp on American culture with legacies we can still see today. Elvis fused together a range of musical styles and produced rock n' roll, while Fred pulled from multiple disciplines and his artistic talents to create a new avenue for television programming. Their placement on postal stamps is indicative of their cultural impact and commemorates their unique contributions, just one of the many connections between these two surprisingly similar icons.

      </p>
    </div>
  )
}

export default App;
