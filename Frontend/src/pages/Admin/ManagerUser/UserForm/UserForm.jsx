import { useState } from "react";
import Form from "../../../../components/Form/Form.jsx";

function UserForm({ onClose, onAdd, isEdit, user, onEdit }) {

    const [full_name, setFullName] = useState(user?.full_name || "");
    const [user_code, setUserCode] = useState(user?.user_code || "");
    const [phone, setPhone] = useState(user?.phone || "");
    const [email, setEmail] = useState(user?.email || "");
    const [role, setRole] = useState(user?.role || "");

    const handleSubmit = async () => {
        const userData = {
            full_name,
            user_code,
            phone,
            email,
            role
        };

        if (isEdit) {
            await onEdit(user.user_id, userData);
        } else {
            await onAdd(userData);
        }

        onClose();
    };

    return (
        <>
            <Form
                title={isEdit ? "SỬA NGƯỜI DÙNG" : "THÊM NGƯỜI DÙNG"}
                icon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-user-plus"
                }
                onClose={onClose}
                onSubmit={handleSubmit}
                buttonText={isEdit ? "Cập Nhật" : "Thêm Người Dùng"}
                buttonIcon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-user-plus"
                }
                width="650px"
            >

                <div className="form-group">
                    <label>Họ và tên</label>
                    <input
                        type="text"
                        placeholder="Nhập họ và tên"
                        name="full_name"
                        value={full_name}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Mã người dùng</label>
                        <input
                            type="text"
                            placeholder="Nhập mã người dùng"
                            name="user_code"
                            value={user_code}
                            onChange={(e) => setUserCode(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Nhập địa chỉ email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Vai trò</label>
                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">-- Chọn vai trò --</option>
                            <option value="Admin">Admin</option>
                            <option value="Sinh Viên">Sinh Viên</option>
                            <option value="Giảng Viên">Giảng Viên</option>
                            <option value="Nhân Viên Kỹ Thuật">Nhân Viên Kỹ Thuật</option>
                        </select>
                    </div>
                </div>

            </Form>
        </>
    );
}

export default UserForm;
