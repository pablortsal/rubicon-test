import React from "react";

export default function ImagePreview({ url }: { url: string }) {
    return (
        <div>
            <img src={url} />
        </div>
    );
}
