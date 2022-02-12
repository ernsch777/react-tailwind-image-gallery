import React from 'react';

const imageCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src='https://source.unsplash.com/random' alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">
                    Photo by somebody
                </div>
                <ul>
                    <li>
                        <strong>Views: </strong>1000
                    </li>
                    <li>
                        <strong>Downloads: </strong>100
                    </li>
                    <li>
                        <strong>Likes: </strong>100
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default imageCard;