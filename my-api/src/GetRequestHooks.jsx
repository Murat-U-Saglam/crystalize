import React, { useState, useEffect } from 'react';

function GetRequestHooks() {
    const [btcPrice, setBtcPrice] = useState(null);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp')
            .then(response => response.json())
            .then(data => setBtcPrice(data.bitcoin.gbp));
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">BTC/GBP</h5>
            <div className="card-body">
                Current Price: {btcPrice}
            </div>
        </div>
    );
}

export { GetRequestHooks };