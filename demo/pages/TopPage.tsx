import {
  Button,
  Columns,
  Container,
  ImagePlaceholder,
  MoreLink,
  NewsList,
  Section,
  TwoColumn,
} from "../../src";

/**
 * 仕様書のMarkdownサンプル（TOP）を再現したサンプルページ。
 */
export function TopPage() {
  return (
    <main className="wf-body">
      {/* FV */}
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
                <br />
                より良い体験を提供しています。
              </p>
            </div>
            <ImagePlaceholder label="メインビジュアル" />
          </TwoColumn>
        </Container>
      </Section>

      {/* ABOUT */}
      <Section label="ABOUT">
        <Container>
          <TwoColumn>
            <div>
              <h2>私たちについて</h2>
              <p>
                さまざまな課題と向き合いながら、
                <br />
                お客様にとって最適な方法を考え、実行しています。
              </p>
              <p>
                <Button href="/about/">詳しく見る</Button>
              </p>
            </div>
            <ImagePlaceholder label="オフィスイメージ" />
          </TwoColumn>
        </Container>
      </Section>

      {/* SERVICE: PCでは3カラム、SPでは縦積み */}
      <Section label="SERVICE" fill>
        <Container>
          <div className="wf-align-center">
            <h2>サービス</h2>
            <p>
              お客様の目的や課題に合わせて、
              <br />
              複数のサービスを提供しています。
            </p>
          </div>
          <Columns columns={3} className="wf-stack-top">
            <div>
              <ImagePlaceholder label="サービス紹介イメージ" />
              <h3>Service A</h3>
              <p>
                課題を整理し、
                <br />
                最適な方法をご提案します。
              </p>
              <MoreLink href="/service/a/" />
            </div>
            <div>
              <ImagePlaceholder label="サービス紹介イメージ" />
              <h3>Service B</h3>
              <p>
                計画から実行まで、
                <br />
                継続的にサポートします。
              </p>
              <MoreLink href="/service/b/" />
            </div>
            <div>
              <ImagePlaceholder label="サービス紹介イメージ" />
              <h3>Service C</h3>
              <p>
                状況に合わせた改善を行い、
                <br />
                より良い成果を目指します。
              </p>
              <MoreLink href="/service/c/" />
            </div>
          </Columns>
        </Container>
      </Section>

      {/* FEATURES */}
      <Section label="FEATURES">
        <Container>
          <div className="wf-align-center">
            <h2>選ばれる理由</h2>
          </div>
          <Columns columns={3}>
            <div>
              <h4>Feature 01</h4>
              <h3>幅広い課題に対応</h3>
              <p>
                さまざまな状況に合わせて、
                <br />
                柔軟な提案を行います。
              </p>
            </div>
            <div>
              <h4>Feature 02</h4>
              <h3>一貫したサポート</h3>
              <p>
                検討段階から実行後まで、
                <br />
                継続してサポートします。
              </p>
            </div>
            <div>
              <h4>Feature 03</h4>
              <h3>豊富な実績</h3>
              <p>
                これまでの経験を活かし、
                <br />
                課題解決を支援します。
              </p>
            </div>
          </Columns>
        </Container>
      </Section>

      {/* NEWS */}
      <Section label="NEWS">
        <Container>
          <h2>お知らせ</h2>
          <NewsList
            items={[
              { date: "2026.01.01", title: "お知らせのタイトルが入ります。", href: "/news/1/" },
              { date: "2025.12.01", title: "お知らせのタイトルが入ります。", href: "/news/2/" },
            ]}
          />
          <p>
            <MoreLink href="/news/" />
          </p>
        </Container>
      </Section>

      {/* CTA */}
      <Section label="CTA" fill>
        <Container>
          <div className="wf-align-center">
            <h2>お気軽にお問い合わせください</h2>
            <p>
              サービスについてのご質問やご相談など、
              <br />
              お気軽にお問い合わせください。
            </p>
            <p>
              <Button href="/contact/">お問い合わせ</Button>
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
