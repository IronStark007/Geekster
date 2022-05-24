const Dynamic = (data) => {
    return (
        <div style={{fontSize:'1.3em',display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',padding: '10px'}}>
            <label htmlFor="changeborder">Select to change border color:</label>
            <input type="color" name="changeborder" onChange={data.setBorderColor}/><br/>
            <label htmlFor="changetext">Type to change text:</label>
            <input type="text" name="changetext"onKeyUp={data.setText}/><br />
            <label htmlFor="changepadding">Select to change padding:</label>
            <input type="range" name="changepadding" onChange={data.setPadding}/><br />
            <label htmlFor="changecolor">Select to change container color:</label>
            <input type="color" name="changecolor" onChange={data.setColor}/><br />
            <label>Final Result Below:</label>
            <div style={{width: '100px', height: '100px',backgroundColor: data.color,border: `5px solid ${data.borderColor}`, padding: `${data.padding}px`}}>
                <p>{data.text}</p>
            </div>
        </div>
    )
}