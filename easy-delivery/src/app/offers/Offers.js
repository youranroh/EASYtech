import '../css/Offers.css'

const Offers = ({ offer }) => {
    return (
        <div className="offers-page">
            <div className="offer-card">
                <div>
                    <h3>{offer.title}</h3>
                    <p>{offer.description}</p>
                </div>
                <button className='button'>Order Now</button>
            </div>
        </div>
    );
  };

export default Offers;