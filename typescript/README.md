# @nemnesia/symbol-openapi-typescript-fetch-client

`@nemnesia/symbol-openapi-typescript-fetch-client` is a library for generating TypeScript clients using the Symbol OpenAPI. This library provides tools for easy access to the Symbol API.  
`@nemnesia/symbol-openapi-typescript-fetch-client` は、Symbol OpenAPI を利用して TypeScript クライアントを生成するためのライブラリです。このライブラリは、Symbol API に簡単にアクセスするためのツールを提供します。

## Features / 特徴

- OpenAPI 仕様に基づいて自動生成されたコード
- TypeScript に対応
- Symbol ブロックチェーンとの統合を簡素化
- Apache 2.0 ライセンス

## Install / インストール

You can install it using the following command:  
以下のコマンドでインストールできます：

```bash
npm install @nemnesia/symbol-openapi-typescript-fetch-client
```

Or, when using Yarn:  
または、Yarn を使用する場合：

```bash
yarn add @nemnesia/symbol-openapi-typescript-fetch-client
```

## Usage / 使用方法

Here is an example of how to interact with the Symbol API:  
以下のコードを利用して、Symbol API にアクセスします：

```typescript
import {
  AccountRoutesApi,
  Configuration,
} from "@nemnesia/symbol-openapi-typescript-fetch-client";

const client = new AccountRoutesApi(
  new Configuration({ basePath: "https://reference.symboltest.net:3001" })
);

client
  .getAccountInfo({
    accountId: "TCEUGLPCMO5Y72EEISSNUKGTMCN5RO4PVYMK5FI",
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error("Error fetching account info:", error);
  });
```

## スクリプト

- `yarn test`: Run the test. / テストを実行します。
- `yarn build`: Execute the build. / ビルドを実行します。
- `yarn publish:release`: Release the package. / パッケージを公開します。

## ライセンス

This project is licensed under the [Apache License 2.0](./LICENSE).  
このプロジェクトは [Apache License 2.0](./LICENSE) の下でライセンスされています。
