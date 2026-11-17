import {defineConfig} from 'vitest/config';
import {loadEnvFile} from 'node:process';

loadEnvFile('.env');

export default defineConfig({
    test: {
    coverage: {
        provider:"v8",
        reporter: ["text", "html"],
        include: ["src/model"]
    },
}
});