import React from 'react';
import { gql, useQuery } from "@apollo/client";
// components
import QueryResults from "../components/queryResults";

const LEDGERS = gql`
  query getLedgers {
    userLedgers {
      id
      name
      author {
        id
        fname
      }
    }
  }
`;

export default function Dashboard() {
  const { loading, error, data } = useQuery(LEDGERS);
  if (loading) return "Loading...";
  if (error) return `Error loading ledgers: ${error}`;

  function clickAdd(event) {
    console.log("Button clicked!");
    console.log(event);
  }

  return (
    <QueryResults loading={loading} error={error}>
      <section>
        <h1>Your ledgers</h1>
        <div className="ledgers-list">
          <ul>
            <LedgersList ledgers={data} />
          </ul>
          <button onClick={clickAdd}>Add a new one</button>
        </div>
      </section>
    </QueryResults>
  );
}

function LedgersList(props) {
  const {
    ledgers: { userLedgers: ledgers },
  } = props;

  return !!ledgers && Array.isArray(ledgers) ? (
    ledgers.map((row) => {
      return <Ledger key={row.id} data={row} />;
    })
  ) : (
    <li className="ledger-row">You don't have any ledgers.</li>
  );
}

function Ledger(props) {
  const { name, last_opened } = props.data;
  return (
    <li>
      {name} // {String(last_opened)}
    </li>
  );
};