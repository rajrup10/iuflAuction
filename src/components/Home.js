import React, { useEffect, useState } from 'react'
import data from './players.json';
import { Button, Image, Modal } from 'react-bootstrap';
import Teams from './Teams';

function Home() {
    const [bid, setBid] = useState(0);
    const [player, setPlayer] = useState([]);
    const [unsoldPlayers, setUnsoldPlayers] = useState(() => {
        const val = window.localStorage.getItem("unsoldPlayers");
        return val !== null ? JSON.parse(val) : [];
    });
    const [counter, setCounter] = useState(() => {
        const val = window.localStorage.getItem("counter");
        return val !== null ? JSON.parse(val) : 0;
    });
    const [select, setSelect] = useState();

    const [india, setIndia] = useState(() => {
        const val = window.localStorage.getItem("india");
        return val !== null ? JSON.parse(val) : {
            points: 1700,
            players: 14,
            list: []
        }
    });
    const [argentina, setArgentina] = useState(() => {
        const val = window.localStorage.getItem("argentina");
        return val !== null ? JSON.parse(val) : {
            points: 3280,
            players: 14,
            list: []
        }
    });
    const [brazil, setBrazil] = useState(() => {
        const val = window.localStorage.getItem("brazil");
        return val !== null ? JSON.parse(val) : {
            points: 1900,
            players: 14,
            list: []
        }
    });
    const [portugal, setPortugal] = useState(() => {
        const val = window.localStorage.getItem("portugal");
        return val !== null ? JSON.parse(val) : {
            points: 3360,
            players: 14,
            list: []
        }
    });
    const [germany, setGermany] = useState(()=>{
        const val = window.localStorage.getItem("germany");
        return val !== null ? JSON.parse(val) :{
            points: 2000,
            players: 14,
            list: []
        }
    });
    const [spain, setSpain] = useState(()=>{
        const val = window.localStorage.getItem("spain");
        return val !== null ? JSON.parse(val):{
            points: 1800,
            players: 14,
            list: []
        }
    });
    const [morocco, setMorocco] = useState(()=>{
        const val = window.localStorage.getItem("morocco");
        return val !== null ? JSON.parse(val):{
            points: 3400,
            players: 14,
            list: []
        }
    });
    const [england, setEngland] = useState(()=>{
        const val = window.localStorage.getItem("england");
        return val !== null ? JSON.parse(val):{
            points: 2550,
            players: 14,
            list: []
        }
    });
    const [france, setFrance] = useState(()=>{
        const val = window.localStorage.getItem("france");
        return val !== null ? JSON.parse(val):{
            points: 2300,
            players: 14,
            list: []
        }
    });
    const [croatia, setCroatia] = useState(()=>{
        const val = window.localStorage.getItem("croatia");
        return val !== null ? JSON.parse(val):{
            points: 2500,
            players: 14,
            list: []
        }
    });
    const [netherlands, setNetherlands] = useState(()=>{
        const val = window.localStorage.getItem("netherlands");
        return val !== null ? JSON.parse(val):{
            points: 3360,
            players: 14,
            list: []
        }
    });
    const [uruguay, setUruguay] = useState(()=>{
        const val = window.localStorage.getItem("uruguay");
        return val !== null ? JSON.parse(val):{
            points: 3060,
            players: 14,
            list: []
        }
    });
    const [ghana, setGhana] = useState(()=>{
        const val = window.localStorage.getItem("ghana");
        return val !== null ? JSON.parse(val):{
            points: 2950,
            players: 14,
            list: []
        }
    });
    const [mexico, setMexico] = useState(()=>{
        const val = window.localStorage.getItem("mexico");
        return val !== null ? JSON.parse(val):{
            points: 1500,
            players: 14,
            list: []
        }
    });
    const [rok, setRok] = useState(()=>{
        const val = window.localStorage.getItem("rok");
        return val !== null ? JSON.parse(val):{
            points: 1500,
            players: 14,
            list: []
        }
    });
    const [belgium, setBelgium] = useState(()=>{
        const val = window.localStorage.getItem("belgium");
        return val !== null ? JSON.parse(val):{
            points: 2500,
            players: 14,
            list: []
        }
    });
    useEffect(() => {
        window.localStorage.setItem("counter", JSON.stringify(counter));
        window.localStorage.setItem("unsoldPlayers", JSON.stringify(unsoldPlayers));
        window.localStorage.setItem("india", JSON.stringify(india));
        window.localStorage.setItem("argentina", JSON.stringify(argentina));
        window.localStorage.setItem("brazil", JSON.stringify(brazil));
        window.localStorage.setItem("portugal", JSON.stringify(portugal));
        window.localStorage.setItem("germany", JSON.stringify(germany));
        window.localStorage.setItem("spain", JSON.stringify(spain));
        window.localStorage.setItem("morocco", JSON.stringify(morocco));
        window.localStorage.setItem("england", JSON.stringify(england));
        window.localStorage.setItem("france", JSON.stringify(france));
        window.localStorage.setItem("croatia", JSON.stringify(croatia));
        window.localStorage.setItem("netherlands", JSON.stringify(netherlands));
        window.localStorage.setItem("uruguay", JSON.stringify(uruguay));
        window.localStorage.setItem("ghana", JSON.stringify(ghana));
        window.localStorage.setItem("mexico", JSON.stringify(mexico));
        window.localStorage.setItem("rok", JSON.stringify(rok));
        window.localStorage.setItem("belgium", JSON.stringify(belgium));
        const player = data[counter];
        setPlayer(player)
    }, [counter, unsoldPlayers, india, argentina, brazil, portugal, germany, spain, morocco, england, france, croatia, netherlands, uruguay, ghana, mexico, rok, belgium]);
    const onClickBidAdd = () => {
        if (bid < 500) {
            setBid(bid + 20);
        }
        else if (bid < 1000) {
            setBid(bid + 50);
        }
        else {
            setBid(bid + 100);
        }
    }
    const onClickBidMinus = () => {
        if (bid === 0) {
            setBid(0);
        }
        else if (bid <= 500) {
            setBid(bid - 20);
        }
        else if (bid <= 1000) {
            setBid(bid - 50);
        }
        else {
            setBid(bid - 100);
        }
    }

    const onClickNextPlayer = () => {
        setCounter(counter + 1)
        setBid(0);
    }
    const onClickPrevPlayer = () => {
        if (counter > 0) {
            setCounter(counter - 1);
            setBid(0);
        }
    }

    const [showUnsold, setShowUnsold] = useState(false);
    const [showSold, setShowSold] = useState(false);

    const handleCloseUnsold = () => setShowUnsold(false);
    const handleUnsoldChanges = () => {
        let unsoldPlayer = {
            Name: player.Name,
            Year: player.Year,
            Department: player["Department (e.g. - CSE , AIML, IOT ,BCA, etc)"],
            Primary_Position: player["Primary position"],
            Secondary_Position: player["Secondary position"],
            Enrollment_No: player["Enrollment No"],

        }
        unsoldPlayers.push(unsoldPlayer);
        setUnsoldPlayers(unsoldPlayers);
        setShowUnsold(false);
        setCounter(counter + 1);
        setBid(0);

    }
    const handleShowUnsold = () => setShowUnsold(true);

    const handleCloseSold = () => setShowSold(false);
    const handleChanges = () => {
        const soldPlayer = {
            Bid: bid,
            Name: player.Name,
            Year: player.Year,
            Department: player["Department (e.g. - CSE , AIML, IOT ,BCA, etc)"],
            Enrollment_No: player["Enrollment No"]

        }
        if (select === "INDIA") {
            india.list.push(soldPlayer);
            setIndia({
                points: india.points - bid,
                players: india.players - 1,
                list: india.list
            })
        }
        else if (select === "ARGENTINA") {
            argentina.list.push(soldPlayer);
            setArgentina({
                points: argentina.points - bid,
                players: argentina.players - 1,
                list: argentina.list
            })
        }
        else if (select === "BRAZIL") {
            brazil.list.push(soldPlayer);
            setBrazil({
                points: brazil.points - bid,
                players: brazil.players - 1,
                list: brazil.list
            })
        }
        else if (select === "PORTUGAL") {
            portugal.list.push(soldPlayer);
            setPortugal({
                points: portugal.points - bid,
                players: portugal.players - 1,
                list: portugal.list
            })
        }
        else if (select === "GERMANY") {
            germany.list.push(soldPlayer);
            setGermany({
                points: germany.points - bid,
                players: germany.players - 1,
                list: germany.list
            })
        }
        else if (select === "SPAIN") {
            spain.list.push(soldPlayer);
            setSpain({
                points: spain.points - bid,
                players: spain.players - 1,
                list: spain.list
            })
        }
        else if (select === "MOROCCO") {
            morocco.list.push(soldPlayer);
            setMorocco({
                points: morocco.points - bid,
                players: morocco.players - 1,
                list: morocco.list
            })
        }
        else if (select === "ENGLAND") {
            england.list.push(soldPlayer);
            setEngland({
                points: england.points - bid,
                players: england.players - 1,
                list: england.list
            })
        }
        else if (select === "FRANCE") {
            france.list.push(soldPlayer);
            setFrance({
                points: france.points - bid,
                players: france.players - 1,
                list: france.list
            })
        }
        else if (select === "CROATIA") {
            croatia.list.push(soldPlayer);
            setCroatia({
                points: croatia.points - bid,
                players: croatia.players - 1,
                list: croatia.list
            })
        }
        else if (select === "NETHERLANDS") {
            netherlands.list.push(soldPlayer);
            setNetherlands({
                points: netherlands.points - bid,
                players: netherlands.players - 1,
                list: netherlands.list
            })
        }
        else if (select === "URUGUAY") {
            uruguay.list.push(soldPlayer);
            setUruguay({
                points: uruguay.points - bid,
                players: uruguay.players - 1,
                list: uruguay.list
            })
        }
        else if (select === "GHANA") {
            ghana.list.push(soldPlayer);
            setGhana({
                points: ghana.points - bid,
                players: ghana.players - 1,
                list: ghana.list
            })
        }
        else if (select === "MEXICO") {
            mexico.list.push(soldPlayer);
            setMexico({
                points: mexico.points - bid,
                players: mexico.players - 1,
                list: mexico.list
            })
        }
        else if (select === "REPUBLIC OF KOREA") {
            rok.list.push(soldPlayer);
            setRok({
                points: rok.points - bid,
                players: rok.players - 1,
                list: rok.list
            })
        }
        else {
            belgium.list.push(soldPlayer);
            setBelgium({
                points: belgium.points - bid,
                players: belgium.players - 1,
                list: belgium.list
            })
        }
        setShowSold(false);
        setCounter(counter + 1);
        setBid(0);
    }
    const handleShowSold = () => setShowSold(true);


    const handleUnsoldList = () => {
        console.log(unsoldPlayers);
    }


    return (
        <div className='text-white'>
            <h1 className='text-3xl text-center mt-2'>IUFL SEASON 8 PLAYER'S AUCTION</h1>
            <div className='grid grid-cols-2 mt-3'>
                <div>
                    <h1 className='text-5xl text-center font-thin'>PLAYER DETAILS</h1>
                    <div className='ml-5 mr-5 grid grid-cols-2 '>
                        <div className='mt-5 mb-5 pl-2 pt-5'>
                            <div className='flex mb-5 text-2xl mt-5'>
                                <h1 className='font-thin mr-3'>Name : </h1>
                                <h2 className=' font-semibold'>{player.Name}</h2>
                            </div>
                            <div className='flex mb-5 text-2xl'>
                                <h1 className='font-thin  mr-3'>Year : </h1>
                                <h2 className=' font-semibold'>{player.Year}</h2>
                            </div>
                            <div className='flex mb-5 text-2xl'>
                                <h1 className='font-thin  mr-3'>Department : </h1>
                                <h2 className=' font-semibold'>{player["Department (e.g. - CSE , AIML, IOT ,BCA, etc)"]}</h2>
                            </div>
                            <div className='flex mb-5 text-2xl'>
                                <h1 className='font-thin  mr-3'>Primary Position : </h1>
                                <h2 className=' font-semibold'>{player['Primary position']}</h2>
                            </div>
                            <div className='flex text-2xl'>
                                <h1 className='font-thin  mr-3'>Secondary Position : </h1>
                                <h2 className=' font-semibold'>{player['Secondary position']}</h2>
                            </div>
                        </div>
                        <div className='ml-2 mt-5 p-1'>
                            <Image src={`https://res.cloudinary.com/dglcrqxxm/image/upload/v1712653229/IUFL/${player["Enrollment No"]}.jpg`} className='object-contain h-100 w-70' />
                        </div>
                    </div>
                </div>

                <div className='ml-3 mr-3 text-center bg-slate-800'>
                    <div className='text-5xl text-center font-thin'>TEAMS</div>
                    <div className='grid grid-cols-4 mt-3'>
                        <Teams name="INDIA" points={india.points} players={india.players} list={india.list} />
                        <Teams name="ARGENTINA" points={argentina.points} players={argentina.players} list={argentina.list} />
                        <Teams name="BRAZIL" points={brazil.points} players={brazil.players} list={brazil.list} />
                        <Teams name="PORTUGAL" points={portugal.points} players={portugal.players} list={portugal.list} />
                    </div>
                    <div className='grid grid-cols-4 mt-3'>
                        <Teams name="GERMANY" points={germany.points} players={germany.players} list={germany.list} />
                        <Teams name="SPAIN" points={spain.points} players={spain.players} list={spain.list} />
                        <Teams name="MOROCCO" points={morocco.points} players={morocco.players} list={morocco.list} />
                        <Teams name="ENGLAND" points={england.points} players={england.players} list={england.list} />
                    </div>
                    <div className='grid grid-cols-4 mt-3'>
                        <Teams name="FRANCE" points={france.points} players={france.players} list={france.list} />
                        <Teams name="CROATIA" points={croatia.points} players={croatia.players} list={croatia.list} />
                        <Teams name="NETHERLANDS" points={netherlands.points} players={netherlands.players} list={netherlands.list} />
                        <Teams name="URUGUAY" points={uruguay.points} players={uruguay.players} list={uruguay.list} />
                    </div>
                    <div className='grid grid-cols-4 mt-3'>
                        <Teams name="GHANA" points={ghana.points} players={ghana.players} list={ghana.list} />
                        <Teams name="MEXICO" points={mexico.points} players={mexico.players} list={mexico.list} />
                        <Teams name="REPUBLIC OF KOREA" points={rok.points} players={rok.players} list={rok.list} />
                        <Teams name="BELGIUM" points={belgium.points} players={belgium.players} list={belgium.list} />
                    </div>
                </div>
            </div>



            {/*ACTIONS*/}

            <div className='w-full ml-3 mr-3 p-3 flex items-end justify-evenly '>
                <div>
                    <h2 className=' text-center mb-2 text-xl font-semibold'>BID</h2>
                    <Button variant='danger' className='font-extrabold ml-3 mr-3' onClick={onClickBidMinus}>-</Button>
                    <Button variant='danger' className='font-extrabold ml-3 mr-3' onClick={onClickBidAdd}>+</Button>
                </div>
                <h2 className=' inline-block text-6xl font-extrabold'>{bid}</h2>
                {bid === 0 ?
                    (<Button className='btn btn-success ml-3 mr-3 px-5 py-3' onClick={handleShowUnsold}>UNSOLD</Button>)
                    :
                    (<Button className='btn btn-success ml-3 mr-3 px-5 py-3' onClick={handleShowSold}>SOLD</Button>)
                }
                <Modal show={showUnsold} onHide={handleCloseUnsold}>
                    <Modal.Header closeButton>
                        <Modal.Title>UNSOLD</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>SORRY! But you still have chance...</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseUnsold}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUnsoldChanges}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={showSold} onHide={handleCloseSold}>
                    <Modal.Header closeButton>
                        <Modal.Title>SELLING TO {select} FOR {bid}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <select value={select} onChange={e => setSelect(e.target.value)}>
                            <option>INDIA</option>
                            <option>ARGENTINA</option>
                            <option>BRAZIL</option>
                            <option>PORTUGAL</option>
                            <option>GERMANY</option>
                            <option>SPAIN</option>
                            <option>MOROCCO</option>
                            <option>ENGLAND</option>
                            <option>FRANCE</option>
                            <option>CROATIA</option>
                            <option>NETHERLANDS</option>
                            <option>URUGUAY</option>
                            <option>GHANA</option>
                            <option>MEXICO</option>
                            <option>REPUBLIC OF KOREA</option>
                            <option>BELGIUM</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseSold}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleChanges}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Button className='btn btn-info ml-3 mr-3 px-5 py-3 text-white' onClick={onClickPrevPlayer}>BACK</Button>
                <Button className='btn btn-info ml-3 mr-3 px-5 py-3 text-white' onClick={onClickNextPlayer}>NEXT</Button>
                <Button variant='primary' className='ml-3 mr-3 px-5 py-3 text-white' onClick={handleUnsoldList}>UNSOLD LIST</Button>
            </div>
            <footer className='text-center font-medium text-xl'>Created By : RAJRUP SAMANTA</footer>
        </div>
    )
}

export default Home