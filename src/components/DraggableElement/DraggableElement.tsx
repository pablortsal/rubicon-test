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
        console.log(dragRef);
        (dragRef.current as any).addEventListener("mousedown", (ev: any) => {
            console.log("MOUSE DOWN");
            setMoving(true);
        });
        document.addEventListener("mouseup", (ev: any) => {
            console.log("MOUSE UP");

            setMoving(false);
        });
        document.addEventListener("mousemove", (ev: any) => {
            console.log(moving);
            if (moving) {
                console.log(
                    "🚀 ~ file: DraggableElement.tsx ~ line 17 ~ dragRef.current.onMouseDown ~ ev",
                    ev.clientX,
                    ev.clientY,
                    moving
                );
            }
        });
    }, []);

    const getSensorStylePosition = useCallback(() => {
        return {
            top: `${sensor.mark.y}px`,
            left: `${sensor.mark.x}px`,
            width: `${sensor.width}px`,
            height: `${sensor.height}px`,
            backgroundColor: "red",
        };
    }, []);

    return (
        <div
            ref={dragRef}
            className="sensor"
            style={getSensorStylePosition()}
        ></div>
    );
}
