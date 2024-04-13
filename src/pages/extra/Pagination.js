import React, { useEffect, useState } from "react";
import { Select } from "./Input";

// Pagination Both
// const [rowsPerPage, setRowsPerPage] = useState(10);
// const [page, setPage] = useState(0);
// const handleChangePage = (event, newPage) => {
//   setPage(newPage);
// };
// const handleChangeRowsPerPage = (event) => {
//   setRowsPerPage(parseInt(event, 10));
//   setPage(0);
// };

//   <Pagination
//   type={"client"}
//   serverPage={page}
//   setServerPage={setPage}
//   serverPerPage={rowsPerPage}
//   onPageChange={handleChangePage}
//   onRowsPerPageChange={handleChangeRowsPerPage}
//   totalData={data?.length}
// />

const Pagination = (props) => {
  const [pages, setPages] = useState([]);
  const {
    type,
    serverPage,
    setServerPage,
    serverPerPage,
    onPageChange,
    totalData,
  } = props;


  const onPageChangeClient = (serverPage) => {
    setServerPage(serverPage);
  };

  useEffect(() => {
    const totalPages = Math.ceil((totalData / serverPerPage) + 1);
    const range = Math.min(10, totalPages);
    const start = Math.max(1, serverPage - Math.floor(range / 3));
    const end = Math.min(start + range, totalPages);

    const pageNumbers = Array.from(
      { length: end - start },
      (_, i) => start + i
    );

    setPages(pageNumbers);

  }, [serverPage, totalData, serverPerPage]);


  const totalCount = Math.ceil(totalData / serverPerPage) - 1

  // back button
  const handleBackButtonClick = (event) => {
    onPageChange(event, serverPage - 1);
  };

  //next page button
  const handleNextButtonClick = (event) => {
    onPageChange(event, serverPage + 1);
  };




  const option = [1, 2, 3, 5, 10, 25, 50, 100, 200]

  return (
    <div className="pagination">
      <>
        {totalData > 0 && (
          <div className="client-pagination midBox w-100">

            {/* <div className="tableRang midBox">
              <Select id={`pagination`} option={option} defaultValue={serverPerPage} label={`Show `} onChange={onRowsPerPageChange} className={`midBox paginationSelect`} btnClass={`mt-0`} angle={true} />
              <p className="count">
                {`${parseInt(serverPage * serverPerPage + 1)} - ${totalCount} of ${totalData}`}
              </p>
            </div> */}
            <div className="tableAccess ">
              <div className="d-flex  mainPaginatinBtn pagination">
                <button
                  className={`paginationBtn ${serverPage === 0 && "pageBtnDisable"}`}
                  disabled={serverPage == 0}
                  onClick={() => onPageChangeClient(0)}
                >
                  <i class="ri-contract-left-line"></i>
                </button>

                <button
                  className={`paginationBtn ${serverPage === 0 && "pageBtnDisable"}`}
                  disabled={serverPage == 0}
                  onClick={() => handleBackButtonClick()}
                >
                  {/* <i className="ri-arrow-left-s-line"></i> */}
                  Prev
                </button>

                <div className="paginationCount d-flex align-items-center">
                  {type === "server" && pages.map((serverPages, i) => {
                    return (
                      ((totalCount - 3) <= serverPage) ? (i >= 1 && i <= 2) : (i >= 5 && i <= 8)) ? (
                      <span className="m3-x">.</span>
                    ) : (
                      <button
                        key={serverPages}
                        onClick={() => onPageChangeClient(serverPages - 1)}
                        className={`paginationBtn paginationNumber m25-lg-x m13-sm-x m9-smm-x m0 ${(serverPage + 1) === serverPages ? "mk-active" : "active-btn"}`}
                      >
                        {serverPages}
                      </button>
                    )
                  })}
                </div>
                <button
                  className={`paginationBtn ${serverPage === totalCount && "pageBtnDisable"}`}
                  disabled={serverPage === totalCount}
                  onClick={() => handleNextButtonClick()}
                >
                  {/* <i className="ri-arrow-right-s-line"></i> */}
                  Next
                </button>

                <button
                  className={`paginationBtn ${serverPage === totalCount && "pageBtnDisable"}`}
                  disabled={serverPage === totalCount}
                  onClick={() =>
                    onPageChangeClient(totalCount)
                  }
                >
                  <i class="ri-contract-right-line"></i>
                </button>
              </div>
            </div>
          </div>
        )}
      </>

    </div>
  );
};

export default Pagination;

