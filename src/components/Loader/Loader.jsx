import { ClipLoader } from 'react-spinners';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <ClipLoader color="#36d7b7" />
    </div>
  );
};
