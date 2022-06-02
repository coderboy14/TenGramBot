import PhotoSize from './PhotoSize';
export default interface Audio {
    file_id: string;
    file_unqiue_id: string;
    duration: number;
    preformer?: string;
    title?: string;
    file_name?: string;
    mime_type?: string;
    file_size?: number;
    thumb?: PhotoSize;
};