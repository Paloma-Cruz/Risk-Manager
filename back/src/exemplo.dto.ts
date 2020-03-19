import {
    IsOptional,
    IsBoolean,
    IsString,
    IsInt,
} from 'class-validator';


export class ExamploDto {

    @IsString()
    token: string;
}