const Button = (data) => {
    return (
        <button onClick={data.changedValues} className="btn">{data.mode}</button>
    )
}