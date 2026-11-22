import "./Pagination.css";

function Pagination({ pages, currentPage, onPageChange }) {
    return (
        <>
            <div className="pagination">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {pages.map((page) => (
                    <button
                        key={page}
                        className={currentPage === page ? "current" : ""}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === pages.length}
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </>
    )
}

export default Pagination;