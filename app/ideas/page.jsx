import style from "./ideas.module.css";
import Idea from "../components/Idea";

async function fetchIdeas() {
  const res = await fetch(`http://localhost:3000/api/ideas`);
  const ideas = await res.json();

  if(process.env.APP_ENV === 'dev'){
    await new Promise(function(res) {
      setTimeout(function (){
        res()      
      }, 2000)
    });
  }

  
  return ideas;
}

export default async function Ideas() {
  const ideas = await fetchIdeas();
  console.log({ ideasFromComponents: ideas });
  return (
    <main className="main">
      <div className={style.container}>
        {ideas.length && ideas.map((idea) => <Idea data={idea} />)}
      </div>
    </main>
  );
}
