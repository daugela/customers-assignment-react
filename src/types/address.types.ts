import { Coordinates } from '.';

export interface Address {
    city: string,
    street: string,
    house: number,
    zip: number,
    coords: Coordinates
}