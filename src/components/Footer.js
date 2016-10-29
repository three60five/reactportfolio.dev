import React from 'react';

const Footer = (props) => {
  return (
    <div>
      <footer className="mt5 pv4 ph3 ph5-ns tc">
        <a className="icon link dim gray dib h2 w3 br-100 mr4" href="https://www.facebook.com/three60five" title="Facebook">
          <svg data-icon="facebook" viewBox="0 0 32 32" className={`${props.theme}`}>
            <title>facebook icon</title>
            <path d="M8 12 L13 12 L13 8 C13 2 17 1 24 2 L24 7 C20 7 19 7 19 10 L19 12 L24 12 L23 18 L19 18 L19 30 L13 30 L13 18 L8 18 z"></path>
          </svg>
          <small className="db tc">Facebook</small>
        </a>
        <a className="icon link dim gray dib h2 w3 br-100 mr4" href="https://twitter.com/three60five" title="Twitter">
          <svg data-icon="twitter" viewBox="0 0 32 32" className={`${props.theme}`}>
            <title>twitter icon</title>
            <path d="M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4"></path>
          </svg>
          <small className="db tc">Twitter</small>
        </a>
        <a className="icon link dim gray dib h2 w3 br-100" href="davidallen_resume.pdf" title="Résumé">
          <svg data-icon="twitter" viewBox="0 0 32 32" className={`${props.theme}`}>
            <title>Résumé icon</title>
            <path d="M4 2 L4 30 L28 30 L28 10 L20 2 z"></path>
          </svg>
          <small className="db tc">Résumé</small>
        </a>
        <div className="mt4"><small className="f4-ns">&copy; <script type="text/javascript">document.write(new Date().getFullYear());</script> by <a className="link dim underline-hover black" href="mailto:dave@three60five.com">dave at three60five.com</a>.</small></div>
      </footer>
    </div>
  )
}

export default Footer
