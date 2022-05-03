import React from 'react';

function LedgersList(props) {
    const { ledgers } = props;
    return !!ledgers && Array.isArray(ledgers) ?
        ledgers.map((row) => {
            return <Ledger key={row.id} data={row} />
        }) :
        <li className="ledger-row">You don't have any ledgers.</li>
}

function Ledger(props) {
    const { id, name, lastUsed } = props.data;
    console.log(props);
    return (<li>{name} // {String(lastUsed)}</li>)
}

export default function Home() {
    let state = {
        user: '',
        userLedgers: [
            {
                id: 1,
                name: 'Zachary\'s first ledger',
                dateCreated: new Date(),
                lastUsed: new Date()
            }
        ]
    }

    function clickAdd(event) {
        console.log('Button clicked!');
        console.log(event);
    }

    return (
        <section>
            <h1>Your ledgers</h1>
            <div className="ledgers-list">
                <ul>
                    <LedgersList ledgers={state.userLedgers} />
                </ul>
                <button onClick={clickAdd}>Add a new one</button>
            </div>

        </section>
    )
}