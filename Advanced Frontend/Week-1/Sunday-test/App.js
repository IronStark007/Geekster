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
            <Button changedValues={changedValues} mode={data?"Light Mode":"Dark Mode"}/>
            {data ? <DarkMode/>: <LightMode/>}
        </div>
    )
}