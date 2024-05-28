import { MIME_TYPES } from '@app/common/constants/mimeTypes';
import { Injectable } from '@nestjs/common';

/**
 * Helper class for file operations.
 */
@Injectable()
export class FilesHelper {
  /**
   * Removes the header from a base64 string.
   * @param base64String - The base64 string to remove the header from.
   * @returns The base64 string without the header.
   */
  removeBase64Header(base64String: string) {
    const commaIndex = base64String.indexOf(',');
    if (commaIndex !== -1) {
      return base64String.slice(commaIndex + 1);
    }
    return base64String;
  }

  /**
   * Gets the MIME type from a filename.
   * @param filename - The filename to get the MIME type from.
   * @returns The MIME type.
   */
  extFileType = (filename: string) => {
    const ext = /[.]/.exec(filename)
      ? /[^.]+$/.exec(filename)[0].toLowerCase()
      : undefined;
    const mime = MIME_TYPES.find((x) => x.ext === ext);
    return mime?.type;
  };

  /**
   * Gets the file extension from a filename.
   * @param filename - The filename to get the extension from.
   * @returns The file extension.
   */
  extFile(filename: string) {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
  }

  /**
   * Checks if a file is an image.
   * @param filename - The filename to check.
   * @returns True if the file is an image, false otherwise.
   */
  isImage = (filename: string) => {
    const ext = this.extFile(filename).toUpperCase();
    return ext === 'PNG' || ext === 'JPG' || ext === 'JPEG';
  };

  /**
   * Converts a base64 string to an array buffer.
   * @param base64 - The base64 string to convert.
   * @returns The array buffer.
   */
  getBufferFromBase64(base64: string) {
    return Buffer.from(base64, 'base64');
  }

  /**
   * Gets the filename from an AWS key.
   * @param key - The AWS key to get the filename from.
   * @returns The filename.
   */
  getFileNameFromAwsKey(key: string) {
    const parts = key.split('/');
    const fileName = parts[parts.length - 1];

    return fileName;
  }
}
