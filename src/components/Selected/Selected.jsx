import Player from "./Player";

const Selected = ({selectPlayers,handleRemover,handleAmount}) => {
    return (
        <div className="my-5">
            {
                selectPlayers.map((player,idx )=>
                <Player
                handleAmount={handleAmount}
                handleRemover={handleRemover}
                key={idx}
                player={player}/>)
            }
        </div>
    );
};

export default Selected;