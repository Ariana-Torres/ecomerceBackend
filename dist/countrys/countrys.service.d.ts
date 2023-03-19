import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountrysService {
    create(createCountryDto: CreateCountryDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: number): string;
    update(id: number, updateCountryDto: UpdateCountryDto): string;
    remove(id: number): string;
}
