const App = () => {
    const [text,setText] = React.useState("");
    const [color,setColor] = React.useState("#FFFFFF");
    const [borderColor,setBorderColor] = React.useState("#000000");
    const [padding,setPadding] = React.useState("0px");
    return (
        <div>
            <h1 style={{display: 'flex', justifyContent: 'center'}}>Dynamic Content</h1>
            <Dynamic text={text} color={color} borderColor={borderColor} padding={padding} setText={e=>setText(e.target.value)} setColor={e=>setColor(e.target.value)} setBorderColor={e=>setBorderColor(e.target.value)} setPadding={e=>setPadding(e.target.value*2)}/>
        </div>
    )
}