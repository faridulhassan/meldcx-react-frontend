import { useCallback } from "react";

export default function ActiveDevices({ activeDevices = [] }) {
    const radius = 250,
        circleNums = activeDevices.length,
        angle = (Math.PI * 2) / circleNums;

    const getPosition = useCallback((index) => {
        return {
            x: Math.cos(index * angle) * radius,
            y: Math.sin(index * angle) * radius
        };
    });
    return (
        <div>
            <div>
                <div className="relative w-[500px] h-[500px]  rounded-full flex items-center justify-center mx-auto">
                    <div className="text-center relative z-10">
                        <div className="text-7xl font-light mb-2">{circleNums}</div>
                        <div className="uppercase text-sm">
                            <span className="block leading-none">Device{circleNums > 1 ? "s" : ""}</span>
                            <span className="block leading-none">Online</span>
                        </div>
                    </div>
                    <div
                        className="absolute w-full h-full  rounded-full flex justify-center items-center animate-spin duration-75"
                        style={{
                            animationDuration: "50s"
                        }}
                    >
                        {activeDevices.map((device, index) => {
                            const position = getPosition(index);
                            return (
                                <div
                                    key={device.id}
                                    className="absolute flex justify-center items-center text-gray-400 bg-white rounded-full w-20 h-20"
                                    style={{
                                        transform: `translate(${position.x}px, ${position.y}px)`
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
