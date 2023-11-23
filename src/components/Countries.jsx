
export default function Countries({countries}) {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    Countries 
                    ({countries.length})
                </div>
            </div>

            <div className="card-body">
                <ul className="list-group">
                {   
                    countries.map((country) => 
                        <li className="country list-group-item" key={country.name.common}>
                            <div className="country-meta">
                                <h3>{country.name.common}</h3>
                                <span>{country.region}</span>
                                <span>{country.capital}</span>
                            </div>        
                            <img src={country.flags.png} alt="flag" />
                        </li>
                    )
                }
                </ul>
            </div>
        </div>   
    )
}