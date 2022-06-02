import PhotoSize from "./PhotoSize";
import MessageEntity from './MessageEntity';

export default interface Game {
    title: string;
    description: string;
    photo: PhotoSize[];
    text?: string;
    text_entities?: MessageEntity[];
    animation?: Animation[];
}