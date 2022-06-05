export default function LedgersList(props) {
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

export function Ledger(props) {
  const { name, last_opened } = props.data;
  return (
    <li>
      {name} // {String(last_opened)}
    </li>
  );
}
