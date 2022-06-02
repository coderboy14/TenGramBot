import CurrencyType from "./CurrencyTypes";
import OrderInfo from "./OrderInfo";

export default interface SuccessfulPayment {
    currency: CurrencyType;
    total_amount: number;
    invoice_payload: string;
    shipping_option_id?: string;
    order_info?: OrderInfo;
    telegram_payment_charge_id: string;
    provider_payment_charge_id: string;
};