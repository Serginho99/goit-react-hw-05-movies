import { Circles } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderBox>
      <Circles color="#5e5eef" />
    </LoaderBox>
  );
}
