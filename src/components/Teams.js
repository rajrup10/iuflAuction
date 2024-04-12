import React, { useEffect, useState } from 'react'

function Teams(props) {
    const [maxBid, setMaxBid] = useState(0);
    useEffect(() => {
        const minPoints = (props.players - 1) * 20;
        const maxbid = props.points - minPoints;
        setMaxBid(maxbid);
    }, [props.players]);
    return (
        <div className=' inline-block m-2 p-2'>
            <h2 className='font-serif text-xl' onClick={() => console.log(props.list)}>{props.name}</h2>
            <div className='flex justify-center items-center'>
                <h2 className='mr-2 font-thin'>Points Left:</h2>
                <h2>{props.points}</h2>
            </div>
            <div className='flex justify-center text-center'>
                <h2 className='mr-2 font-thin'>Players Left:</h2>
                <h2>{props.players}</h2>
            </div>
            <div className='flex justify-center text-center'>
                <h2 className='mr-2 font-thin'>Max Bid:</h2>
                <h2>{maxBid}</h2>
            </div>
        </div>
    )
}

export default Teams