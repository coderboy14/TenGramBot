import User from './User';
export default interface MessageEntity {
    type: string;
    offset: number;
    length: number;
    url?: string;
    user?: User;
    language?: string;
};