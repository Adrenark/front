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

    return (
        <div>
            <h2>Dodaj Zawodnika</h2>
            <form onSubmit={handleAddPlayer}>
                <div>
                    <label>Imię:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Nazwisko:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Pozycja:</label>
                    <input
                        type="text"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <button type="submit">Dodaj Zawodnika</button>
            </form>
            <h3>Lista Zawodników</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.firstName} {player.lastName} - {player.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AddPlayer;