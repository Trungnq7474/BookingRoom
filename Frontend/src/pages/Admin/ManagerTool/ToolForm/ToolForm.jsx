import { useState } from "react";
import "./ToolForm.css";
import Form from "../../../../components/Form/Form.jsx";

function ToolForm({ onClose, onAdd, onEdit, tool, isEdit }) {

    const [toolname, setToolname] = useState(tool?.toolname || "");
    const [status, setStatus] = useState(tool?.status || "");
    const [tooltype, setTooltype] = useState(tool?.tooltype || "");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState(tool?.description || "");

    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append("toolname", toolname);
        formData.append("roomname", "Phòng Server - H005");
        formData.append("status", status);
        formData.append("location", "Khu H");
        formData.append("floor", "Tầng Trệt");
        formData.append("tooltype", tooltype);
        formData.append("description", description);

        if(image) {
            formData.append("image", image);
        }

        if(isEdit) {
            await onEdit(tool.tool_id, formData);
        }

        else {
            await onAdd(formData);
        }

        onClose();
    }

    return (
        <>
            <Form
                title={isEdit ? "SỬA THIẾT BỊ" : "THÊM THIẾT BỊ"}
                icon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-hard-drive"
                }
                onClose={onClose}
                onSubmit={handleSubmit}
                buttonText={isEdit ? "Cập Nhật" : "Thêm Thiết Bị"}
                buttonIcon={isEdit
                    ? "fa-regular fa-pen-to-square"
                    : "fa-solid fa-hard-drive"
                }
            >

                <div className="tool-fields">

                    <div className="common-form-group">
                        <label>Tên Thiết Bị</label>
                        <input
                            type="text"
                            placeholder="Nhập tên thiết bị..."
                            value={toolname}
                            onChange={(e) => setToolname(e.target.value)}
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
                        <label>Loại Thiết Bị</label>
                        <input 
                            type="text"
                            placeholder="Nhập loại thiết bị..."
                            value={tooltype}
                            onChange={(e) => setTooltype(e.target.value)} 
                        />
                    </div>

                    <div className="common-form-group">
                        <label>Tên Phòng</label>
                        <input type="text" value="Phòng Server - H005" readOnly />
                    </div>

                    <div className="common-form-group">
                        <label>Tầng</label>
                        <input type="text" value="Tầng Trệt" readOnly />
                    </div>

                    <div className="common-form-group">
                        <label>Khu Vực</label>
                        <input type="text" value="Khu H" readOnly />
                    </div>

                </div>

                <div className="common-form-group tool-image">
                    <label>Hình Ảnh Thiết Bị</label>

                    <div className="common-form-upload">
                        <i className="fa-regular fa-image"></i>
                        <p>Chọn hình ảnh thiết bị</p>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0] || null)} 
                        />
                    </div>
                </div>

                <div className="common-form-group tool-description">
                    <label>Mô Tả</label>
                    <textarea
                        rows="3"
                        placeholder="Nhập mô tả về thiết bị..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>

            </Form>
        </>
    )
}

export default ToolForm;