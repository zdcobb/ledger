export default function QueryResults({ loading, error, children }) {
  if (loading) {
    // TODO: Create loading spinner component
    return <p>Loading...</p>;
  }

  if (error) {
    console.log("There was an error fetching the data...");
	console.log(error);

	return <p>There was error fetching the data...</p>;
  }

  return children;
}
