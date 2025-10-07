
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, options) => {
    if (options.nextRuntime !== 'nodejs') {
      // ignore NodeJS specific modules when building for browsers or vercel's edge runtime (not being used btw)

      config.plugins.push(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        new options.webpack.NormalModuleReplacementPlugin(/^node:/, (resource: any) => {
          resource.request = resource.request.replace(/^node:/, '');
        })
      );

      config.resolve.fallback = {
        'assert': false,
        'async_hooks': false,
        'buffer': false,
        'child_process': false,
        'cluster': false,
        'console': false,
        'constants': false,
        'crypto': false,
        'dgram': false,
        'diagnostics_channel': false,
        'dns': false,
        'domain': false,
        'events': false,
        'fs': false,
        'http': false,
        'http2': false,
        'https': false,
        'inspector': false,
        'module': false,
        'net': false,
        'os': false,
        'path': false,
        'perf_hooks': false,
        'process': false,
        'punycode': false,
        'querystring': false,
        'readline': false,
        'repl': false,
        'report': false,
        'stream': false,
        'string_decoder': false,
        'sys': false,
        'timers': false,
        'tls': false,
        'trace_events': false,
        'tty': false,
        'url': false,
        'util': false,
        'v8': false,
        'vm': false,
        'wasi': false,
        'webcrypto': false,
        'webstreams': false,
        'worker_threads': false,
        'zlib': false,
      };
    }

    return config;
  }
};

export default nextConfig;
