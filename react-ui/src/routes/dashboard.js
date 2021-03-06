import React from 'react';
import { gql, useQuery } from "@apollo/client";
// components
import QueryResults from "../components/queryResults";
import LedgersList from "../components/ledgersList";

const LEDGERS = gql`
  query getLedgers($author_id: ID!) {
    userLedgers(author_id: $author_id) {
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
  const { loading, error, data } = useQuery(LEDGERS, {
    variables: { author_id: "1" },
  });

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