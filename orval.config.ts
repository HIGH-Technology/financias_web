import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: {
      // NestJS geralmente expõe a spec JSON em /api/docs-json ou /api-json
      // Teste no navegador qual URL retorna o JSON do OpenAPI:
      target: 'http://localhost:3000/api/docs-json',
    },
    output: {
      mode: 'tags-split',
      target: 'src/api/generated',
      schemas: 'src/api/generated/schemas',
      client: 'react-query',
      httpClient: 'axios',
      mock: false,
      clean: true,
      prettier: true,
      override: {
        mutator: {
          path: 'src/api/axios-instance.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          useInfinite: false,
          useInfiniteQueryParam: 'page',
        },
      },
    },
    hooks: {
      afterAllFilesWrite: 'prettier --write',
    },
  },
});


