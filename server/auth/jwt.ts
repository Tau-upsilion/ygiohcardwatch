import { decode, sign, verify } from 'jsonwebtoken';
import config from '../config/config';
import { decrypt, encrypt } from './encryption-util';

export enum TokenType {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
}

type JWT = { exp: number; type: TokenType; sub: string};

export const generateAccessToken = (userId: string) => {
    return generateToken(userId, TokenType.ACCESS_TOKEN);
};

export const generateRefreshToken = (userId: string) => {
    return generateToken(userId, TokenType.REFRESH_TOKEN);
};

const generateToken = (userId: string, type: TokenType) => {
    const audience = config.get('');
    const issuer = config.get('');
    const secret = config.get('');
    const expiresIn =
        type === TokenType.ACCESS_TOKEN
        ? config.get('authentication.token.expiresIn')
        : config.get('authentication.refreshToken.expiresIn');
    
    const token = sign({ type }, secret, {
        expiresIn,
        audience: audience,
        issuer: issuer,
        subject: userId,
    });

    return {
        token: encrypt(token),
        expiration: (decode(token) as JWT).exp * 1000,
    };
}

export const getTokenType = (token: string): TokenType => {
    return (verify(token, config.get('authentication.token.secret')) as JWT).type;
  };
  
export const parseTokenAndGetUserId = (token: string): string => {
    const decryptedToken = decrypt(token);
    const decoded = verify(decryptedToken, config.get('authentication.token.secret')) as JWT;
    return decoded.sub || '';
};