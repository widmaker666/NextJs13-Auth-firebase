import Form from "../components/Form";

export default function NewIdea() {

    async function addIdea(title, description) {
        'use server'
         console.log({ title, description });
       }
  
  return (
    <main className="main">
      <h3>New Idea</h3>
      <Form formTitle="Créé votre nouvelle idée ! biatch" addIdea={addIdea} />
    </main>
  );
}
