import React from "react";
import { DocumentData } from "../../models/Document";
import { IonItem, IonAvatar, IonIcon, IonButton } from "@ionic/react";
import { Link } from "react-router-dom";
import { Consult } from "../../models/Consult";
import { checkmarkDoneOutline } from "ionicons/icons";

function DocumentItem({ d, c }: { d: DocumentData; c: Consult }) {
    return (
        <IonItem>
            <IonAvatar slot="start">
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
            <Link to={`detail/${c.id}/${d.id}`}>
                <IonButton disabled={d.status == "checked"} color="secondary">
                    Redact
                </IonButton>
            </Link>
        </IonItem>
    );
}

export default DocumentItem;
