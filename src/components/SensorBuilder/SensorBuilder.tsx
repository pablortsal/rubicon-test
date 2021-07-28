import React, { useCallback, useContext, useMemo, useRef } from "react";
import "./SensorBuilder.scss";
import { IonButton } from "@ionic/react";
import { DocumentData } from "../../models/Document";
import { Sensor } from "../../models/Sensor";
import { DetailContext } from "../../pages/Detail/Detail";
import DraggableElement from "../DraggableElement/DraggableElement";
export default function SensorBuilder() {
    const { document, setDocument } = useContext<any>(DetailContext);
    const documentDragRef = useRef(null);
    const canvasStyle = useMemo(() => {
        return {
            backgroundImage: `url(${document?.url})`,
            backgroundSize: "contain",
            backgroundRepeat: " no-repeat",
            backgroundPosition: "center",
        };
    }, [document]);

    const addSensor = function () {
        console.log(documentDragRef);
        setDocument({
            ...document,
            sensors: [
                ...(document as DocumentData).sensors,
                { mark: { x: 0, y: 0 }, height: 100, width: 100 } as Sensor,
            ],
        });
    };

    return (
        <div className="main-container-detail">
            <div
                className="image-container"
                style={canvasStyle}
                ref={documentDragRef}
            >
                {!document && <p className="no-data">Document not found</p>}
                {document.sensors &&
                    document.sensors.map((s: Sensor, i: number) => {
                        return (
                            <DraggableElement
                                key={i}
                                x={s.mark.x}
                                y={s.mark.y}
                                width={s.width}
                                height={s.height}
                                documentX={
                                    (documentDragRef.current as any).offsetLeft
                                }
                                documentY={
                                    (documentDragRef.current as any).offsetTop
                                }
                            />
                        );
                    })}
            </div>
            <div>
                <IonButton
                    onClick={() => {
                        addSensor();
                    }}
                    size="large"
                    color="primary"
                    fill="outline"
                >
                    Add Sensor
                </IonButton>
                <IonButton size="large" color="success" fill="outline">
                    Done
                </IonButton>
            </div>
        </div>
    );
}
