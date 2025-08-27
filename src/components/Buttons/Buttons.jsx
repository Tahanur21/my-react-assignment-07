import { useEffect, useState } from 'react';
import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './Buttons.css'

const Buttons = ({ handleActive, isActive }) => {
    const { content } = isActive
    //fetching api
    const [availables,setAvailable] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setAvailable(data))
    },[])
    return (
        <div>
            <div className="mt-20 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Available Players</h1>
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
                        className={content ? "btn rounded-r-xl px-7 py-6" : "btn bg-[#E7FE29] rounded-r-xl px-7 py-6"}>Selected</button>
                </div>
            </div>
            <div className='mt-12'>
                {
                    content?
                    <Available 
                    availables={availables}
                    
                    />
                    :<Selected/>
                }
            </div>
        </div>
    );
};

export default Buttons;