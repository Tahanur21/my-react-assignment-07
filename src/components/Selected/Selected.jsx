import Player from "./Player";

const Selected = ({selectPlayers}) => {
    return (
        <div className="my-5">
            {
                selectPlayers.map((player,idx )=>
                <Player
                key={idx}
                player={player}/>)
            }
        </div>
    );
};

export default Selected;