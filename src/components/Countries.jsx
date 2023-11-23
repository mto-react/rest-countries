
export default function Countries({countries}) {
    console.log(countries[0])
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">Countries</div>
            </div>

            <div className="card-body">
                <ul className="list-group">
                {   
                    countries.map((country) => 
                        <li className="country list-group-item" key={country.ccn3}>
                            {country.name.common}
                            <img src={country.flags.png} alt="flag" />
                        </li>
                    )
                }
                </ul>
            </div>
        </div>   
    )
}