import Location from "./Location";

export default interface Venue {
    location: Location;
    title: string;
    address: string;
    foursquare_id?: string;
    foursqaure_type?: string;
    google_place_id?: string;
    google_place_type?: string;
};