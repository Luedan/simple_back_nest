import { IsEmail, IsOptional, IsString } from 'class-validator';

export class SendEmailRequestDto {
  @IsString()
  @IsEmail()
  to: string;

  @IsString()
  @IsOptional()
  subject: string;

  @IsString()
  @IsOptional()
  text: string;

  @IsString()
  @IsOptional()
  html: string;
}
