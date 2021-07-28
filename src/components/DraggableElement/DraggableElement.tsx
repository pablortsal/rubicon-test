import React, { useCallback, useEffect, useRef, useState } from "react";
import { Sensor } from "../../models/Sensor";
import "./DraggableElement.scss";

export default function DraggableElement({
    x,
    y,
    width,
    height,
    documentX,
    documentY,
}: any) {
    const [sensor, setSensor] = useState<Sensor>({
        mark: { x, y },
        width,
        height,
    });

    const [moving, setMoving] = useState<boolean>(false);

    const dragRef = useRef(null);

    useEffect(() => {
        (dragRef.current as any).addEventListener("mouseup", (ev: any) => {
            if (moving) {
                setMoving(false);
            } else {
                setMoving(true);
            }
        });

        (dragRef.current as any).addEventListener("mousemove", (ev: any) => {
            if (moving) {
                setSensor({
                    ...sensor,
                    mark: {
                        x: ev.clientX - sensor.width,
                        y: ev.clientY - sensor.height,
                    },
                });
            }
        });
    }, [moving]);

    const getSensorStylePosition = useCallback(() => {
        return {
            top: `${sensor.mark.y}px`,
            left: `${sensor.mark.x}px`,
            width: `${sensor.width}px`,
            height: `${sensor.height}px`,
            backgroundColor: "red",
        };
    }, [sensor]);

    return (
        <div
            ref={dragRef}
            className="sensor"
            style={getSensorStylePosition()}
        ></div>
    );
}
