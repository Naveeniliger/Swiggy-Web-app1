const Shimmer = ({ count=15 }) => {
    const shimmercards = []

    for (let i = 0; i <= count; i++)
        shimmercards.push(

            <div className="shimmers">
                <div className="shimmer-body">
                    
                        <div className="shimmer-image ">
                        </div>
                        <div className="shimmer-line">

                        </div>
                        <div className="shimmer-line2">
                        </div>
                   
                </div>
            </div>
        )
        
    return <div className="shimmer-container">
        
        <h1>Please Install CORS Chrome extension -- used swiggy realtime API !!!!!!!!!!!!!!!!</h1>
        {shimmercards}
    
    </div>

}

export default Shimmer