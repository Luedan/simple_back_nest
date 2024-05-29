import { GetTokenData } from './getTokenData.service';
import { Login } from './login.service';
import { RefreshToken } from './refreshToken.service';
import { ValidateToken } from './validateToken.service';

/**
 * Array of security use cases.
 */
export const SECURITY_USE_CASES = [
  Login,
  GetTokenData,
  RefreshToken,
  ValidateToken,
];
