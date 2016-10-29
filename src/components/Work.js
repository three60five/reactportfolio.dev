import React from 'react';
import Angle from './Angle';
import Button from './Button';

const Work = () => {
  return (
    <div>
      <Angle theme="coolblack" page="work" />

      <div className="cf mw7 m8-l center pv4 ph4 ph2-l pl6-l">
        <h1 className="light-creamsicle f6 mt0 ttu fw4 tracked">SKILLS</h1>
        <ul className="list white ph0 db mt3 f6 f4-m f3-l fw6 fw6-ns">
          <li className="dib mb3 mr2 mr3-ns">UX/UI Design</li>
          <li className="dib mb3 mr2 mr3-ns">Front-End Development</li>
          <li className="dib mb3 mr2 mr3-ns">Information Architecture</li>
          <li className="dib mb3 mr2 mr3-ns">Content Strategy</li>
          <li className="dib mb3 mr2 mr3-ns">Digital Media Production</li>
          <li className="dib mb3 mr2 mr3-ns">Agile Process</li>
        </ul>
        <div className="w-100">
          <Button extraClasses="dt ph4 mb2" theme="creamsicle" buttonLink="davidallen_resume.pdf" buttonText="Download Résumé" />
        </div>
      </div>

      <div className="work2-angle coolbackground w-100 absolute">
        <div className="work2-angle-height coolwhite-gradient"></div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 mt6-ns center ph3 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Seattle, WA</h4>
          <h1 className="f3 f2-m fw6 mt3 mb1 light-creamsicle">Freelance Developer</h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">three60five</h3>

        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h4 className="mt4 mt3-ns mb2 light-creamsicle f6 ttu fw4 tracked">Highlight</h4>
          <h1 className="mt0 mb2 f3 f2-ns">Jon Solo Music</h1>
          <img src="/img/sites/solo_responsive_cropped.jpg" className="mw-100" alt="jonsolomusic.com" />
          <div className="pv3 ph3 ph4-l mt0 bg-white">
            <h4 className="light-creamsicle f6 mt0 ttu fw4 tracked">Features</h4>
            <ul className="list black ph0 db mt3 f6 f4-m f3-l fw6 fw6-ns">
              <li className="dib mb3 mr2 mr3-ns">Mobile-First Responsive Design</li>
              <li className="dib mb3 mr2 mr3-ns">Touch-Friendly Swipe Navigation</li>
              <li className="dib mb3 mr2 mr3-ns">Adaptive Typography</li>
              <li className="dib mb3 mr2 mr3-ns">CSS Animations</li>
              <li className="dib mb3 mr2 mr3-ns">SVG Icons</li>
              <li className="dib mb3 mr2 mr3-ns">HTML5 Audio</li>
            </ul>
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
              Jon Solo had a unique set of requirements when he approached me about relaunching his website. First, it needed to look great on an iPhone. As a touring musician, he often needs to show prospective collaborators his website immediately, on the device that is in his pocket. Second, it should be focused on his career as a side musician, yet still showcase his own songwriting.
            </p>
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
              The content strategy was to simplify as much as possible. Let videos of his performances speak to his abilities and accomplishments. Use audio to demonstrate his mastery of instruments. Link to the social media accounts where he is already connecting with his audience.
            </p>
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
              From a UX design standpoint, I took the mobile-first requirement and ran with it. One of the most frustrating experiences on mobile is navigating a website. From hamburger menus with hidden navigation to pinching and zooming, the user experience can quickly degrade. Realizing we had such simple, interactive content, I modeled the navigation on the basic iPhone "swipe" gesture users are already familiar with. Solo loved it! He said it made his website fun to show people!
            </p>
            <Button extraClasses="dt ph4 mb2" theme="creamsicle" buttonLink="http://jonsolomusic.com/" buttonText="Visit Website" />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 center ph3 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Seattle, WA</h4>
          <h1 className="f3 f2-m fw6 mt3 mb1 lh-solid-ns lh-title light-creamsicle">Software Engineer<br /><span className="f4 f5-ns">User Interface Team</span></h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">EMC Isilon</h3>

        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h1 className="mt4 mt3-ns light-creamsicle f6 ttu fw4 tracked">Highlight</h1>
          <h1 className="mt0 mb2 f3 f2-ns">Rapid Prototyping</h1>
          <img src="/img/sites/onefs_cropped.jpg" className="mw-100" alt="OneFS Bootstrap Prototype" />
          <div className="pv3 ph3 ph4-l mt0 bg-lightpeach">
            <h4 className="light-creamsicle f6 mt0 ttu fw4 tracked">Tools &amp; Techniques</h4>
            <ul className="list black ph0 db mt3 f6 f4-m f3-l fw6 fw6-ns">
              <li className="dib mb3 mr2 mr3-ns">Agile Development</li>
              <li className="dib mb3 mr2 mr3-ns">Requirement Gathering</li>
              <li className="dib mb3 mr2 mr3-ns">Sketching &amp; Whiteboarding</li>
              <li className="dib mb3 mr2 mr3-ns">Workflow Mockups (Balsamiq &amp; Invision) </li>
              <li className="dib mb3 mr2 mr3-ns">Prototyping (Bootstrap)</li>
              <li className="dib mb3 mr2 mr3-ns">User Testing &amp; Feedback</li>
            </ul>
            <p className="db f6 f5-ns fw4 lh-copy mt3">
              At EMC, I was on the UI team charged with developing the JavaScript application for configuring OneFS, the operating system that powers EMC Isilon’s data storage hardware devices. The highlight of my experience was moving the UI team away from printed design specs that quickly became out of date and unwieldy, to a more collaborative process built on rapid prototyping with interactive workflow mockups.
            </p>
            <p className="db f6 f5-ns fw4 lh-copy mt3">
              My role was fluid: UX/UI designer, front-end developer, and project manager. My mission was to interpret complex features into easy to use and understand user interfaces. I was responsible for all phases of a feature&apos;s lifecycle: research, design, implementation, testing, and release. The team followed an agile software development model utilizing two-week sprints and daily stand-ups. I worked with individuals and teams across the entire engineering organization. My communication skills, collaborative nature, and attention to detail proved vital to my success.
            </p>
            <p className="db f5 fw7 light-creamsicle lh-copy mt3">
              Examples available by request
            </p>
          </div>
        </div>
      </div>

      <div className="work2-angle coolbackground w-100 absolute">
        <div className="work2-angle-height coolwhite-gradient"></div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 mt6-ns center ph3 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Brooklyn, NY</h4>
            <h1 className="f3 f2-m fw6 mt3 mb1 lh-title light-creamsicle">Website Manager</h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">Brooklyn Botanic Garden</h3>
        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h4 className="mt4 mt3-ns mb2 light-creamsicle f6 ttu fw4 tracked">Highlight</h4>
          <h1 className="mt0 mb2 f3 f2-ns">BBG Website Realignment</h1>
          <img src="/img/sites/bbg_redesign.jpg" className="mw-100 ba b--black-20" alt="Brooklyn Botanic Garden Realignment" />
          <div className="pv3 ph3 ph4-l mt0 bg-white">
            <h4 className="light-creamsicle f6 mt0 ttu fw4 tracked">Features</h4>
            <ul className="list black ph0 db mt3 f6 f4-m f3-l fw6 fw6-ns">
              <li className="dib mb3 mr2 mr3-ns">Static HTML to CMS</li>
              <li className="dib mb3 mr2 mr3-ns">On-Brand UI Design</li>
              <li className="dib mb3 mr2 mr3-ns">Data-driven IA Improvements</li>
              <li className="dib mb3 mr2 mr3-ns">Expanded Content Strategy</li>
              <li className="dib mb3 mr2 mr3-ns">Integrated Flickr API</li>
            </ul>
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
              Working under the Director of Publications, I engineered a massive realignment of Brooklyn Botanic Garden's main external website touching all facets of web development. I migrated the site from static HTML to the ExpressionEngine content management system. I used the site's existing analytics to intelligently update the IA. I collaborated with the marketing department to craft a design that complimented the existing branding and visual identity. I coordinated with staff to launch a blog, a dynamic event calendar, and other new content.
            </p>
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
              One of my favorite parts of the realignment was adding frequent, beautiful photography to the site dynamically via the Flickr API. Current images of plants in bloom, events, and all the grounds were easily added to the site just by uploading to Flickr and adding the appropriate tags. I also created unique time-lapse videos of plants in bloom that garnered signficant attention online.
            </p>
            <Button extraClasses="dt ph4 mb2" theme="creamsicle" buttonLink="http://v2.bbg.org/" buttonText="Visit Archived Website" />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 mt6-ns center ph3 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Brooklyn, NY</h4>
          <h1 className="f3 f2-m fw6 mt3 mb1 lh-title light-creamsicle">Website Producer</h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">Brooklyn Botanic Garden</h3>

        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h4 className="mt4 mt3-ns mb2 light-creamsicle f6 ttu fw4 tracked">Highlight</h4>
          <h1 className="mt0 mb2 f3 f2-ns">Urban Habitats</h1>
          <img src="/img/sites/urbanhabitats_redesign.jpg" className="mw-100" alt="Urban Habitats redesign" />
          <div className="pv3 ph3 ph4-l mt0 bg-lightpeach">
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
               During my stint as web production assistant, I redesigned the visual identity of Urban Habitats, an online scientific journal created by Brooklyn Botanic Garden.
            </p>
            <Button extraClasses="dt ph4 mb2" theme="creamsicle" buttonLink="http://urbanhabitats.org/" buttonText="Visit Archived Website" />
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 center ph4 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Bellingham, WA</h4>
          <h1 className="f3 f2-m fw6 mt3 mb1 lh-title light-creamsicle">IT Applications Specialist III</h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">Western Washington University</h3>

        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h4 className="mt4 mt3-ns mb2 light-creamsicle f6 ttu fw4 tracked">Highlight</h4>
          <h1 className="mt0 mb2 f3 f2-ns">Prospective Student Experience</h1>

          <div className="flex flex-row flex-wrap justify-start mt4 mw100">
            <div className="w-100 w-50-ns mb5">
              <img src="/img/sites/wwu_admissions.png" alt="Office of Admissions, WWU website screenshot" className="pictureframe w-80 center db" />
            </div>
            <div className="w-100 w-50-ns mb5">
              <img src="/img/sites/wwu_small.jpg" alt="Western Washington University website screenshot" className="pictureframe w-80 center db" />
            </div>
            <div className="w-100 w-50-ns mb5">
              <img src="/img/sites/housing_small.png" alt="University Residences, WWU website screenshot" className="pictureframe w-80 center db" />
            </div>
            <div className="w-100 w-50-ns mb5">
              <img src="/img/sites/wwu_honors.png" alt="Honors Program, WWU website screenshot" className="pictureframe w-80 center db" />
            </div>
          </div>
          <div className="pv3 ph3 ph4-l mt0 bg-white">
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
               While employed full-time in the Office of Admissions, I was frequently "loaned-out" to other offices related to the prospective student experience in order to update their online presence. I redesigned the University Residences and Honors program websites in this capacity. In addition, I served on a team that realigned the main university website including UX and IA design.
            </p>
            <p className="db f5 fw7 light-creamsicle lh-copy mt3">
              Screenshots available by request
            </p>
          </div>
        </div>
      </div>

      <div className="work2-angle coolbackground w-100 absolute">
        <div className="work2-angle-height coolwhite-gradient"></div>
      </div>

      <div className="flex flex-row flex-wrap justify-start mt5 center ph4 ph6-l mw9">
        <div className="w-100 w-30-l pr2 bt b--black-20">
          <h4 className="f4 f5-l fw4 mv3 gray">Bellingham, WA</h4>
          <h1 className="f3 f2-m fw6 mt3 mb1 lh-title light-creamsicle">Web Designer</h1>
          <h3 className="f4 f5-l fw4 mb3 mt1 black">Western Washington University</h3>

        </div>
        <div className="w-100 w-70-l bt-l b--black-20">
          <h4 className="mt4 mt3-ns mb2 light-creamsicle f6 ttu fw4 tracked">Highlight</h4>
          <h1 className="mt0 mb2 f3 f2-ns">postcard.wwu.edu</h1>
          <img src="/img/sites/postcard.jpg" className="w-100" alt="postcard.wwu.edu website screenshot" />
          <div className="pv3 ph3 ph4-l mt0 bg-lightpeach">
            <p className="db f6 f5-ns f4-l fw4 lh-copy mt3">
               As a student at WWU, I worked as a web designer for the Office of Admissions. One highlight during that time was pairing with another student developer and building postcard.wwu.edu, a web application for sending virtual postcards with custom messages.
            </p>
            <p className="db f5 fw7 light-creamsicle lh-copy mt3">
              Offline
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Work
