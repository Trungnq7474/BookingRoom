import { useState } from "react";

function useEdit() {
    const [showEdit, setShowEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    return { showEdit, setShowEdit, selectedUser, setSelectedUser };
}

export default useEdit;