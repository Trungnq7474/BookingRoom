import { useState } from "react";

function useEdit() {
    const [showEdit, setShowEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    return { showEdit, setShowEdit, selectedItem, setSelectedItem };
}

export default useEdit;