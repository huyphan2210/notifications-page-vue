import { Sender } from "../interfaces/Sender"

const senders: Sender[] = [{
        senderName: 'Mark Webber',
        avatarURL: 'https://i.ibb.co/FXnGwHL/avatar-mark-webber.webp',
        action: 'reacted to your recent post',
        objectName: 'My First Tournament today!',
        time: '1m ago',
    }, {
        senderName: 'Angela Gray',
        avatarURL: 'https://i.ibb.co/gmfNhGg/avatar-angela-gray.webp',
        action: 'followed you',
        time: '5m ago'
    }, {
        senderName: 'Jacob Thompson',
        avatarURL: 'https://i.ibb.co/Z81dkKd/avatar-jacob-thompson.webp',
        action: 'has joined your group',
        objectName: 'Chest Club',
        time: '1 day ago',
        objectColor: 'hsl(219, 85%, 26%)'
    }, {
        senderName: 'Rizky Hasanuddin',
        avatarURL: 'https://i.ibb.co/xDrMXDL/avatar-rizky-hasanuddin.webp',
        action: 'sent you a private message',
        time: '5 days ago',
        message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        isRead: true
    }, {
        senderName: 'Kimberly Smith',
        avatarURL: 'https://i.ibb.co/2hv1CCg/avatar-kimberly-smith.webp',
        action: 'commented on your picture',
        time: '1 week ago',
        isRead: true,
        objectImgURL: 'https://i.ibb.co/Fqd74NM/image-chess.webp'
    }, {
        senderName: 'Nathan Peterson',
        avatarURL: 'https://i.ibb.co/HnTd2xd/avatar-nathan-peterson.webp',
        action: 'reacted to your recent post',
        objectName: '5 end-game strategies to increase your win rate',
        time: '2 weeks ago',
        isRead: true
    }, {
        senderName: 'Anna Kim ',
        avatarURL: 'https://i.ibb.co/WFkMdjX/avatar-anna-kim.webp',
        action: 'left the group',
        objectName: 'Chess Club',
        time: '2 weeks ago',
        isRead: true,
        objectColor: 'hsl(219, 85%, 26%)'
    }
]

export {
    senders
}
