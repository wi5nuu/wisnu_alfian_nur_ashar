/**
 * Security utilities untuk API endpoints
 */

// Simple in-memory rate limiter
const requestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * Rate limit checker - 10 requests per minute per IP
 */
export function checkRateLimit(ip: string, limit = 10, windowMs = 60000): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count < limit) {
    record.count++;
    return true;
  }

  return false;
}

/**
 * Validate admin token
 */
export function validateAdminToken(token: string): boolean {
  const expectedToken = import.meta.env.ADMIN_TOKEN;
  
  // Constant-time comparison to prevent timing attacks
  if (!expectedToken || !token) {
    return false;
  }

  if (token.length !== expectedToken.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < token.length; i++) {
    result |= token.charCodeAt(i) ^ expectedToken.charCodeAt(i);
  }

  return result === 0;
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, ''); // Remove potential XSS vectors
}

/**
 * Validate email format
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

/**
 * Generate secure random token
 */
export function generateSecureToken(length = 32): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    token += chars[array[i] % chars.length];
  }
  
  return token;
}

/**
 * Get client IP from request
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0].trim() || 'unknown';
  return ip;
}

/**
 * Validate request origin
 */
export function isValidOrigin(request: Request, allowedOrigins: string[]): boolean {
  const origin = request.headers.get('origin');
  return origin ? allowedOrigins.includes(origin) : false;
}
