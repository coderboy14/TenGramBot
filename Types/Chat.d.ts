import ChatPhoto from "./ChatPhoto";
import Message from './Message';
import ChatPermissions from './ChatPermissions';
import ChatLocation from './ChatLocation';

enum ChatTypes {
    private = "private",
    group = "group",
    supergroup = "supergroup",
    channel = "channel"
}

export default interface Chat {
    id: number;
    type: ChatTypes;
    title?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    photo?: ChatPhoto;
    bio?: string;
    has_private_forwards?: boolean;
    description?: string;
    invite_link?: string;
    pinned_message?: Message;
    permissions?: ChatPermissions;
    slow_mode_delay?: number;
    message_auto_delete_time?: number;
    has_protected_content?: boolean;
    sticker_set_name?: string;
    can_set_sticker_set?: boolean;
    linked_chat_id?: number;
    location: ChatLocation;
};

export { ChatTypes };