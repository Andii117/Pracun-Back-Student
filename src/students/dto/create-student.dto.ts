import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  birthDate: Date;

  @IsString()
  @IsNotEmpty()
  university: string;

  @IsInt()
  @Min(7)
  currentSemester: number;

  @IsString()
  @IsNotEmpty()
  career: string;

  @IsString()
  @MaxLength(1000)
  description: string;

  @IsOptional()
  @IsString()
  profileImageUrl?: string;
}
