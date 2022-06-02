import PassportFile from "./PassportFile";

enum EncryptedPassportElementType {
    personalDetails = "personal_details",
    passport = "passport",
    driversLicense = "driver_license",
    identityCard = "identity_card",
    internalPassport = "internal_passport",
    address = "address",
    utilityBill = "utility_bill",
    bankStatement = "bank_statement",
    rentalAgreement = "rental_agreement",
    passportRegistration = "passport_registration",
    temporaryRegistration = "temporary_registration",
    phoneNumber = "phone_number",
    email = "email"
}

export default interface EncryptedPassportElement {
    type: EncryptedPassportElementType;
    data?: string;
    phone_number?: string;
    email?: string;
    files?: PassportFile[];
    front_side?: PassportFile;
    reverse_side?: PassportFile;
    selfie?: PassportFile;
    translation?: PassportFile[],
    hash: string;
};