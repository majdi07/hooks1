import React from 'react'
import style from "./Movie.Module.css"



const MovieCart = ({ car }) => {



    return (
        <>

            <div className={style.bloc}>
                <p className={style.titre}>{car.title}</p>


                <img src={car.posterURL} alt="joker" className={style.img} />

                <div className={style.desc}>{car.description}</div>




            </div >
        </>
    )
}

export default MovieCart