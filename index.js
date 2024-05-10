ReactDOM.render(
    <div>
        <h2>my first time writing react</h2>
        <p>hello world</p>
    </div>,document.getElementById("root"))

ReactDOM.render(<ul><li>one</li><li>two</li></ul>,document.getElementById("list"))

function MainContent(){
    return (
        <h1>am leraning react !</h1>
    )
}

ReactDOM.render(
    <MainContent/> ,document.getElementById("function")
)


console.log(MainContent)