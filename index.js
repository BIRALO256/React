ReactDOM.render(
    <div>
        <h2>my first time writing react</h2>
        <p>hello world</p>
    </div>,document.getElementById("root"))

ReactDOM.render(<ul><li>one</li><li>two</li></ul>,document.getElementById("list"))

function MainContent(){
    return (
        <nav>
            <h1>React</h1>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        
    )
}

ReactDOM.render(
    <MainContent/> ,document.getElementById("function")
)

function Header() {
    return <img src={jama2.avif} alt="Logo" />;
  }

ReactDom.render( <Header/> , document.getElementById("logo"))

ReactDOM.render(
    <div>
        <h1>Fun facts about React</h1>
        <br></br>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was  originally  created by  Jordan walke</li>
            <li>Has well 100k stars on Github</li>
            <li>Is maintained by Facebook </li>
            <li>Powers  thousands of  enterprise apps  , including mobile apps</li>
        </ul>
    </div>, document.getElementById("body")
)

