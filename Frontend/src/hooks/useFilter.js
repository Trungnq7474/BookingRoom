import { useState } from "react";

function useFilter(data) {
    const [filters, setFilters] = useState({});

    const filteredData = data.filter((item) =>
        Object.keys(filters).every((key) =>
            !filters[key] || item[key] === filters[key]
        )
    );

    return { filters, setFilters, filteredData };
}

export default useFilter;