import { logWarn, log, yellow, green } from '@scullyio/scully/utils/log';
import { registerPlugin } from '@scullyio/scully';
import { JSDOM } from 'jsdom';


const hostCdn = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.20.0/components';

const getLang = (cls: string) => {

  let prismFile = (lang: string) => `prism-${lang}.min.js`;

  switch (true) {
    case /xml|html|mathml|svg/.test(cls): return prismFile('markup');
    case /ts|typescript/.test(cls): return prismFile('typescript');
    case /js|javascript/.test(cls): return prismFile('javascript');
    case /sh|shell|bash/.test(cls): return prismFile('bash');
    case /css|scss|sass/.test(cls): return prismFile(cls);
    case /json5/.test(cls): return prismFile('json5');
    case /json/.test(cls): return prismFile('json');
    default: return null;
  }
}

const addPrismJsPlugin = async (html: string, routeData) => {
  const route = routeData.route;

  try {
    const dom = new JSDOM(html);
    const { window } = dom;

    const codeElements = window.document.querySelectorAll('pre > code');

    if (!codeElements) {
      logWarn(`Nenhum bloco de código encontrado na página.`);
      return html;
    }

    const codes = Array.from(codeElements)
      .map(({ classList }) =>
        classList.value.replace('language-', ''));

    const langs = new Set(codes);

    const addScript = (file: string) => {
      const script = window.document.createElement('script');
      script.defer = true;
      script.src = `${hostCdn}/${file}`;
      return window.document.body.appendChild(script);
    }
    for (const lang of langs) {
      const file = getLang(lang);
      if (!!file && addScript(file)) {
        log(`PrismJS for ${green(lang)} language added to page ${yellow(route)}`);
      }
    }
    return dom.serialize();
  } catch (err) {
    logWarn(`An error has occurred. I couldn't add prismjs script to the page ${yellow(route)}`);
  }
  return html;
}

export const AddPrismJs = 'addPrismJs';
registerPlugin('render', AddPrismJs, addPrismJsPlugin);