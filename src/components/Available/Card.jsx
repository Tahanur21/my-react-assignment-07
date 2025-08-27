
const Card = ({ avail }) => {
const {playerId,name,country,image,role,batting,bidding_price} = avail
    return (
        <div>
            {/* card from daisyUi */}
            <div className="card bg-base-100 border border-gray-200">
                <figure>
                    <img
                        src={image}
                        alt="image_of_player" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;