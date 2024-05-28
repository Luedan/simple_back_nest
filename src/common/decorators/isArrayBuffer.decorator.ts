import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsArrayBuffer(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isArrayBuffer',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return value instanceof ArrayBuffer;
        },
        defaultMessage() {
          return '$property must be an ArrayBuffer';
        },
      },
    });
  };
}
