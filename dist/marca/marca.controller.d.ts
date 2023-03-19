import { MarcaService } from './marca.service';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
export declare class MarcaController {
    private readonly marcaService;
    constructor(marcaService: MarcaService);
    create(createMarcaDto: CreateMarcaDto): string;
    findAll(): {
        id: number;
        name: string;
    }[];
    findOne(id: string): string;
    update(id: string, updateMarcaDto: UpdateMarcaDto): string;
    remove(id: string): string;
}
