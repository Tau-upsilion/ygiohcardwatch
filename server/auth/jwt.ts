import { decode, sign, verify } from 'jsonwebtoken';
import config from '../config/config';
import { decrypt, encrypt } from './encryption-util';

export enum TokenType {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token',
}

type JWT = { exp: number; type: TokenType; sub: string};

export const generateAccessToken = (userId: string) => {
    return generateAccessToken(userId, TokenType.ACCESS_TOKEN);
};

export const generateRefreshToken = (userId: string) => {
    return generateAccessToken(userId, TokenType.REFRESH_TOKEN);
};