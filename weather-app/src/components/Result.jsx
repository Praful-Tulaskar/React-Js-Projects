import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Result.module.css'

export default function Result({weatherData, searchHistory, historyHandler}) {

    const historyData = searchHistory.map(
        (item, index) => {
            return <li key={index} onClick={() => historyHandler(item)}>{item}</li>
        }
    )
    
    return (
        <>
        <div className={`container row ${styles.resultContainer}`}>
        {weatherData.length != 0 ? <div className={`${styles.resultData} col-8 container`}>
            <h2 className='text-center'>{weatherData.name}</h2>
            <div className="d-flex justify-content-around">
                <div>Temperature : {weatherData.main.temp} Deg</div>
                <div>Humidity : {weatherData.main.humidity}%</div>
            </div>
            <div className="d-flex justify-content-around align-items-center">
                <div className='text-center'>Weather Type : {weatherData.weather[0].main}</div>
                <div><img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt='Weather Icon'/></div>
            </div>
            </div>
            : <h2 className='text-center'>Please Enter valide city name</h2>
}
            <div className='col-4 container'>
                <h3 className='text-center'>History</h3>
                <ul className={styles.showHistory}>
                    {historyData}
                </ul>
            </div>
        </div>
        
        </>
    )
}
