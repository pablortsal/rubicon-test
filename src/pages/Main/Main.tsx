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
import DocumentItem from "../../components/DocumentItem/DocumentItem";

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
                        return <DocumentItem key={d.id} d={d} c={c} />;
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
