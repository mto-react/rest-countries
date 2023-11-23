import { useState, useEffect } from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
// import Main from './components/Main'
import axios from 'axios';
import Countries from './components/Countries';
import CountryContext from './contexts/CountryContext';

function App() {
  const [region, setRegion] = useState('all')
  const [countries, setCountries] = useState([])

  function getCountries() {
    axios.get('https://restcountries.com/v3.1/all').then((res) => {
      if(region == 'all') {
        setCountries(res.data)
      } else {
        setCountries(res.data.filter((country) => country.region == region))
      }
    })
  }

  useEffect(() => {
    getCountries()
  }, [region])

  console.log(region)
  return (
    <>
    <CountryContext.Provider value={{region:region, setRegion:setRegion, countries:countries}}>
      <Navbar region={region} />
      <main className="">
          <Countries countries={countries}/>
      </main>
    </CountryContext.Provider>
    </>
  )
}

export default App
