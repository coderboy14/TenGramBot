import LoginUrl from "./LoginUrl";
import WebAppInfo from "./WebAppInfo";
import CallbackGame from './CallbackGame';

export default interface InlineKeyboardButton {
    text: string;
    url?: string;
    callback_data?: string;
    web_app?: WebAppInfo;
    login_url?: LoginUrl;
    switch_inline_query?: string;
    switch_inline_query_current_chat?: string;
    callback_game?: CallbackGame;
    pay?: boolean;
};