import Countries from './Countries';
import { useState } from 'react';
import axios from 'axios';

export default function Main() {
    const [countries, setCountries] = useState([])

    axios.get('https://restcountries.com/v3.1/all').then((res) => {
        // console.log(res.data)
        setCountries(res.data)
    })

    return (
        <main className="">
            <Countries countries={countries}/>
        </main>
    )
}