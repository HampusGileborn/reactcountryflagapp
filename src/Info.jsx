const Info = ({data}) => {
    return(
        <>
        <h3>{data.name.common}</h3>
        <h3>{data.capital}</h3>
        <h3>{data.population}</h3>
        </>
    )
}

export default Info;