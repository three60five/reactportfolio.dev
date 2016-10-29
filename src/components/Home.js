import React from 'react';
import Angle from './Angle';
import Button from './Button';

const Home = () => {
  return (
    <div>
      <Angle theme="coolgray" page="home" />

      <div className="mw8 center pa3 ph4 ph5-ns">
        <h1 className="f6 ttu fw4 tracked">About</h1>
        <p className="f3 f2-m f1-l fw6 measure lh-copy mt3">
          I specialize in content-focused UX/UI design, rapid prototyping, living style guides, and responsive front-end development.
        </p>
        <p className="f4 f2-ns mw8 measure lh-copy">
          I believe good design is simple, fast, accessible, collaborative, and always centered on the user.
        </p>
        <div className="w-100">
          <Button extraClasses="dt ph4" theme="caramel" buttonLink="davidallen_resume.pdf" buttonText="Download Résumé" />
        </div>
      </div>

      <div className="mw9 mt3 mt4-ns center pa3 ph3">
        <h1 className="f3 ttu fw7 tc tracked">Featured Work</h1>
        <div className="cf mt4">
          <div className="fl w-100 w-33-l">
            <a href="work.html" className="db link tc less-dim">
              <img src="/img/sites/jonsolo_flick.jpg" alt="Jon Solo Music" className="pictureframe w-80 center db"/>
              <dl className="mv4 f5 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Jon Solo Music</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">Freelance Developer</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100 w-33-l mt4 mt0-ns">
            <a href="work.html" className="db link bg-animate tc less-dim">
              <img src="/img/sites/emc_isilon_onefs.png" alt="EMC Isilon Storage Division" className="pictureframe w-80 center db"/>
              <dl className="mv4 f5 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">EMC Isilon Storage Division</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">Software Engineer | UI Team</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100 w-33-l mt4 mt0-ns">
            <a href="work.html" className="db link tc less-dim">
              <img src="/img/sites/bbg_cherries.png" alt="Brooklyn Botanic Garden" className="pictureframe w-80 center db"/>
              <dl className="mv4 f5 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Brooklyn Botanic Garden</dd>
                <dt className="clip">Artist</dt>
                <dd className="ml0 gray truncate w-100">Website Manager</dd>
              </dl>
            </a>
          </div>
        </div>
        <div className="w-100">
          <Button extraClasses="dt center ph4" theme="caramel" buttonLink="work" buttonText="View More" />
        </div>
      </div>

      <div className="home-playground-background vh-100 vh-75-ns mt5 pb6 dt w-100 tc white cover">
        <h1 className="home-playground-text tc mb0 mb4-ns mt3 mt2-l pt2 pt4-l fw9 tracked play">PLAYGROUND</h1>
        <p className="ph4 ph5-ns black measure f6 f5-ns lh-copy center">
          In my free time, I like to write, travel, take photographs, make videos, and throw the ball with my dog Jack.<br />
        <Button extraClasses="dib ph5 mv3" theme="caramel" buttonLink="work" buttonText="Explore" />
        </p>
      </div>
    </div>
  )
}

export default Home
