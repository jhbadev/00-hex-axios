import { UserDto } from "../../application/dtos/user.dto";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };

    constructor(dto: UserDto) {
        this.id = dto.id;
        this.name = dto.name;
        this.username = dto.username;
        this.email = dto.email;
        this.address = dto.address;
        this.phone = dto.phone;
        this.website = dto.website;
        this.company = dto.company;
    }
}


