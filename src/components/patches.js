import React from 'react'
import PatchesData from "../data/12months12patches.json"

const Patches = (props) => {
    return (
        <div>
            {PatchesData.data.map((data, i1) => {
                return <div key={`content_item_${i1}`}>
                    {data.item}
                    <h3 id={"year_" + data.year}>
                        {data.year}
                        {data.blogPost && <small> - <a rel="noreferrer" href={data.blogPost} target="_blank">Blog post</a></small>}
                    </h3>
                    <ul>
                        {data.patches.map((patch, i2) => {
                            return <li key={`content_li_${i2}`}>
                                {patch.month}
                                <ul>
                                    {patch.urls.map((u, i3) => {
                                        return <li key={`content_item_${i3}`}>
                                            <a rel="noreferrer" href={u} target="_blank">{u}</a>
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

export default Patches