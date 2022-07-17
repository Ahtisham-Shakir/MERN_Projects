import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Bill Gates",
            url: "https://image.cnbcfm.com/api/v1/image/106967046-1635430835800-gettyimages-946971500-99821012.jpeg?v=1653062440"
        },
        {
            name: "Warren Buffet",
            url: "https://d1e00ek4ebabms.cloudfront.net/production/d73b1368-1f18-412e-a2d9-2b1ab1ee7b78.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg"
        },
        {
            name: "Elon Musk",
            url: "https://www.thenews.com.pk/assets/uploads/updates/2022-07-16/974158_6139396_Elon-Musk2_updates.jpg"
        },
        {
            name: "Quaid e Azam",
            url: "https://nationaltoday.com/wp-content/uploads/2021/11/Quaid-e-azam-day.jpg"
        },

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
    return (
        <div className='tinderCards'>
            <div className='tinderCards__cardContainer'>
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div style={{backgroundImage: `url(${person.url})`}} className="card">
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards