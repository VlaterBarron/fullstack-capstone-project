import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {urlConfig} from '../../config';

function MainPage() {
    const [gifts, setGifts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
       const fetchGifts = async () => {
        try {
            const url = `${urlConfig.backendUrl}/api/gifts`;
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`HTTP error; ${res.status}`);
            }
            const data = await res.json();
            setGifts(data);
        } catch (e) {
            console.log("Fetch error: " + e.message);
        }
       };
       fetchGifts();
    }, []);

    const goToDetailsPage = (productId) => {
        navigate(`/app/product/${productId}`);
      };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleDateString('default', {month: 'long', day: 'numeric', year: 'numeric'});
      };

    const getConditionClass = (condition) => {
        return condition === "New" ? "list-group-item-success" : "list-group-item-warning";
    };

    return (
        <div className="container mt-5">
            <div className="row">
               {
                gifts.length ? 
                    gifts.map((gift) => (
                        <div key={gift.id} className="col-md-4 mb-4">
                            <div className="card product-card">
    
                                <div className='image-placeholder'>
                                    {
                                        gift.image ? (
                                            <img alt="" src={gift.image} className='card-img-top' />
                                        ) : (
                                            <div className='no-image-available'>No Image Available</div>
                                        )
                                    }
                                </div>
    
                                <div className="card-body">
    
                                    <h5 className='card-title'>{gift.name}</h5>
    
                                    <p className={`card-text ${getConditionClass(gift.condition)}`}>
                                    {gift.condition}
                                    </p>
    
                                    <p className="card-text">{formatDate(gift.date_added)}</p>
    
                                    <button onClick={() => goToDetailsPage(gift.id)} className="btn btn-primary">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) : <h1>No Data</h1>
               }
            </div>
        </div>
    );
}

export default MainPage;
