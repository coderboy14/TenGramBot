import PhotoSize from "./PhotoSize";

export default interface VideoNote {
    file_id: string;
    file_unique_id: string;
    length: number;
    duration: number;
    thumb?: PhotoSize;
    file_size: number;
}