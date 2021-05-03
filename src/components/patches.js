import React from 'react'
import PatchesData from "../data/12months12patches.json"

const Patches = (props) => {
    return (
        <div>
            {PatchesData.data.map((data, index) => {
                return <div key={`content_item_${index}`}>
                    {data.item}
                    <h3 id={"year_" + data.year}>
                        {data.year}
                        {data.blogPost && <small> - <a rel="noreferrer" href={data.blogPost} target="_blank">Blog post</a></small>}
                    </h3>
                    <ul>
                        {data.patches.map((patch, i) => {
                            return <li>{patch.month} : <a rel="noreferrer" href={patch.url} target="_blank">{patch.url}</a></li>
                        })}
                    </ul>
                </div>
            })}
        </div>
    )
}

export default Patches