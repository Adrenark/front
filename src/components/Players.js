import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import aligtyt from '../images/aligtyt.png';

const Players = (props) => {
        console.log(props);

        const renderPlayers = props.players.map((players) => {
            return (
                
                <div className="item">
                    <div clasName="content">
                        <div class="card mb-3">
                            <div class="row g-0 ">
                                <div class="col-md-4">
                                    <img src={aligtyt} alt="Geralt" style={{ width: '150px', height: 'auto' }} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>{players.name} {players.surname}</strong></h5>
                                        <p class="card-text">Pozycja: {players.possition}</p>
                                        <button className="btn btn-primary"> Szczegóły o zawodniku</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            )
        })

    return (
        <div className="mx-5" >
            <div className="container">
            <div className="card mt-4">
            <div className="card-body tytul">
              Lista zawodników
            </div>
            <div>
            <a href="./NewPlayer" class="btn btn-primary mx-5 mb-3">Dodaj zawodnika</a>
            </div>
          </div>
          <div className="container">
            <div class="col mt-4 d-flex justify-content-center" >
                <ul className="list-group">
                <li className="list-group-item">{renderPlayers}</li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Players;