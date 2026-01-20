# mai-types

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

## Post types

`@shiraya-ma/mai-types:post` モジュールでは、投稿に関連する型定義を提供しています。

### Post

基本的な投稿データを表す型です。

| プロパティ | 型 | 説明 |
| --- | --- | --- |
| `id` | `PostID | PostIDWithTitle` | 投稿ID (例: `20250824`, `20250824-title`) |
| `title` | `string` | 投稿のタイトル |
| `category` | `'blogs' | 'illustrations'` | カテゴリ |
| `tags` | `PostTag[]` | タグの配列 |
| `description` | `string` | 投稿の説明 (プレーンテキスト) |
| `content` | `string` | 投稿の本文 (Markdown) |
| `createdAt` | `number` | 作成日時 (タイムスタンプ) |
| `updatedAt` | `number` | 更新日時 (タイムスタンプ) |
| `isPublished` | `boolean` | 公開済みかどうか |
| `isDeleted` | `boolean` | 削除済みかどうか |
| `isNoIndex` | `boolean` | インデックス不要かどうか |

### 派生型

用途に合わせて `Post` からプロパティを除外した型も定義されています。

- **PostSummary**: `content`, `isPublished`, `isDeleted` を除外。一覧表示などで使用します。
- **PostDetails**: `description` およびステータス系フラグを除外。画面表示などで使用します。
- **DraftPost**: 作成・更新日時やステータス系フラグを除外。下書き作成時などに使用します。
