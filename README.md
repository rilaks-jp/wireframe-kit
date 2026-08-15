# @rilaks/wireframe-kit

Webサイトのワイヤーフレームを Vite + React + TypeScript で制作するためのコンポーネントライブラリです。
Markdownで書かれたワイヤー定義（`[IMAGE]` `[BUTTON: ラベル → /path/]` など）を、そのままReactコンポーネントに置き換えられる構成になっています。

## セットアップ（このリポジトリでの開発）

```bash
npm install
```

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | サンプルページ（`demo/`）を開発サーバーで表示 |
| `npm run build` | ライブラリを `dist/` にビルド（ES / CJS / CSS / 型定義） |
| `npm run typecheck` | 型チェック |
| `npm run screenshot` | Playwrightで 1440px / 390px のフルページスクリーンショットを `screenshots/` に保存 |

初回のみ、スクリーンショット用にブラウザのインストールが必要です。

```bash
npx playwright install chromium
```

## 外部プロジェクトからの利用

npm registryへは未公開のため、GitHubリポジトリ参照またはローカルパスでインストールします。

```bash
npm install github:rilaks/wireframe-kit
# または
npm install /path/to/wireframe-kit
```

CSSとコンポーネントをインポートして使用します。

```tsx
import "@rilaks/wireframe-kit/styles.css";
import {
  Section,
  Container,
  TwoColumn,
  ImagePlaceholder,
} from "@rilaks/wireframe-kit";

export function TopPage() {
  return (
    <Section label="FV">
      <Container>
        <TwoColumn>
          <div>
            <h1>
              未来の選択肢を、
              <br />
              もっと身近なものへ。
            </h1>
            <p>
              私たちは、新しい価値を生み出すサービスを通じて、
              より良い体験を提供しています。
            </p>
          </div>
          <ImagePlaceholder label="メインビジュアル" />
        </TwoColumn>
      </Container>
    </Section>
  );
}
```

## コンポーネント一覧

| コンポーネント | Markdown記法 | 説明 |
| --- | --- | --- |
| `Section` | `## セクション名` | セクション。`label`でワイヤー上にセクション名を表示、`fill`で背景グレー |
| `Container` | — | コンテンツ幅（最大1120px）のコンテナ |
| `TwoColumn` | レイアウト補足コメント | PC: 2カラム / SP: 縦積み。`spReverse`でSPの表示順を反転 |
| `Columns` | レイアウト補足コメント | PC: 指定カラム数（`columns`、デフォルト3）/ SP: 縦積み |
| `ImagePlaceholder` | `[IMAGE]` `[IMAGE: ラベル]` | 画像プレースホルダー。`ratio`でアスペクト比指定 |
| `VideoPlaceholder` | `[VIDEO]` `[VIDEO: ラベル]` | 動画プレースホルダー |
| `UIPlaceholder` | `[UI: ラベル]` | UI画面プレースホルダー（ブラウザ風の枠） |
| `Button` | `[BUTTON: ラベル → /path/]` | ボタン |
| `MoreLink` | `[MORE → /path/]` | テキストリンク |
| `NewsList` | 日付＋タイトルの列挙 | お知らせ一覧 |

## レスポンシブ

- PC: 1440pxデザイン想定（コンテンツ幅 1120px）
- SP: 390pxデザイン想定
- ブレークポイント: 768px（767px以下をSPとして扱う）

余白・カラム数などはCSSカスタムプロパティ（`--wf-*`）で調整できます。

## 外部プロジェクトでの構成例

```text
wf-test-project/
└─ wireframe/
   ├─ pages/          # Markdownによるワイヤー定義
   │  ├─ top.md
   │  ├─ about.md
   │  └─ service.md
   ├─ src/
   │  └─ pages/       # Markdownを元に実装したReactページ
   │     ├─ TopPage.tsx
   │     ├─ AboutPage.tsx
   │     └─ ServicePage.tsx
   └─ screenshots/    # スクリーンショット出力先
```

## ディレクトリ構成

```text
wireframe-kit/
├─ src/               # ライブラリ本体
│  ├─ components/     # Wireframe Components
│  ├─ styles/         # 共通CSS
│  └─ index.ts        # エントリーポイント
├─ demo/              # サンプルページ（npm run dev で表示）
│  └─ pages/TopPage.tsx
├─ e2e/               # Playwrightスクリーンショットテスト
├─ screenshots/       # スクリーンショット出力先（git管理外）
└─ dist/              # ビルド成果物（git管理外）
```

## サンプル文章に関するルール

仕様書・README・テスト・サンプルページでは、実在の企業名・サービス名・案件のコピー・特定業界に強く依存した表現を避け、会社紹介・サービス紹介・特徴・お知らせ・CTAなど、一般的なWebサイトで理解しやすい匿名コンテンツを使用します。
