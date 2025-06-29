export function BuisnessCard({cardDetails}) {
    
    return <div className={"Buisness-Card-Container"}>{
            cardDetails.map((i) => {
                return  <div className={"Buisness-Card"} >
                        <h2>{i.name}</h2>
                        <p>{i.designation}</p>
                        <h3>Intrests</h3>

                        {i.intrests.map(i2 => {
                            return (<span>{i2} </span>)
                        })}

                        <br />
                        <div className="link-btn-container">
                        {i.links.linkdin ? <a href={i.links.linkdin} target="_blank" rel="noopener noreferrer"><button>Linkdin</button></a> : ''}
                        {i.links.github ? <a href={i.links.github} target="_blank" rel="noopener noreferrer"><button>GitHub</button></a> : ''}
                        {i.links.x ? <a href={i.links.x} target="_blank" rel="noopener noreferrer"><button>X</button></a> : ''}
                        </div>
                    </div>
            })
        }
        </div>
}