const Buttons = (data) => {
  
  return (
    <div className="buttons">
      {
    data.isStart && data.isPaused ?
      <button onClick={data.start}>Start</button>
      : (
        data.isPaused ? <button onClick={data.pause}>Pause</button> :
          <button onClick={data.resume}>Resume</button>
      )
  }
      <button onClick={data.reset}>Reset</button>
    </div>
  )
  }

  