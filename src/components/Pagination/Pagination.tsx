import classNames from "classnames";
import React, { useMemo, useState, ReactElement } from "react";
import "./Pagination.scss";

//fazer accorderon
//baseado em bunnies main_app UserHistoric.js

export interface PaginationProps {
  pages: any
}

export interface MyPaginationProps {
  totalItems: any;
  itemLimit: any;
  paginate: any;
  currentPage: any;
}

const MyPagination: React.FC<MyPaginationProps> = ({ totalItems, itemLimit, paginate, currentPage }) => {
  try {
    const arrayPagination = [];
    if (itemLimit) {
      for (let index = 0; index < Math.ceil(totalItems / itemLimit); ) {
        index += 1;
        arrayPagination.push(index);
      }
    } else {
      arrayPagination.push(1);
    }

    return arrayPagination.map((num, index) => {
      return (
        <li key={index}>
          <button className="ButtonPageNumber"
            onClick={() => paginate(num)}
            // active={currentPage === num}
          >
            {num}
          </button>
        </li>
      );
    });
  } catch (e) {
    console.log("Error> ", e);
  }
};

const Pagination: React.FC<PaginationProps> = ({ pages, ...props }) => {
  const mockedPages = {total:  10}
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(mockedPages);

  let limit = 6;

  const previousPage = () => {
    if (page > 1) return setPage(page - 1);
    return null;
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const disableNextPage = () => {
    if (Math.ceil(pagination.total / limit) > page) return false;
    return true;
  };

  const disablePreviousPage = () => {
    if (Math.ceil(pagination.total / limit) >= page && page > 1) return false;
    return true;
  };

  function itIsLastPage() {
    return page === Math.ceil(pagination.total / limit);
  }

  function itIsHomePage() {
    return page === 1;
  }

  const paginate = (num: any) => {
    setPage(num);
  };



  return (
    <div className="PaginationContainer" >
      <ul className="list">
        <li>
          <button onClick={() => setPage(1)}>&lt; &lt;</button>
        </li>
        <li>
          <button onClick={previousPage}>&lt;</button>
        </li>

        <MyPagination
          totalItems={pagination.total}
          itemLimit={limit}
          paginate={paginate}
          currentPage={page}
        />

        <li>
          <button onClick={nextPage}>&gt;</button>
        </li>
        <li>
          <button onClick={() => setPage(pagination.total / limit)}>&gt; &gt;</button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
