import { useState } from "react";
import "./RoomForm.css";
import Form from "../../../../components/Form/Form.jsx";

function RoomForm({ onClose, onAdd, onEdit, room, isEdit }) {

    const [roomname, setRoomname] = useState(room?.roomname || "");
    const [status, setStatus] = useState(room?.status || "");
    const [location, setLocation] = useState(room?.location || "");
    const [floor, setFloor] = useState(room?.floor || "");
    const [capacity, setCapacity] = useState(room?.capacity || "");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(room?.description || "");

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append("roomname", roomname);
        formData.append("status", status);
        formData.append("location", location);
        formData.append("floor", floor);
        formData.append("capacity", capacity);
        formData.append("description", description);

        if(image) {
            formData.append("image", image);
        }

        if(isEdit) {
            await onEdit(room.room_id, formData);
        }

        else {
            await onAdd(formData);
        }
            
        onClose();
    };

    return (
        <>
            <Form
                title={isEdit ? "SỬA PHÒNG" : "THÊM PHÒNG"}
                icon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-desktop"
                }
                onClose={onClose}
                onSubmit={handleSubmit}
                buttonText={isEdit ? "Cập Nhật" : "Thêm Phòng"}
                buttonIcon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-desktop"
                }
            >

                <div className="room-fields">

                    <div className="common-form-group">
                        <label>Tên Phòng</label>
                        <input
                            type="text"
                            placeholder="Nhập (vd: Phòng Máy - H001)..."
                            value={roomname}
                            onChange={(e) => setRoomname(e.target.value)}
                        />
                    </div>

                    <div className="common-form-group">
                        <label>Trạng Thái</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option value="">-- Chọn trạng thái --</option>
                            <option>Hoạt Động</option>
                            <option>Bảo Trì</option>
                        </select>
                    </div>

                    <div className="common-form-group">
                        <label>Khu Vực</label>
                        <select value={location} onChange={(e) => setLocation(e.target.value)}>
                            <option value="">-- Chọn khu vực --</option>
                            <option>Khu H</option>
                            <option>Khu I</option>
                            <option>Khu K</option>
                        </select>
                    </div>

                    <div className="common-form-group">
                        <label>Tầng</label>
                        <select value={floor} onChange={(e) => setFloor(e.target.value)}>
                            <option value="">-- Chọn tầng --</option>
                            <option>Tầng Trệt</option>
                            <option>Tầng 1</option>
                            <option>Tầng 5</option>
                        </select>
                    </div>

                    <div className="common-form-group">
                        <label>Sức Chứa</label>
                        <input
                            type="number"
                            min="1"
                            placeholder="Nhập sức chứa..."
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                        />
                    </div>
                </div>

                <div className="common-form-group room-image">
                    <label>Hình Ảnh Phòng</label>

                    <div className="common-form-upload">
                        <i className="fa-regular fa-image"></i>
                        <p>Chọn hình ảnh phòng</p>
                        <input type="file" accept="image/*" 
                            onChange={(e) => setImage(e.target.files[0] || "")}
                        />
                    </div>

                    {isEdit && room?.image ? (
                        room.image
                    ) : ""}
                </div>

                <div className="common-form-group room-description">
                    <label>Mô Tả</label>
                    <textarea
                        rows="3"
                        placeholder="Nhập mô tả về phòng..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

            </Form>
        </>
    )
}

export default RoomForm;