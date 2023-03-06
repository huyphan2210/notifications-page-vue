interface Sender {
    senderName: string,
    avatarURL: string,
    action: string,
    objectName?: string,
    time: string,
    objectImgURL?: string,
    message?: string,
    isRead?: boolean
}

export type { Sender }
