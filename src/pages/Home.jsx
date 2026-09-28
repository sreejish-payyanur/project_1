import { Link, redirect } from "react-router-dom"

export function Home() {
    return <>

        <div className="header" style={{ display: "flex", justifyContent: "space-around", backgroundColor:"", height: "8vh" }}  >
            <div style={{ width: "20%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", }}>
                <h3>UNIQUE</h3>
            </div>
            <div style={{ display: "flex", alignItems: "center", backgroundColor: "gray", justifyContent: "center", width:"60%",height:"8vh" }}>
                <button>SEARCH</button><input type="text" style={{ width:"50%" }} ></input>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center",backgroundColor:"white",width:"20%",height:"8vh"}}>
                <ul style={{ listStyle: "none", backgroundColor: "", height:"8vh" }}>
                    <li><Link to={'/'}>home</Link></li>
                    <li>about</li>
                    <li>help</li>
                </ul>
            </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", minHeight: "82vh" }}>
            <div style={{ flex: 1, backgroundColor: "lightblue" }}>1</div>
            <div style={{ flex: 1 }}>2</div>
            <div style={{ flex: 1, backgroundColor: "lightblue" }}>3</div>
        </div>
        <div style={{ backgroundColor: 'lightgray', height: "10vh" }}>
            <footer>footer</footer>
        </div>




    </>
}