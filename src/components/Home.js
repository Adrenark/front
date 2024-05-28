import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import aligtyt from '../images/aligtyt.png';
import pzuni from '../images/pzuni.jpg';

const Home = () => {
    return (
      <div>

        <div className="container">
          <div className="card mt-4">
            <div className="card-body tytul">
              UKS Aligator Chwarzno Gdynia
            </div>
          </div>
          <div class="card">
            <div class="card-body">
            <div class="row align-items-start">
              <div class="col">
                <img src={aligtyt} alt="Geralt" style={{ width: '150px', height: 'auto' }} />
              </div>
              <div class="col-10">
                <h5 class="title">Fanpage na Facebooku</h5>
                <p class="card-text">Bądź na bierząco z nami! Regularnie wstawiamy posty z dokonań naszych zawodników.</p>
                <a href="https://www.facebook.com/ukschwarzno/?locale=pl_PL" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Przekieruj</a>

              </div>
            </div>           
              </div>

            <div class="card">
            <div class="card-body">
            <div class="row align-items-start">
              <div class="col">
                <img src={pzuni} alt="Geralt" style={{ width: '150px', height: 'auto' }} />
              </div>
              <div class="col-10">
                <h5 class="title">Polski Unihokej</h5>
                <p class="card-text">Oficjalna strona Polskiego Zwiąsku Unihokeja. Można tam znaleść wszystkie potrzebne informacje, takie jak dane kontaktowe, rozpiski meczów i inne.</p>
                <a href="https://www.polskiunihokej.pl/" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Przekieruj</a>
              </div>
            </div>    
      </div>
      </div>
      </div>
      </div>
      </div>
    );
}

export default Home;