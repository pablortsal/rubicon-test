import React from "react";
import { DocumentData } from "../../models/Document";
import { IonItem, IonAvatar, IonIcon, IonButton } from "@ionic/react";
import { Link, useHistory } from "react-router-dom";
import { Consult } from "../../models/Consult";
import { checkmarkDoneOutline } from "ionicons/icons";
import "./DocumentItem.scss";
function DocumentItem({
    d,
    c,
    onImageClick,
}: {
    d: DocumentData;
    c: Consult;
    onImageClick?: any;
}) {
    const history = useHistory();
    return (
        <IonItem>
            <IonAvatar
                class="avatar"
                slot="start"
                onClick={() => {
                    if (onImageClick) onImageClick();
                }}
            >
                {d.status == "checked" && (
                    <IonIcon
                        color="success"
                        icon={checkmarkDoneOutline}
                        className="floating-icon"
                    ></IonIcon>
                )}
                <img src={d.previewUrl} alt="preview-imag" />
            </IonAvatar>

            <IonButton
                disabled={d.status == "checked"}
                fill="outline"
                color="primary"
            >
                No redaction needed
            </IonButton>

            <IonButton
                onClick={() => {
                    history.push(`detail/${c.id}/${d.id}`);
                }}
                disabled={d.status == "checked"}
                color="secondary"
            >
                Redact
            </IonButton>
        </IonItem>
    );
}

export default DocumentItem;
