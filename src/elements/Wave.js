export default function Wave({
    className = "",
    colorClass = "text-white",
    height = "h-16",
    side = "right",
    startAt = 65
}) {
    const isRight = side === "right";

    return (
        <div className={`flex w-full items-end bg-transparent pointer-events-none select-none ${colorClass} ${className}`}>
            <div
                style={{ width: `${startAt}%` }}
                className={`${height} shrink-0 ${isRight ? 'bg-transparent' : 'bg-current'}`}
            />

            <div className={`${height} shrink-0`}>
                <svg
                    viewBox="0 0 117 57.16"
                    className={`h-full w-auto block fill-current ${!isRight ? '-scale-100' : ''}`}
                    preserveAspectRatio="xMinYMax meet"
                >
                    <path d="M60.08 28.05C44.71 45.42 23.46 56.16 0 56.16v1h117V0C94.79.92 74.75 11.45 60.08 28.05z" />
                </svg>
            </div>

            <div className={`flex-1 ${height} ${isRight ? 'bg-current' : 'bg-transparent'}`} />
        </div>
    );
}