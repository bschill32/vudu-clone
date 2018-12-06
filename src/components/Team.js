import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Team extends Component {
    render() {
        return (
            <div id='team'>
                <h1 className="team-header">Team</h1>
                <div className="team-container">
                    <div className="team-info">
                        <div class='pic-zoom'>
                            <img class="team-pic" width = "246px" height = "246px" src='https://lostsurfboards.net/wp-content/uploads/2018/05/ka-team.jpg' alt=""/>
                            <h2 className='team-rep'>Kolohe Andino</h2>
                            <p>WCT</p>
                            <a className="instagram" href="https://www.instagram.com/koloheandino22/?hl=en"><i class="fab fa-instagram fa-2x" ></i></a>
                        </div>  
                        <div>
                            <img class="team-pic" width = "246px" height = "246px" src='https://lostsurfboards.net/wp-content/uploads/2018/05/c3cf3cd97a7a9b2cafaf0b0c01c4c533.jpg' alt=""/>
                            <h2 className='team-rep'>Mason Ho</h2>
                            <a className="instagram" href="https://www.instagram.com/cocom4debarrelkilla/?hl=en"><i class="fab fa-instagram fa-2x" ></i></a>
                        </div>  
                        <div>
                            <img class="team-pic" width = "246px" height = "246px" src='https://lostsurfboards.net/wp-content/uploads/2018/05/8956125b3093ab5d650654834dcfe099.jpg' alt=""/>
                            <h2 className='team-rep'>Carissa Moore</h2>
                            <p>3X World Champ | WCT</p>
                            <a className="instagram" href="https://www.instagram.com/rissmoore10/?hl=en"><i class="fab fa-instagram fa-2x" ></i></a>
                        </div>  
                        <div>
                            <img class="team-pic" width = "246px" height = "246px" src='https://lostsurfboards.net/wp-content/uploads/2018/05/A99Q0085.jpg' alt=""/>
                            <h2 className='team-rep'>Taj Burrow</h2>
                            <a className="instagram" href="https://www.instagram.com/tajamos/?hl=en"><i class="fab fa-instagram fa-2x" ></i></a>
                        </div>  
                    </div>
                </div>
            </div>
            // {/* <div className="team" id='team'>
            //     <h1>Team</h1>
            // </div> */}
        )
    }
}

export default Team