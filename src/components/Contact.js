import React from 'react';
import Angle from './Angle';
import Button from './Button';

const Contact = () => {
  return (
    <div>
      <Angle theme="coolblue" page="contact" />
      <div className="angle coolbackground w-100 absolute">
        <div className="contact-angle-height coolblue-gradient"></div>
      </div>

      <div className="cf mw8 center pv4 ph4 pl6-l">
        <h1 className="limeade f6 mt0 ttu fw4 tracked">CONTACT</h1>
        <div className="cf mt2 light-blue">
          <p className="f6 f4-ns fw5 mw8 white measure lh-copy">
            Hi! I'm Dave. Nice to meet you. You can usually find me online as <span className="light-blue">three60five</span>. Get in touch!
          </p>
          <dl className="fl fn-l w-100 w-50-l mt0 mt1-l dib-l w-auto-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Email</dd>
            <dd className="f4 f3-ns fw5 ml0"><a className="link underline-hover white" href="mailto:dave@three60five.com">dave@three60five.com</a></dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l mt0 mt1-l lh-title mr5-l">
            <dd className="f6 fw4 ml0">Facebook</dd>
            <dd className="f4 f3-ns fw5 ml0"><a className="link underline-hover white" href="https://www.facebook.com/three60five">three60five</a></dd>
          </dl>
          <dl className="fl fn-l w-50 dib-l w-auto-l mt0 mt1-l lh-title">
            <dd className="f6 fw4 ml0">Twitter</dd>
            <dd className="f4 f3-ns fw5 ml0"><a className="link underline-hover white" href="https://twitter.com/three60five">@three60five</a></dd>
          </dl>
        </div>
        <div className="cf mt3 w-100">
          <Button extraClasses="dt ph4 mb2" theme="limeade" buttonLink="davidallen_resume.pdf" buttonText="Download Résumé" />
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 mt6-ns center ph4 ph6-l mw9">
        <div className="w-100 w-50-l">
          <img src="/img/profile_pic.jpg" alt="David Allen" className="pictureframe center db" />
        </div>
        <div className="w-100 w-50-l mt5 mt0-l">
          <h1 className="mt0 limeade f6 ttu fw4 tracked w-100 w-80-ns center">About Me</h1>
          <p className="f4 fw4 lh-copy mt3 w-100 w-80-ns center">
            I made my first website the summer after I graduated high school in 1996. I remember the excitement of that moment and how it grabbed ahold of me. Almost immediately I had some notion of the immense potential of the Internet to change the world.
          </p>
          <p className="f4 fw4 lh-copy mt3 w-100 w-80-ns center">
            Twenty years later, we are still witness to this technology in its infancy. Now more than ever, I am passionate about the way the Internet can be a tool to bring people together, expand our horizons, and make the world a better place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
