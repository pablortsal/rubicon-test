import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonApp,
    IonList,
    IonLabel,
    IonItem,
    IonListHeader,
    IonAvatar,
    IonButton,
    IonIcon,
} from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";

import "./Main.scss";
import { DocumentService } from "../../services/remote/DocumentService/DocuementsServices";
import { DocumentData } from "../../models/Document";
import { Consult } from "../../models/Consult";
import { Link } from "react-router-dom";

export default function Main() {
    const [consultsData, setConsultsData] = useState<
        Array<Consult> | undefined
    >();

    const getDocs = useCallback(async () => {
        setConsultsData(await DocumentService.getPendingDocuments());
    }, []);

    const getConsultsList = useCallback(
        (c: Consult) => {
            return (
                <IonList key={c.id}>
                    <IonListHeader>
                        <IonTitle>{c.name}</IonTitle>
                    </IonListHeader>
                    {c.documents.map((d: DocumentData) => {
                        return (
                            <IonItem key={d.id}>
                                <IonAvatar slot="start">
                                    {d.status == "checked" && (
                                        <IonIcon
                                            color="success"
                                            icon={checkmarkDoneOutline}
                                            className="floating-icon"
                                        ></IonIcon>
                                    )}
                                    <img
                                        src={d.previewUrl}
                                        alt="preview-imag"
                                    />
                                </IonAvatar>

                                <IonButton
                                    disabled={d.status == "checked"}
                                    fill="outline"
                                    color="primary"
                                >
                                    No redaction needed
                                </IonButton>
                                <Link to={`detail/${c.id}/${d.id}`}>
                                    <IonButton
                                        disabled={d.status == "checked"}
                                        color="secondary"
                                    >
                                        Redact
                                    </IonButton>
                                </Link>
                            </IonItem>
                        );
                    })}
                </IonList>
            );
        },
        [consultsData]
    );

    useEffect(() => {
        getDocs();
    }, []);

    return (
        <IonContent>
            <div className={` main-container`}>
                {consultsData &&
                    consultsData.map((c: Consult) => {
                        return getConsultsList(c);
                    })}
            </div>
        </IonContent>
    );
}
