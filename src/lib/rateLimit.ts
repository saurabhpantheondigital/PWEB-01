type RateLimitStore = Map<string, { count: number; lastReset: number }>;

/**
 * A simple in-memory rate limiter.
 * @param limit Max number of requests allowed within the window.
 * @param windowMs Time window in milliseconds.
 */
const rateLimit = (limit: number, windowMs: number) => {
  const store: RateLimitStore = new Map();

  // Periodic cleanup to prevent memory leaks
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of store.entries()) {
      if (now - value.lastReset > windowMs) {
        store.delete(key);
      }
    }
  }, windowMs);

  return {
    check: (ip: string) => {
      const now = Date.now();
      const record = store.get(ip);

      if (!record) {
        store.set(ip, { count: 1, lastReset: now });
        return true;
      }

      if (now - record.lastReset > windowMs) {
        store.set(ip, { count: 1, lastReset: now });
        return true;
      }

      if (record.count >= limit) {
        return false;
      }

      record.count += 1;
      return true;
    },
  };
};

// Create a singleton instance: 3 requests per 60 minutes per IP (More Secure)
export const contactLimiter = rateLimit(3, 60 * 60 * 1000);
export const supportLimiter = rateLimit(3, 60 * 60 * 1000);
