import { FC } from 'react';
import IEntry from '../../interfaces/entry.interface';
import './Entry.css';

type Props = {
    entry: IEntry
}



const Entry: FC<Props> = ({ entry }) => {

  return (
    <div className="entry">
    <div className="entry__date">{entry.date}</div>
    <div className="entry__title">{entry.title}</div>
    <div className="entry__text">{entry.text}</div>
  </div>
  );
}

export default Entry;
