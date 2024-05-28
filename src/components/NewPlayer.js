import React, { useState } from 'react';

const AddPlayer = () => {
    const [players, setPlayers] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');

    const handleAddPlayer = (event) => {
        event.preventDefault();
        const newPlayer = {
            firstName,
            lastName,
            position
        };
        setPlayers([...players, newPlayer]);
        setFirstName('');
        setLastName('');
        setPosition('');
    };

    const renderPlayers = players.map((player, index) => (
        <ul key={index} className="list-group-item">
            <li>
            Imię: <strong>{player.firstName}</strong>
            </li>
            <li>
            Nazwisko: <strong>{player.lastName}</strong>
                </li>
                <li>
                Pozycja: {player.position}
                </li>
             
        </ul>
    ));

    return (
        
        <div className="mx-5">
        <div className="container ">
            <div className="card mt-4">
            <h2 className=" mx-5 mt-3">Dodaj Zawodnika</h2>
            <form onSubmit={handleAddPlayer}>
                <div className=" mx-5 mb-3">
                    <label className="form-label">Imię:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="mx-5  mb-3">
                    <label className="form-label">Nazwisko:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mx-5  mb-3">
                    <label className="form-label">Pozycja:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <button type="submit" className="mx-5 btn btn-primary">Dodaj Zawodnika</button>
            </form>
            <div className="card mx-5 mt-4">
                <div className="card-body tytul">
                    Lista nowych zawodników
                </div>
                <div className="col mt-4 mx-5 d-flex">
                    <ul className="list-group">
                        {renderPlayers}
                    </ul>
                </div>
            </div>
            </div>
        </div>
</div>
        
    );
};

export default AddPlayer;