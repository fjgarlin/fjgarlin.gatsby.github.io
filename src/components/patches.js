import React from 'react'
import PatchesData from "../data/12months12patches.json"

const clearHash = function(str) {
    return (str.indexOf('#') !== -1) ? str.substr(0, str.indexOf('#')) : str
}

const Patches = (props) => {
    return (
        <div>
            {PatchesData.data.reverse().map((data, i1) => {
                return <div key={`content_item_${i1}`}>
                    <hr />
                    <h3 id={"year_" + data.year}>
                        {data.year}
                        {data.blogPost && <small> - <a rel="noreferrer" href={data.blogPost} target="_blank">Blog post</a></small>}
                    </h3>
                    <ul>
                        {data.patches.reverse().map((patch, i2) => {
                            return <li key={`content_li_${i2}`}>
                                {patch.month}
                                <ul>
                                    {patch.urls.map((u, i3) => {
                                        return <li key={`content_item_${i3}`}>
                                            <a rel="noreferrer" href={u} target="_blank">{clearHash(u)}</a>
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