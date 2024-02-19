import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Search.module.css'

export default function Search({searchData, eventHandler, searchWeather}) {

    const searchInput = useRef();
    return (
        <>
            <div className={`${styles.searchBox} input-group my-3 d-flex justify-content-center`}>
                <input type="search" className={styles.search} placeholder="Enter City Name" aria-label="Recipient's username" aria-describedby="button-addon2" value={searchData} onChange={() => eventHandler(searchInput.current.value)} ref={searchInput}/>
                <button className="btn btn-outline-secondary" onClick={searchWeather} type="button" id="button-addon2">Search</button>
            </div>
        </>
    )
}
