import Message from "./Message";
import InlineQuery from "./InlineQuery";
import ChosenInlineResult from "./ChosenInlineResult";
import CallbackQuery from "./CallbackQuery";
import ShippingQuery from "./ShippingQuery";
import PreCheckoutQuery from "./PreCheckoutQuery";
import Poll from "./Poll";
import PollAnswer from "./PollAnswer";
import ChatMemberUpdated from "./ChatMemberUpdates";
import ChatJoinRequest from "./ChatJoinRequest";

export default interface Update {
    update_id: number;
    message?: Message;
    edited_message?: Message;
    channel_post?: Message;
    edited_channel_post?: Message;
    inline_query?: InlineQuery;
    chosen_inline_result?: ChosenInlineResult;
    callback_query?: CallbackQuery;
    shipping_query?: ShippingQuery;
    pre_checkout_query?: PreCheckoutQuery;
    poll?: Poll;
    poll_answer?: PollAnswer;
    my_chat_member?: ChatMemberUpdated;
    chat_member?: ChatMemberUpdated;
    chat_join_request?: ChatJoinRequest;
}