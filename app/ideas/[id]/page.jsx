async function fetchIdea(id) {
  const URL = "http://localhost:3000/api/ideas";
  const response = await fetch(`${URL}/${id}`, {
    next: { revalidate: 3 },
  });
  const idea = await response.json();
  return idea;
}

export default async function Page({ params }) {
  const { id } = params;
  const idea = await fetchIdea(id);

  return (
    <main className="main">
      <h3>Page {id} </h3>
      {JSON.stringify(idea, null, 2)}
    </main>
  );
}
