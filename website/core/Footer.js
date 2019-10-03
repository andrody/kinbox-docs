/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href="/docs/into/geting-started-into">
              Começando
            </a>
            <a href="/docs/guides/bot">
              Configurando o bot
            </a>
            <a href="/docs/guides/create-campain">
              Crie sua campannha de mensagens
            </a>
            <a href="/docs/guides/add-channel-custom">
              Adicione seu chat ao kinbox
            </a>
          </div>
          <div>
            <h5>Kinbox</h5>
            <a target="_blank" href="https://www.kinbox.com.br">
              Landpage
            </a>
            <a
              href="https://www.kinbox.com.br/pricing"
              target="_blank"
              rel="noreferrer noopener">
              Preços
            </a>
            <a target="_blank" href="https://www.kinbox.com.br/user/login">Entrar</a>
            <a
              href="https://www.kinbox.com.br/user/register"
              target="_blank"
              rel="noreferrer noopener">
              Cadastrar
            </a>
          </div>
          <div>
            <h5>Redes sociais</h5>
            <a target="_blank" href="https://www.instagram.com/kinbox.koruja">Instagram</a>
            <a target="_blank" href="https://www.facebook.com/kinbot91/">Facebook</a>
            <a target="_blank" href="https://twitter.com/Kinbox5">Twitter</a>
            <a target="_blank" href="https://www.youtube.com/channel/UC7Pdx6TN3KpQktcDgXEVPRg">YouTube</a>
          </div>
        </section>
        <a
          href="https://opensource.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`${this.props.config.baseUrl}img/oss_logo.png`}
            alt="Facebook Open Source"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
