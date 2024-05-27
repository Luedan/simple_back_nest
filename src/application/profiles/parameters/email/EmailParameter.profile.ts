/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameterRequestDto } from '@app/domain/parameters/email/dto/emailParameter-request.dto';
import { EmailParameterUpdateDto } from '@app/domain/parameters/email/dto/emailParameter-update.dto';

/**
 * EmailParameter profile
 */
@Injectable()
export class EmailParameterProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, EmailParameter, EmailParameterResponseDto);
      createMap(mapper, EmailParameterRequestDto, EmailParameter);
      createMap(mapper, EmailParameterUpdateDto, EmailParameter);
    };
  }
}
