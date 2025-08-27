import { MdDelete } from "react-icons/md";
const Player = ({player,handleRemover,handleAmount}) => {
    const {playerId,name,country,image,role,batting,bidding_price} = player
    return (
        <div className="border-2 border-gray-300 rounded-2xl p-8 mb-10">
            <div className=" flex  justify-between items-center">
            <div className="flex items-center gap-7">
                <div className="w-32 ">
                    <img className="rounded-3xl w-full" src={image} alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="text-xl font-semibold">{name}</h1>
                    <p className="text-lg text-[#635e5e]">{role}</p>
                </div>
            </div>
            <button onClick={()=>{
                handleRemover(playerId);
                handleAmount(bidding_price)
            }} className="text-4xl text-red-400 cursor-pointer"><MdDelete /></button>
        </div>
        </div>
        
    );
};

export default Player;