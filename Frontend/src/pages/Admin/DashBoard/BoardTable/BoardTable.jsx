import Table from "../../../../components/Table/Table.jsx";

function BoardTable({ data }) {

    const columns = [
        { 
            title: "STT", 
            key: "id",
            render: (value) => `#00${value}` 
        },

        { title: "Người Thực Hiện", key: "name" },

        { title: "Hoạt Động", key: "activity" },

        {   
            title: "Thời Gian",
            key: "time",
            render: (value) => new Date(value).toLocaleString("vi-VN") 
        },

        { 
            title: "Trạng Thái", 
            key: "status",
            render: (value) => (
                <span className={
                    value === "Chờ Duyệt" || value === "Chờ Phân Công"
                    ? "common-status-pending"
                    : value === "Đã Duyệt" || value === "Đã Tiếp Nhận"
                    ? "common-status-received"
                    : value === "Đang Sử Dụng" || value === "Đang Thực Hiện"
                    ? "common-status-active"
                    : value === "Bảo Trì"
                    ? "common-status-active"
                    : value === "Đã Sử Dụng" || value === "Đã Hoàn Thành"
                    ? "common-status-completed"
                    : value === "Đã Từ Chối"
                    ? "common-status-rejected"
                    : "common-status-pendingg"
                }>
                    <i className={
                        value === "Chờ Duyệt" || value === "Chờ Phân Công"
                        ? "fa-solid fa-clock"
                        : value === "Đã Duyệt" || value === "Đã Tiếp Nhận"
                        ? "fa-solid fa-circle-check"
                        : value === "Đang Sử Dụng" || value === "Đang Thực Hiện"
                        ? "fa-solid fa-gear"
                        : value === "Bảo Trì"
                        ? "fa-solid fa-wrench"
                        : value === "Đã Sử Dụng" || value === "Đã Hoàn Thành"
                        ? "fa-solid fa-square-check"
                        : value === "Đã Từ Chối"
                        ? "fa-solid fa-circle-xmark"
                        : "fa-solid fa-business-time"
                    }></i>
                    {value}
                </span>
            )
        }
    ];

    return (
        <>
            <div className="common-activity">
                <h3>
                    <i className="fa-solid fa-clock"></i>
                    Hoạt Động Gần Đây
                </h3>

                <Table
                    columns={columns}
                    data={data}
                />
            </div>
        </>
    )
}

export default BoardTable;