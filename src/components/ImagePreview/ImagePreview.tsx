import {
    IonButton,
    IonButtons,
    IonContent,
    IonIcon,
    IonToolbar,
} from "@ionic/react";
import React from "react";
import { close } from "ionicons/icons";
import "./ImagePreview.scss";

export default function ImagePreview({
    url,
    onDismiss,
}: {
    url: string;
    onDismiss: () => void;
}) {
    console.log(
        "🚀 ~ file: ImagePreview.tsx ~ line 18 ~  url,onDismiss,",
        url,
        onDismiss
    );
    return (
        <IonContent>
            <IonToolbar>
                <IonButtons slot="end">
                    <IonButton onClick={onDismiss}>
                        <IonIcon icon={close}></IonIcon>
                    </IonButton>
                </IonButtons>
            </IonToolbar>
            <img className="image" src={url} />
        </IonContent>
    );
}
