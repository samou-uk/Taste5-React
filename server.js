import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// Security headers middleware (replaces old PHP headers)
app.use((req, res, next) => {
  // Clickjacking protection
  res.setHeader("X-Frame-Options", "DENY");

  // Basic XSS protection
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Flash / PDF / cross-domain policies
  res.setHeader("X-Permitted-Cross-Domain-Policies", "none");

  // Referrer policy
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions / Feature Policy
  res.setHeader(
    "Permissions-Policy",
    [
      "geolocation=()",
      "microphone=()",
      "camera=()",
      "payment=()",
      "usb=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "interest-cohort=()",
    ].join(", ")
  );

  // HSTS – only for HTTPS in production
  const isSecure =
    req.secure ||
    req.protocol === "https" ||
    req.headers["x-forwarded-proto"] === "https";

  if (process.env.NODE_ENV === "production" && isSecure) {
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  // Content Security Policy (including Cloudflare Insights, Tally, Google)
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tally.so https://www.google.com https://www.gstatic.com https://static.cloudflareinsights.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://tally.so https://www.google.com",
    "frame-src 'self' https://tally.so https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  res.setHeader("Content-Security-Policy", csp);

  next();
});

// Serve Vite build from /dist
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath, { index: false }));

// SPA fallback: always return index.html for client-side routes
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Taste5 server listening on port ${port}`);
});


