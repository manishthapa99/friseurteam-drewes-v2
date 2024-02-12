import './OurTeam.css'

function Card(props){
    return(
    <div>
        <div className="card">
          <img src={props.img} className="class__img" style={{height: "200px", width: "100%", objectFit: "cover"}}/>
        </div>
        <div className="detail">
          <p className="brand"><b>{props.description}</b></p>
          <div style={{ borderTop: "3px solid #C8B170 ", marginLeft: 80, marginRight: 80 ,marginBottom:8}}/>  
          <h2 className="title">{props.title}</h2>
        </div>
    </div>
    
    )
}


function OurTeam(){
    return(
        <div className="team_wrapper">
            <Card
                img="/assets/MichaelaDrewes.jpg"
                title="Meisterin, Inhaberin"
                description="Michaela"
                />
            <Card
                img="/assets/TamaraRossberg.jpg"
                title="Gesellin, Teilzeit"
                description="Tamara"
                />
            <Card
                img="/assets/ThelkaKok.jpg"
                title="Gesellin, Teilzeit"
                description="Thekla"
                />
        </div>
    )
}


export default OurTeam;

// export function OurTeamRow2(){
//     return(
//         <div className='team_wrapper'>
//             <Card
//                 img="/assets/Marko.jpeg"
//                 title="Meister, Vollzeit"
//                 description="Marko"
//                 />
//             <Card
//                 img="/assets/5.jpg"
//                 title="Gesellin, Vollzeit"
//                 description="Celina"
//                 />
//         </div>
//     )
// }  