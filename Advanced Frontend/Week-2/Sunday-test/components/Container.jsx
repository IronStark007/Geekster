const Container = () => {
  const [hour, setHour] = React.useState(0);
  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [isStart,setIsStart] = React.useState(true);
  const [isPaused,setIsPaused] = React.useState(true);
  const [timerInterval,setTimerInterval] = React.useState('');

  const startHandler = () => {
    let h=0;
    let s=0;
    let m=0;
    setTimerInterval(setInterval(() => {
      s+=1;
      setSec(s);
      if (s == 60) {
        m+=1;
        s=0;
        setMin(m);
        setSec(0);
      } else if (m == 60) {
        h+=1;
        m=0;
        setHour(h);
        setMin(m);
      }
    }, 100))
    setIsStart(false);
  }

  const pauseHandler = () => {
    clearTimeout(timerInterval);
    setIsPaused(false);
  }

  const resumeHandler = () => {
    let h=hour;
    let s=sec;
    let m=min;
    setTimerInterval(setInterval(() => {
      s+=1;
      setSec(s);
      if (s == 60) {
        m+=1;
        s=0;
        setMin(m);
        setSec(0);
      } else if (m == 60) {
        h+=1;
        m=0;
        setHour(h);
        setMin(m);
      }
    }, 100))
    setIsPaused(true);
  }

  const resetHandler = () => {
    setSec(0);
    setHour(0);
    setMin(0);
    clearInterval(timerInterval);
    setIsStart(true);
    setIsPaused(true);
  }

  return (
    <div className="timer">
      <span>{hour.toString().padStart(2, '0')}</span>
      <span>:</span>
      <span>{min.toString().padStart(2,'0')}</span>
      <span>:</span>
      <span>{sec.toString().padStart(2,'0')}</span>
      <Buttons start={startHandler}
      pause={pauseHandler}
      resume={resumeHandler}
      reset={resetHandler}
      isStart={isStart}
      isPaused={isPaused}
      />
    </div>
  )
  }