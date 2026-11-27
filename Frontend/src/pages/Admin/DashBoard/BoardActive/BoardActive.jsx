import "./BoardActive.css";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BoardActive({ dashboards }) {

    const bookingData = {
        labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
        datasets: [
            {
                label: "Lượt Đăng Ký",
                data: dashboards?.bookingStats?.map(item => item.total) || [],
                backgroundColor: "#078b8e",
                borderRadius: 5,
                barThickness: 30
            }
        ]
    };

    const incidentData = {
        labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
        datasets: [
            {
                label: "Số Sự Cố",
                data: dashboards?.incidentStats?.map(item => item.total) || [],
                backgroundColor: "#ff922b",
                borderRadius: 5,
                barThickness: 30
            }
        ]
    };

    const options = {
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
                position: "top"
            },

            tooltip: {
                enabled: true
            }
        },

        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 10,
                ticks: {
                    stepSize: 10
                },
                grid: {
                    color: "#eeeeee"
                }
            },

            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return (
        <>
            <div className="dashboard-content">

                <div className="dashboard-box">
                    <h3>
                        <i className="fa-solid fa-calendar-check"></i>
                        Thống Kê Đăng Ký
                    </h3>

                    <div className="dashboard-chart">
                        <Bar data={bookingData} options={options} />
                    </div>
                </div>

                <div className="dashboard-box">
                    <h3>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        Thống Kê Sự Cố
                    </h3>

                    <div className="dashboard-chart">
                        <Bar data={incidentData} options={options} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default BoardActive;