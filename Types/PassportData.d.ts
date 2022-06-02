import EncryptedPassportElement from './EncryptedPassportElement';
import EncryptedCredentials from './EncryptedCredentials';
export default interface PassportData {
    data?: EncryptedPassportElement[];
    credentials: EncryptedCredentials[];
};