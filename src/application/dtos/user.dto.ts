import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class Company {
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    catchPhrase: string;
    @ApiProperty()
    @IsString()
    bs: string;
}

export class Geo {
    @ApiProperty()
    @IsString()
    lat: string;
    @ApiProperty()
    @IsString()
    lng: string;
}

export class Address {
    @ApiProperty()
    @IsString()
    street: string;
    @ApiProperty()
    @IsString()
    suite: string;
    @ApiProperty()
    @IsString()
    city: string;
    @ApiProperty()
    @IsString()
    zipcode: string;
    @ApiProperty({type: ()=> Geo})
    geo: Geo;
}

export class UserDto {
    id: number;
    @ApiProperty()
    @IsString()
    name: string;
    @ApiProperty()
    @IsString()
    username: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty({type: ()=> Address})
    address: Address;
    @ApiProperty()
    @IsString()
    phone: string;
    @ApiProperty()
    @IsString()
    website: string;
    @ApiProperty({type: ()=> Company})

    company: Company;
}




