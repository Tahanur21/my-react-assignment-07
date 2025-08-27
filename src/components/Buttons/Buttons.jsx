import { useEffect, useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import { ToastContainer, toast } from 'react-toastify';
import './Buttons.css'

const Buttons = ({ handleActive, isActive,handleRemoveAmount,handleAmount }) => {
    const { content } = isActive
    //fetching api
    const [availables, setAvailable] = useState([]);
    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setAvailable(data))
    }, [])
    // find and add player
    const [selectPlayers, setPlayer] = useState([]);
    const handleSelectPlayer = (player) => {
        const isExist = selectPlayers.find(find => find.playerId === player.playerId);
        if (isExist) {
            notify();
        }
        // else if(amount >=0){
        //     // alert('Not enough money')
        //     return;
        // }
        else if (player.playerId <= 6) {
            const newPlayer = [...selectPlayers, player];
            setPlayer(newPlayer);
            const notify = () => {
                toast.success('Player Choosen', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            notify()
        }
        else {
            const added = () => {
                toast.error('Not enough storage for bidding!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            added()
        }
    }
    // filter player
    // const [remove,setRemove] = useState([]);
    const handleRemover = (id) =>{
       const remove = selectPlayers.filter(find => find.playerId != id);
       setPlayer(remove);
    }
    // aler notify 
    const notify = () => {
        toast.error('Player already choosen!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return (
        <div>
            <div className="mt-20 flex justify-between items-center">
                <h1 className="text-2xl font-bold">{content ? "Available Players" : `Selected Players(${selectPlayers.length}/6)`}</h1>
                <div>
                    <button
                        onClick={() => {
                            handleActive('available')
                        }}
                        className={content ? "btn bg-[#E7FE29] rounded-l-xl px-7 py-6" : "btn rounded-l-xl px-7 py-6"}>Available</button>
                    <button
                        onClick={() => {
                            handleActive('selected')
                        }}
                        className={content ? "btn rounded-r-xl px-7 py-6" : "btn bg-[#E7FE29] rounded-r-xl px-7 py-6"}>Selected{`(${selectPlayers.length})`}</button>
                </div>
            </div>
            <div className='mt-12'>
                {
                    content ?
                        <Available
                            availables={availables}
                            handleSelectPlayer={handleSelectPlayer}
                            handleRemoveAmount={handleRemoveAmount}
                        />
                        : <Selected 
                        handleAmount={handleAmount}
                        handleRemover={handleRemover}
                        selectPlayers={selectPlayers} />
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Buttons;