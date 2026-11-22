import { useState } from "react";

function useDetail() {
    const [showDetail, setShowDetail] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState(null);

    return { showDetail, setShowDetail, selectedDetail, setSelectedDetail };
}

export default useDetail;