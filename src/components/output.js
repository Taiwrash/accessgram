const OutPut =(data)=>{
    // console.log(["hel", 2, 4, "false", {name: "joe"}]);
    return(
        <>
        <header>
            <div className="container">
                <div className="list">
                    <ul>
                      {data.list}
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}
export default OutPut