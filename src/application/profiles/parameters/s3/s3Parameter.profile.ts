/* istanbul ignore file */
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { S3Parameter } from '@app/domain/parameters/s3/s3Parameter.entity';
import { S3ParameterResponseDto } from '@app/domain/parameters/s3/dto/s3Parameter-response.dto';
import { S3ParameterRequestDto } from '@app/domain/parameters/s3/dto/s3Parameter-request.dto';
import { S3ParameterUpdateDto } from '@app/domain/parameters/s3/dto/s3Parameter-update.dto';

/**
 * S3Parameter profile
 */
@Injectable()
export class S3ParameterProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  /**
   * Profile
   * @param mapper
   */
  override get profile() {
    return (mapper) => {
      createMap(mapper, S3Parameter, S3ParameterResponseDto);
      createMap(mapper, S3ParameterRequestDto, S3Parameter);
      createMap(mapper, S3ParameterUpdateDto, S3Parameter);
    };
  }
}
