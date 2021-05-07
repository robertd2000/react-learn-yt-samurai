import { useState } from 'react';
import styles from './Paginator.module.css';

export const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / 10);
  const [porsionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (porsionNumber - 1) * 10 + 1;
  let rightPortionPageNumber = porsionNumber * 10;
  return (
    <div>
      {porsionNumber > 1 && (
        <button onClick={() => setPortionNumber(porsionNumber - 1)}>
          Prev
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              key={p}
              onClick={(e) => props.onPageChanged(p)}
              className={
                props.currentPage === p
                  ? 'pageNumber ' + styles.selectedPage
                  : 'pageNumber'
              }
            >
              {p}
            </span>
          );
        })}
      {portionCount > porsionNumber && (
        <button onClick={() => setPortionNumber(porsionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};
