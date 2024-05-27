import { CreateS3Parameter } from '@app/application/useCases/parameters/s3/createS3Parameter.service';
import { DeleteS3Parameter } from '@app/application/useCases/parameters/s3/deleteS3Parameter.service';
import { FindAllS3Parameter } from '@app/application/useCases/parameters/s3/findAllS3Parameter.service';
import { FindOneS3Parameter } from '@app/application/useCases/parameters/s3/findOneS3Parameter.service';
import { UpdateS3Parameter } from '@app/application/useCases/parameters/s3/updateS3Parameter.service';
import { S3ParameterRequestDto } from '@app/domain/parameters/s3/dto/s3Parameter-request.dto';
import { S3ParameterUpdateDto } from '@app/domain/parameters/s3/dto/s3Parameter-update.dto';
import { TransactionInterceptor } from '@app/common/interceptors/transaction.interceptor';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/**
 * S3Parameter controller
 */
@Controller('s3Parameters')
@ApiTags('Parameters')
export class S3ParameterController {
  constructor(
    private readonly _createS3Parameter: CreateS3Parameter,
    private readonly _updateS3Parameter: UpdateS3Parameter,
    private readonly _findAllS3Parameter: FindAllS3Parameter,
    private readonly _findOneS3Parameter: FindOneS3Parameter,
    private readonly _deleteS3Parameter: DeleteS3Parameter,
  ) {}

  /**
   * Create a new s3Parameter
   * @param createS3ParameterDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createS3ParameterDto: S3ParameterRequestDto) {
    return this._createS3Parameter.handle(createS3ParameterDto);
  }

  /**
   * Get all s3Parameters
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllS3Parameter.handle();
  }

  /**
   * Get s3Parameter by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneS3Parameter.handle(+id);
  }

  /**
   * Update s3Parameter
   * @param id
   * @param updateS3ParameterDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateS3ParameterDto: S3ParameterUpdateDto,
  ) {
    return this._updateS3Parameter.handle(+id, updateS3ParameterDto);
  }

  /**
   * Delete s3Parameter
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteS3Parameter.handle(+id);
  }
}
