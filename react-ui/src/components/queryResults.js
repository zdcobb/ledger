export default function QueryResults({ loading, error, children }) {
  if (loading) {
    // TODO: Create loading spinner component
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was error fetching the data: {error}</p>;
  }

  return children;
}
