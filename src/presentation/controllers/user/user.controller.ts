import { CreateUser } from '@app/application/useCases/user/createUser.service';
import { DeleteUser } from '@app/application/useCases/user/deleteUser.service';
import { FindAllUser } from '@app/application/useCases/user/findAllUser.service';
import { FindOneUser } from '@app/application/useCases/user/findOneUser.service';
import { UpdateUser } from '@app/application/useCases/user/updateUser.service';
import { TransactionInterceptor } from '@app/common/interceptors/transaction.interceptor';
import { UserRequestDto } from '@app/domain/user/dto/user-request.dto';
import { UserUpdateDto } from '@app/domain/user/dto/user-update.dto';
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
 * User controller
 */
@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(
    private readonly _createUser: CreateUser,
    private readonly _updateUser: UpdateUser,
    private readonly _findAllUser: FindAllUser,
    private readonly _findOneUser: FindOneUser,
    private readonly _deleteUser: DeleteUser,
  ) {}

  /**
   * Create a new user
   * @param createUserDto
   * @returns
   */
  @Post()
  @UseInterceptors(TransactionInterceptor)
  create(@Body() createUserDto: UserRequestDto) {
    return this._createUser.handle(createUserDto);
  }

  /**
   * Get all users
   * @returns
   */
  @Get()
  findAll() {
    return this._findAllUser.handle();
  }

  /**
   * Get user by id
   * @param id
   * @returns
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._findOneUser.handle(+id);
  }

  /**
   * Update user
   * @param id
   * @param updateUserDto
   * @returns
   */
  @Put(':id')
  @UseInterceptors(TransactionInterceptor)
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDto) {
    return this._updateUser.handle(+id, updateUserDto);
  }

  /**
   * Delete user
   * @param id
   * @returns
   */
  @Delete(':id')
  @UseInterceptors(TransactionInterceptor)
  delete(@Param('id') id: string) {
    return this._deleteUser.handle(+id);
  }
}
