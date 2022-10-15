import { PageContext } from 'components/PageContext/PageContext';
import { useContext } from 'react';
import { Button } from './LoadMore.styled';

export default function LoadMore() {
  const { setPage } = useContext(PageContext);
  function onLoadMore() {
    setPage(page => page + 1);
  }

  return (
    <Button type="button" onClick={onLoadMore}>
      load more
    </Button>
  );
}
