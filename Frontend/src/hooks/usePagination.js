import { useState } from "react";

function usePagination(data) {
    const [currentPage, setCurrentPage] = useState(1);

    const limit = 4;
    const totalPages = Math.ceil(data.length / limit);

    const validPage = Math.min(currentPage, totalPages || 1);

    const start = (currentPage - 1) * limit;
    const pages = data.slice(start, start + limit);
    
    const pagesNumber = Array.from({ length: totalPages}, (_, index) => index + 1);

    return { currentPage: validPage, setCurrentPage, totalPages, pages, pagesNumber };
};

export default usePagination;