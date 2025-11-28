import { JWT_OPTIONS } from '@auth0/angular-jwt';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
    },
    allowedDomains: ['localhost:8080'],
    disallowedRoutes: ['/api/auth/login', '/api/auth/refresh']
  };
}

export const JWT_CONFIG = {
  provide: JWT_OPTIONS,
  useFactory: jwtOptionsFactory
};
