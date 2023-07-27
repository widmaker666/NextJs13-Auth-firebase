import Link from 'next/link';
import style from '../ideas/ideas.module.css'

export default function Idea({ data }) {
  const { id, title, description } = data;

  return (
    <div className={style.idea} key={id}>
      <div className={style["idea-title"]}>{title}</div>
      <div className={style.description}>{description}</div>
      <Link className={style.lnk} href={`/ideas/${id}`}>Show details</Link>
    </div>
  );
}
