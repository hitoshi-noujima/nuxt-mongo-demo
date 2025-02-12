# Simple Post Application

シンプルな投稿アプリケーションです。Nuxt 3 と MongoDB を使用して構築されています。

## 機能

- 投稿の作成
- 投稿の一覧表示
- 投稿の詳細表示

## 技術スタック

- [Nuxt 3](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt UI](https://ui.nuxt.com/)
- [TailwindCSS](https://tailwindcss.com/)
- MongoDB（[nuxt-mongoose](https://nuxt-mongoose.nuxt.space/)経由）

## 環境構築

依存関係をインストールしてください:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 環境変数の設定

`.env.example`をコピーして`.env`ファイルを作成し、必要な環境変数を設定してください。

## 開発サーバー

開発サーバーを起動します（`http://localhost:3000`）:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 本番環境

本番用にアプリケーションをビルド:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

ビルドしたアプリケーションをローカルでプレビュー:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```
