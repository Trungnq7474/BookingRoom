import { useState } from "react";

function useSearch(data, fields) {
    const [search, setSearch] = useState("");

    const filteredData = data.filter((item) =>
        fields.some((field) =>
            item[field]?.toString().toLowerCase().includes(search.toLowerCase())
        )
    );

    return { search, setSearch, filteredData };
}

export default useSearch;