import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    useIonModal,
} from "@ionic/react";
import "./Main.scss";
import { DocumentService } from "../../services/remote/DocumentService/DocuementsServices";
import { DocumentData } from "../../models/Document";
import { Consult } from "../../models/Consult";
import DocumentItem from "../../components/DocumentItem/DocumentItem";
import ImagePreview from "../../components/ImagePreview/ImagePreview";

export default function Main() {
    const [consultsData, setConsultsData] = useState<
        Array<Consult> | undefined
    >();

    const [currentPreviewImage, setCurrentPreviewImage] = useState("");

    const getDocs = useCallback(async () => {
        setConsultsData(await DocumentService.getPendingDocuments());
    }, []);
    const updateDoc = useCallback(async (d, c) => {
        await DocumentService.updateDocument(
            d.id,
            { ...d, status: "checked" },
            c.id
        );
        getDocs();
    }, []);

    const handleDismiss = () => {
        dismiss();
    };

    const [present, dismiss] = useIonModal(ImagePreview, {
        url: currentPreviewImage,
        onDismiss: handleDismiss,
    });

    const getConsultsList = useCallback(
        (c: Consult) => {
            return (
                <div className="list-container">
                    <IonList key={c.id}>
                        <IonListHeader>
                            <IonTitle>{c.name}</IonTitle>
                        </IonListHeader>
                        {c.documents.map((d: DocumentData) => {
                            return (
                                <DocumentItem
                                    key={d.id}
                                    d={d}
                                    c={c}
                                    onImageClick={() => {
                                        setCurrentPreviewImage(d.url);
                                        present();
                                    }}
                                    onCheckReady={() => {
                                        updateDoc(d, c);
                                    }}
                                />
                            );
                        })}
                    </IonList>
                </div>
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
                <div>
                    {consultsData &&
                        consultsData.map((c: Consult) => {
                            return getConsultsList(c);
                        })}
                </div>
                <div className="help-data">
                    <h3>HELP</h3>
                    <ul>
                        <li>Click on the image to preview</li>
                        <li>
                            Click on no redaction needed if the preview its okai
                        </li>
                        <li>Redact if something need to be cover</li>
                        <li>Click reset to restart de adventure</li>
                    </ul>
                </div>
            </div>
        </IonContent>
    );
}
