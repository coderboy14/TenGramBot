import MessageEntity from "./MessageEntity";
import PollOption from "./PollOption";

enum PollType {
    regular = "regular",
    quiz = "quiz"
}

export default interface Poll {
    id: string;
    question: string;
    options: PollOption;
    total_voter_count: number;
    is_closed: boolean;
    is_anonymous: boolean;
    type: PollType;
    allows_multiple_answers: boolean;
    correct_option_id?: number;
    explanation?: string;
    explanation_entities?: MessageEntity[];
    open_period?: number;
    close_date?: number;
};