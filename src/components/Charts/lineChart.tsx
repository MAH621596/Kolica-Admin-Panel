import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

type Props = {
    labels: string[];
    datasets: {
        fill?: boolean;
        label: string;
        data: number[];
        color?: string;
        borderColor: string,
        pointRadius?: number,
        pointBorderWidth?: number,
        pointBackgroundColor?: string;
        pointBorderColor?: string;
        backgroundColor?: string,
    }[];

    // dynamic options
    title?: string;
    showTitle?: boolean;
    legendPosition?: "top" | "bottom" | "left" | "right";
    tooltipBg?: string;
    ySuffix?: string;
    borderRadius?: number;
    categoryPercentage?: number;
};

const LineChart = ({
    labels,
    datasets,
    title = "",
    showTitle = false,
    legendPosition = "top",
    tooltipBg = "#FFFFFF",
    ySuffix = "",
    borderRadius,
    categoryPercentage
}: Props) => {

    // DATA
    const data = {
        labels,
        datasets: datasets.map((d) => ({
            fill: d.fill,
            label: d.label,
            data: d.data,
            borderRadius: borderRadius || 0,
            backgroundColor: d.backgroundColor,
            borderColor: d.borderColor,
            legendColor: d.color,
            tension: 0.4,
            pointRadius: d.pointRadius || 2, 
            pointBorderWidth: d.pointBorderWidth || 1,
            pointBackgroundColor: d.pointBackgroundColor || "#fff",
            pointBorderColor: d.pointBorderColor,
            categoryPercentage: categoryPercentage || 0.5,
        })),
    };

    // DYNAMIC OPTIONS
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: 2 },

        plugins: {
            legend: {
                position: legendPosition,
                align: "end" as const,
                labels: {
                    boxWidth: 10,
                    boxHeight: 10,
                    borderRadius: 10,
                    usePointStyle: true,
                    pointStyle: "circle",
                    font: {
                        size: 14,
                        weight: 400,
                        lineHeight: 2,
                        family: 'Poppins'
                    },
                    generateLabels: (chart: any) => {
                        return chart.data.datasets.map((ds: any, i: any) => ({
                            text: ds.label,
                            fillStyle: ds.legendColor || "#ccc",
                            hidden: false,
                            datasetIndex: i,
                        }));
                    },
                },
            },

            title: {
                display: showTitle,
                text: title,
                color: '#000000',
                font: {
                    size: 22,
                    weight: 400,
                    lineHeight: 1.5,
                    family: 'Poppins'
                },
            },

            tooltip: {
                titleColor: "#0F1729",
                backgroundColor: tooltipBg,
                displayColors: false,
                cornerRadius: 8,
                titleAlign: "center" as const,
                bodyAlign: "center" as const,
                titleFont: { size: 14, weight: 500 },
                bodyFont: { size: 12, weight: 500 },
                padding: {
                    top: 18,
                    bottom: 0,
                    left: 6,
                    right: 6,
                },
            },
        },

        scales: {
            x: {
                stacked: false,
                grid: { display: false, drawBorder: false, },
                ticks: {
                    autoSkip: true,
                    maxRotation: 0,
                },
                // key for responsiveness feel
                categoryPercentage: 0.6,
            },
            y: {
                ticks: {
                    callback: (val: any) => val + ySuffix,
                },
                grid: { display: true, drawBorder: false, },
            },
        },
    };

    return (
        <div className="h-[290px] sm:h-[300px]">
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChart;
