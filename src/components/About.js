import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../images/logo.jpg';

const About = () => {
    return (
        <div class="mx-5" >
            <div className="container">
            <div className="card mt-4">
            <div className="card-body tytul">
              O Nas
            </div>
          </div>
          <div className="container">
            <div className="card mt-4">
                <div className="row align-items-start">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={logo} alt="Geralt" style={{ width: '400px', height: 'auto' }} />
                    </div>
                    <div className="col-md-8 card-body text-center">
                        <p>
                            Uczniowski Klub Sportowy Chwarzno Gdynia powstał w 2001r. W tym okresie w naszym klubie działały takie sekcje jak Koszykówka, Unihokej Kobiet i Mężczyzn. Po dwóch latach zakończyła swoją działalność sekcja koszykówki co jednoznacznie wskazało władzom klubu kierunek szkolenia jakim został unihokej dzieci i młodzieży. W związku z zawiązaniem partnerskich stosunków ze szwajcarskim klubem UHC ALLIGATOR MALANS, wszystkie zespoły zgłaszane do rozgrywek przyjęły nazwę ALIGATOR UKS CHWARZNO GDYNIA.
                        </p>
                        <p>
                            31 maja 2006 roku drużyna została zarejestrowana do Krajowego Rejestru Sądowego Organizacji Pożytku Publicznego jako UCZNIOWSKI KLUB SPORTOWY CHWARZNO GDYNIA, ten stan prawny istnieje do dnia dzisiejszego.
                        </p>
                        <p>
                            W 2001 roku powstała pierwsza młodzieżowa drużyna unihokeja, rocznik 1991/92. W roku 2004 została założona sekcja unihokeja seniorek, która w barwach UKS CHWARZNO GDYNIA osiągała największe sukcesy – zarówno na szczeblu krajowym, jak i międzynarodowym. Od początku istnienia dziecięce i młodzieżowe sekcje unihokeja są wspierane z dotacji Miasta Gdynia. Współpraca z władzami miasta Gdynia zaowocowała między innymi 3 tytułami Mistrza Polski w kategorii seniorek oraz licznymi medalami w kategoriach juniorek starszych. Ponadto drużyny juniorów młodszych, juniorów starszych i seniorów rokrocznie kwalifikowały się do turniejów finałowych Mistrzostw Polski w swoich kategoriach. Dzisiaj skupiamy się głównie z pracą z najmłodszymi począwszy od "zerówki" a kończąc na osobach w wieku 16 lat. Startujemy w lidze młodziczek i juniorów młodszych. Wielu naszych zawodników i zawodniczek reprezentowało Polskę w największych turniejach takich jak Mistrzostwa Świata i Puchar Europy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
} 

export default About;