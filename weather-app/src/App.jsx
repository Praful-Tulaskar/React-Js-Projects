import React, { useState } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import styles from './App.module.css'

export default function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [history, setHistory] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  }

  const handleSearchWeather = () => {
    
    if(search != ''){
          
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f0f481cd401a1bd94556afd52c6c582d&units=metric`
        )
        .then(
          (response) => {
            // console.log(response);
            if(history.indexOf(search) === -1){
              setHistory(
                [...history, search]
              )
            }
            setWeather(response.data);
            setSearch('');
          }
          )
          .catch(
            (error) => {
              console.log(error);
            }
            )
          }
  }

  const handleHistory = async(data) => {
    setSearch(data);
    if(data != ''){
          
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=f0f481cd401a1bd94556afd52c6c582d&units=metric`
        )
        .then(
          (response) => {
            // console.log(response);
            if(history.indexOf(data) === -1){
              setHistory(
                [...history, data]
              )
            }
            setWeather(response.data);
            setSearch('');
          }
          )
          .catch(
            (error) => {
              console.log(error);
            }
            )
          }
  }

  // useEffect(
  //   () => {
  //     

  //   },[search]
  // )
  return (
    <>
      <div className={`container ${styles.displayZone}`}>
        <Search searchData={search} eventHandler={changeSearch} searchWeather={handleSearchWeather}/>
        <Result weatherData={weather} searchHistory={history} historyHandler={handleHistory}/>
      </div>
    </>
  )
}
