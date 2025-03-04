function FujiGroup(props){
    return(
        <>
            <section className="section">
               <div className="fuji">
                <img src={props.img} alt="mount fuji" />
                </div>

                <div className="content">

                    <div className="location">
                        <img src="src\assets\marker.png" alt="marker" className="marker" />
                        <p className="japan">{props.loc}</p>
                        <a href="#">View on Google Maps</a>
                    </div>

                    <h2 className="destination">{props.dest}</h2>
                    <p className="date">{props.date}</p>
                    <p className="desc">{props.desc}</p>

                </div>
                <hr />
            </section>



            {/* <section className="section">
               <div className="fuji">
                <img src="src\assets\Rectangle77.png" alt="mount fuji" />
                </div>

                <div className="content">

                    <div className="location">
                        <img src="src\assets\marker.png" alt="marker" className="marker" />
                        <p className="japan">JAPAN </p>
                        <a href="#">View on Google Maps</a>
                    </div>

                    <h2 className="destination">Mount Fuji</h2>
                    <p className="date">12 Jan, 2023 - 24 Jan, 2023</p>
                    <p className="desc">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).<br /> Mount Fuji is the single most popular tourist  site in Japan, for both Japanese and foreign tourists.</p>

                </div>
                <hr />
            </section> */}
        </>
    )
}

export default FujiGroup;