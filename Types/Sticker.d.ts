import MaskPosition from './MaskPosition';
import PhotoSize from './PhotoSize';
export default interface Sticker {
    file_id: string;
    file_unique_id: string;
    width: number;
    height: number;
    is_animated: boolean;
    is_video: boolean;
    thumb?: PhotoSize;
    emoji?: string;
    set_name?: string;
    mask_position?: MaskPosition;
    file_size?: number;
};