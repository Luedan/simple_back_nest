import { CreateEmailParameter } from '@app/application/useCases/parameters/email/createEmailParameter.service';
import { DeleteEmailParameter } from '@app/application/useCases/parameters/email/deleteEmailParameter.service';
import { FindAllEmailParameter } from '@app/application/useCases/parameters/email/findAllEmailParameter.service';
import { FindOneEmailParameter } from '@app/application/useCases/parameters/email/findOneEmailParameter.service';
import { UpdateEmailParameter } from '@app/application/useCases/parameters/email/updateEmailParameter.service';
import { EmailParameterRequestDto } from '@app/domain/parameters/email/dto/emailParameter-request.dto';
import { EmailParameterUpdateDto } from '@app/domain/parameters/email/dto/emailParameter-update.dto';
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
 * EmailParameter controller
 */
@Controller('emailParameters')
@ApiTags('Parameters')
export class EmailParameterController {
  constructor(
    private readonly _createEmailParameter: CreateEmailParameter,
    private readonly _updateEmailParameter: UpdateEmailParameter,
    private readonly _findAllEmailParameter: FindAllEmailParameter,
    private readonly _findOneEmailParameter: FindOneEmailParameter,
    private readonly _deleteEmailParameter: DeleteEmailParameter,
  ) {}

  /**
   * Create a new emailParameter
   * @param createEmailParameterDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createEmailParameterDto: EmailParameterRequestDto) {
    return this._createEmailParameter.handle(createEmailParameterDto);
  }

  /**
   * Get all emailParameters
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllEmailParameter.handle();
  }

  /**
   * Get emailParameter by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneEmailParameter.handle(+id);
  }

  /**
   * Update emailParameter
   * @param id
   * @param updateEmailParameterDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(
    @Param('id') id: string,
    @Body() updateEmailParameterDto: EmailParameterUpdateDto,
  ) {
    return this._updateEmailParameter.handle(+id, updateEmailParameterDto);
  }

  /**
   * Delete emailParameter
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteEmailParameter.handle(+id);
  }
}
