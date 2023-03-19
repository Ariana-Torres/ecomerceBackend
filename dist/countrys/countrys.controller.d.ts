import { CountrysService } from './countrys.service';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
export declare class CountrysController {
    private readonly countrysService;
    constructor(countrysService: CountrysService);
    create(createCountryDto: CreateCountryDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateCountryDto: UpdateCountryDto): string;
    remove(id: string): string;
}
