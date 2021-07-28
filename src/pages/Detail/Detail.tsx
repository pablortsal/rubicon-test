import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { IonContent, IonButton } from "@ionic/react";
import "./Detail.scss";
import { useParams } from "react-router-dom";
import { DocumentData } from "../../models/Document";
import { DocumentService } from "../../services/remote/DocumentService/DocuementsServices";
import SensorBuilder from "../../components/SensorBuilder/SensorBuilder";
export const DetailContext = createContext({});

export default function Detail(props: any) {
    let { id, consult } = useParams<any>();
    const [document, setDocument] = useState<DocumentData>({} as DocumentData);

    const getDocument = useCallback(async () => {
        if (id && consult)
            setDocument(await DocumentService.getDocument(consult, id));
    }, []);

    useEffect(() => {
        getDocument();
    }, [id]);

    return (
        <DetailContext.Provider value={{ document, setDocument }}>
            <IonContent>
                <SensorBuilder />
            </IonContent>
        </DetailContext.Provider>
    );
}
