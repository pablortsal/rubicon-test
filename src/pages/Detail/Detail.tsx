import React, { useCallback, useEffect, useMemo, useState } from "react";
import { IonContent, IonButton } from "@ionic/react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { DocumentData } from "../../models/Document";
import { DocumentService } from "../../services/remote/DocumentService/DocuementsServices";

export default function Detail(props: any) {
    let { id, consult } = useParams<any>();
    const [document, setDocument] = useState<DocumentData | undefined>();

    const canvasStyle = useMemo(() => {
        return {
            backgroundImage: `url(${document?.url})`,
            backgroundSize: "contain",
            backgroundRepeat: " no-repeat",
            backgroundPosition: "center",
        };
    }, [document]);

    const getDocument = useCallback(async () => {
        if (id && consult)
            setDocument(await DocumentService.getDocument(consult, id));
    }, []);

    useEffect(() => {
        getDocument();
    }, [id]);

    return (
        <IonContent>
            <div className="main-container-detail">
                <div className="image-container" style={canvasStyle}>
                    {!document && <p className="no-data">Document not found</p>}
                </div>
                <div>
                    <IonButton size="large" color="primary" fill="outline">
                        Add Sensor
                    </IonButton>
                    <IonButton size="large" color="success" fill="outline">
                        Done
                    </IonButton>
                </div>
            </div>
        </IonContent>
    );
}
