# GraphQL React Example

## 環境構築

ターミナルでリポジトリをクローンし、ディレクトリに移動します。npm install を実行します。

```bash
git clone https://github.com/ryohey/graphql-react-example-typescript.git
cd graphql-react-example-typescript
npm install
```

https://github.com/settings/tokens?type=beta より Fine-grained personal access tokens を作成します。

`.env.local.example` ファイルをコピーして `.env.local` と名前をつけます。

`.env.local` を編集し、`VITE_GITHUB_TOKEN` のコメントを解除し、xxx の部分を先程作成した Personal Access Token に置き換えます。

下記のようになります。

```
VITE_GITHUB_TOKEN=github_pat_...
```

## 開発

```bash
npm run dev
```

ターミナルに表示された URL をブラウザで開きます。
