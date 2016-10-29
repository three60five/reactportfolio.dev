import React from 'react';
import Angle from './Angle';

const Play = () => {
  return (
    <div>
      <Angle theme="lightpurple" page="play" />

      <div className="cf mw7 m8-l center pv4 ph4 ph2-l pl6-l">
        <h1 className="sanjuanislands f6 mt0 ttu fw4 tracked">Interests</h1>
        <ul className="list sanjuanislands ph0 db mt3 f6 f4-m f3-l fw6 fw6-ns">
          <li className="dib mb3 mr2 mr3-ns">Humor Writing</li>
          <li className="dib mb3 mr2 mr3-ns">Science Fiction</li>
          <li className="dib mb3 mr2 mr3-ns">Photography &amp; Video</li>
          <li className="dib mb3 mr2 mr3-ns">Traveling</li>
          <li className="dib mb3 mr2 mr3-ns">Snorkeling</li>
          <li className="dib mb3 mr2 mr3-ns">Pinball</li>
          <li className="dib mb3 mr2 mr3-ns">Hiking &amp; Camping</li>
        </ul>
      </div>

      <div className="mw9 mt3 mt4-ns center pa3 ph3">
        <h1 className="sanjuanislands f3 ttu fw7 tc tracked">Recent Experiments</h1>
        <div className="cf mt4">
          <div className="fl w-100 w-50-l">
            <a href="http://three60five.com/fishyfishy/" className="db link tc dim">
              <img src="/img/sites/fishyfishy.png" alt="Fishy Fishy screenshot" className="pictureframe w-80 center db"/>
              <dl className="mv4 f5 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Fishy Fishy</dd>
                <dt className="clip">Description</dt>
                <dd className="ml0 gray truncate w-100">A Never-Ending Children's Book</dd>
              </dl>
            </a>
          </div>
          <div className="fl w-100 w-50-l mt4 mt0-ns">
            <a href="http://slomojack.com/" className="db link bg-animate tc less-dim">
              <img src="/img/sites/slomojack.jpg" alt="Slo-mo Jack screenshot" className="pictureframe w-80 center db"/>
              <dl className="mv4 f5 lh-copy">
                <dt className="clip">Title</dt>
                <dd className="ml0 black truncate w-100">Slo-mo Jack</dd>
                <dt className="clip">Description</dt>
                <dd className="ml0 gray truncate w-100">Pet Videos Made on an iPhone</dd>
              </dl>
            </a>
          </div>
        </div>
      </div>

      <div className="vh-100 vh-75-ns mt5 pb5 dt w-100 ph4 tc bg-light-sanjuanislands cover">
        <h1 className="tc mb2 mb4-ns mt3 mt2-l pt2 pt4-l fw9 trackeda ttu sanjuanislands">Writing</h1>
        <a href="http://internetzillionaire.com/" className="db link bg-animate tc less-dim">
          <img src="/img/sites/iz_screenshot.png" alt="Internet Zillionaire screenshot" className="ba b--black-20"/>
        </a>
        <div className="ph3 ph4-l mt0 mb5">
          <p className="sanjuanislands db f6 f5-ns f4-l fw4 lh-copy mt3">
            I've been writing humorous articles at Internet Zillionaire since 2004.
          </p>
          <a className="dt center f5 fw6 tc link hvr-outline-out-sanjuanislands hover-light-sanjuanislands ph4 pv2 bg-sanjuanislands white" href="http://internetzillionaire.com/">Visit Website</a>
        </div>

        <a href="https://spark.adobe.com/page/ltro0/" className="db link bg-animate tc less-dim">
          <img src="https://spark.adobe.com/page/ltro0/embed.jpg?buster=1475430324357" alt="Your feet will take you where your heart is" className="ba b--black-80" />
        </a>
        <div className="ph2 ph4-l mt0">
          <p className="sanjuanislands db f6 f5-ns f4-l fw4 lh-copy mt3">
            My wife and I recently went to the western coast of Ireland and I created a travelogue of our adventure.
          </p>
          <a className="dt center f5 fw6 tc link hvr-outline-out-sanjuanislands hover-light-sanjuanislands ph4 pv2 mb2 bg-sanjuanislands white" href="https://spark.adobe.com/page/ltro0/">Read Travelogue</a>
        </div>
      </div>

      <div className="coolbackground w-100 absolute">
        <div className="lightpurple-gradient"></div>
      </div>

      <div className="mb4 dt w-100 tc white cover">
        <h1 className="tc mb2 mb4-ns mt3 mt2-l pt2 pt4-l fw9 ttu tracked sanjuanislands">Photo &amp; Video</h1>
        <div className="w-80 mb4 center aspect-ratio aspect-ratio--16x9 ba b--light-sanjuanislands bw4">
          <iframe className="aspect-ratio--object" src="https://player.vimeo.com/video/182442478?byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>

        <div className="w-80 center aspect-ratio aspect-ratio--16x9 ba b--light-sanjuanislands bw4">
          <iframe className="aspect-ratio--object" src="https://player.vimeo.com/video/174431058?byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-start center ph4 ph6-l mw9">
        <div className="center mb4 ba b--light-sanjuanislands bw4">
          <img src="/img/rachel.gif" alt="Rachel animated gif" className="center db"/>
        </div>
        <div className="ba b--light-sanjuanislands bw4 center db">
          <img src="/img/jack.gif" alt="Jack animated gif" className="center db"/>
        </div>
      </div>
    </div>
  )
}

export default Play
