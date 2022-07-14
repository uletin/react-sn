import React, {useState } from 'react'
import useCounter from './UseCounter'


    const SubscribeBox = () => {
        const [state, setState] = useState({
            subscripe : false,
        })

        const [like, handleLike, handleTripeLike] = useCounter(0)
        const [dislike, handleDislike] = useCounter(0)

        const handleSubscribe = () => {
            setState({
                ...state,
                subscripe: !state.subscripe
            })
        }

        return(
            <div>
                <p>
                    <button onClick={handleSubscribe}>Subscribe</button>
                    <span>{JSON.stringify(state.subscripe)}</span>
                </p>

                <p>
                    <button onClick={handleLike}>Like</button>
                    <span>{like}</span>
                </p>

                <p>
                    <button onClick={handleDislike}>Dislike</button>
                    <span>{dislike}</span>
                </p>

                <p>
                    <button onClick={handleTripeLike}>Triple Like</button>
                    <span>{like}</span>
                </p>

            </div>
        )
    }

export default SubscribeBox

    

