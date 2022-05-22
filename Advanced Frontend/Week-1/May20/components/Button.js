const Button = (data) => {
    return (
        <button onClick={data.changedValues} style={{ margin: '20% auto',marginTop:'8%',padding:'20px 10px',display: 'block',color: 'white',backgroundColor: 'black',borderRadius: '10px'}}>Click me to Change the above component</button>
    )
}