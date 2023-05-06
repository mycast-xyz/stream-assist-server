import dotenv from 'dotenv';

dotenv.config();

const DEFAULT_ENV_SOCKET_PORT = '10030';
const DEFAULT_SOCKET_PORT = 10030;

class ConfigInit {
  get SOCKET_PORT(): number {
    const env = process.env.SOCKET_PORT ?? DEFAULT_ENV_SOCKET_PORT;
    const parsed = Number.parseInt(env);
    return Number.isNaN(parsed) ? DEFAULT_SOCKET_PORT : parsed;
  }

  get DB_NAME(): string {
    return process.env.DB_NAME ?? '';
  }

  get DB_USER(): string {
    return process.env.DB_USER ?? '';
  }

  get DB_PASS(): string {
    return process.env.DB_PASS ?? '';
  }
}

export const Config = new ConfigInit();
