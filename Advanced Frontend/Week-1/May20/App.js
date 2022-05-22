const App = () => {
    let [data,setData] = React.useState(true);

    const changedValues = () => {
        if (data){
            setData(false);
        }
        else {
            setData(true);
        }
    }
    return (
        <div>
            {data ? <FirstComponent/>: <SecondComponent/>}
            <Button changedValues={changedValues}/>
        </div>
    )
}