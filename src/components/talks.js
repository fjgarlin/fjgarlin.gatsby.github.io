import React from 'react'
import TalksData from "../data/speaker.json"

const Talks = (props) => {
    return (
        <div>
            {TalksData.data.reverse().map((data, i1) => {
                return <div key={`content_item_${i1}`}>
                    <hr />
                    <h3>
                        {data.year}
                    </h3>
                    <ul>
                        {data.events.map((talk, i2) => {
                            return <li key={`content_li_${i2}`}>
                                {talk.event}
                                <ul>
                                    {talk.talks.map((u, i3) => {
                                        return <li key={`content_item_${i3}`}>
                                            <a rel="noreferrer" href={u.link} target="_blank">{u.title}</a>
                                        </li>
                                    })}
                                </ul>
                            </li>
                        })}
                    </ul>
                </div>
            })}
        </div>
    )
}

export default Talks