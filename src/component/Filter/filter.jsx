import style from "../MovieList/Movie.Module.css"

const Filterl = ({ setFilterList }) => {




    return (
        <>
            <input type="text" placeholder="Search..." className={style.serch} onChange={(e) => { setFilterList(e.target.value) }} /><i className="fa-sharp fa-solid fa-magnifying-glass"></i>

        </>
    )
}

export default Filterl
