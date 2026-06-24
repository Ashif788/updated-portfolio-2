import React from 'react';

function Style() {
  return (
    <div id="top">
      {/* header ================================================== */}
      <header>
        <div className="row">
          <div className="top-bar">
            <a className="menu-toggle" href="#"><span>Menu</span></a>

            <div className="logo">
              <a href="index.html">KARDS</a>
            </div>

            <nav id="main-nav-wrap">
              <ul className="main-navigation">
                <li><a href="index.html#intro" title="">Home</a></li>
                <li><a href="index.html#about" title="">About</a></li>
                <li><a href="index.html#resume" title="">Resume</a></li>
                <li><a href="index.html#portfolio" title="">Portfolio</a></li>
                <li><a href="index.html#services" title="">Services</a></li>
                <li><a className="smoothscroll" href="#contact" title="">Contact</a></li>
                <li><a href="styles.html" title="">Style Demo</a></li>
              </ul>
            </nav>
          </div> {/* /top-bar */}
        </div> {/* /row */}
      </header> {/* /header */}

      {/* intro section ================================================== */}
      <section id="intro">
        <div className="intro-overlay"></div>

        <div className="intro-content">
          <div className="row">
            <div className="col-twelve">
              <h5>Hello, World.</h5>
              <h1>I'm Juan Dela Cruz.</h1>

              <p className="intro-position">
                <span>Front-end Developer</span>
                <span>UI/UX Designer</span>
              </p>

              <a className="button stroke smoothscroll" href="#about" title="">More About Me</a>
            </div>
          </div>
        </div> {/* /intro-content */}

        <ul className="intro-social">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-behance"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        </ul> {/* /intro-social */}
      </section> {/* /intro */}

      {/* Style Demo ================================================== */}
      <section id="styles" style={{ background: 'white', paddingTop: '12rem', paddingBottom: '12rem' }}>
        <div className="row section-intro" style={{ maxWidth: '1024px' }}>
          <div className="col-twelve" style={{ maxWidth: '800px' }}>
            <h1>Style Guide.</h1>
            <p className="lead">
              Lorem ipsum Officia elit ad tempor dolore est ex incididunt incididunt occaecat culpa deserunt sunt labore in cillum ullamco magna in Excepteur consequat in reprehenderit proident mollit incididunt officia commodo.
              Duis ea officia sed dolor pariatur enim dolore dolore quis incididunt nulla exercitation commodo veniam et ea incididunt.
            </p>
          </div>
        </div> {/* /row */}

        <div className="row" style={{ maxWidth: '1024px' }}>
          <div className="col-six tab-full">
            <h3>Paragraph and Image</h3>
            <p>
              <a href="#">
                <img width="120" height="120" className="pull-left" alt="sample-image" src="images/sample-image.jpg" />
              </a>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum.
              Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu
              posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum
              odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra
              condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque.
              posuere nunc justo tempus leo.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec libero. Suspendisse bibendum.
              Cras id urna. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu
              posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum
              odio, ac blandit ante orci ut diam.
            </p>

            <p>A <a href="#">link</a>,{' '}
              <abbr title="this really isn't a very good description">abbreviation</abbr>,{' '}
              <strong>strong text</strong>,{' '}
              <em>em text</em>,{' '}
              <del>deleted text</del>, and{' '}
              <mark>this is a mark text.</mark>{' '}
              <code>.code</code>
            </p>
          </div>

          <div className="col-six tab-full">
            <h3>Drop Caps</h3>
            <p className="drop-cap">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
              Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. Morbi tincidunt, orci ac convallis aliquam, lectus turpis varius lorem, eu posuere nunc justo tempus leo. Donec mattis, purus nec placerat bibendum, dui pede condimentum odio, ac blandit ante orci ut diam. Cras fringilla magna. Phasellus suscipit, leo a pharetra condimentum, lorem tellus eleifend magna, eget fringilla velit magna id neque.
            </p>

            <h3>Small Print</h3>
            <p>Buy one widget, get one free!{' '}
              <small>(While supplies last. Offer expires on the vernal equinox. Not valid in Ohio.)</small>
            </p>
          </div>
        </div> {/* /row */}

        <div className="row" style={{ maxWidth: '1024px' }}>
          <div className="col-six tab-full">
            <h3>Pull Quotes</h3>
            <aside className="pull-quote">
              <blockquote>
                <p>
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a small line of blind text by the name
                  of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
              </blockquote>
            </aside>
          </div>

          <div className="col-six tab-full">
            <h3>Block Quotes</h3>
            <blockquote cite="http://where-i-got-my-info-from.com">
              <p>
                Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                to do what you believe is great work. And the only way to do great work is to love what you do.
                If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
              </p>
              <cite>
                <a href="#">Steve Jobs</a>
              </cite>
            </blockquote>

            <blockquote>
              <p>Good design is as little design as possible.</p>
              <cite>Dieter Rams</cite>
            </blockquote>
          </div>
        </div> {/* /row */}

        <div className="row half-bottom" style={{ maxWidth: '1024px' }}>
          <div className="col-six tab-full">
            <h3>Example Lists</h3>
            <ol>
              <li>Here is an example</li>
              <li>of an ordered list.</li>
              <li>A parent list item.
                <ul>
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
                </ul>
              </li>
              <li>A list item.</li>
            </ol>

            <ul className="disc">
              <li>Here is an example</li>
              <li>of an unordered list.</li>
            </ul>

            <h3>Definition Lists</h3>
            <h5>a) Multi-line Definitions (default)</h5>
            <dl>
              <dt><strong>This is a term</strong></dt>
              <dd>this is the definition of that term, which both live in a <code>dl</code>.</dd>
              <dt><strong>Another Term</strong></dt>
              <dd>And it gets a definition too, which is this line</dd>
              <dd>This is a 2<sup>nd</sup> definition for a single term. A <code>dt</code> may be followed by multiple <code>dd</code>s.</dd>
            </dl>
          </div>

          <div className="col-six tab-full">
            <h3>Headers</h3>
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <h5>H5 Heading</h5>
            <h6>H6 Heading</h6>

            <h3>Buttons</h3>
            <p>
              <a className="button button-primary full-width" href="#">Primary Button</a>
              <a className="button full-width" href="#">Default Button</a>
              <a className="button stroke full-width" href="#">Stroke Button</a>
            </p>
          </div>
        </div> {/* /row */}

        <div className="row" style={{ maxWidth: '1024px' }}>
          <div className="col-twelve">
            <h3>Stats Tabs</h3>
            <ul className="stats-tabs">
              <li><a href="#">1,234 <em>Sasuke</em></a></li>
              <li><a href="#">567 <em>Hinata</em></a></li>
              <li><a href="#">23,456 <em>Naruto</em></a></li>
              <li><a href="#">3,456 <em>Kiba</em></a></li>
              <li><a href="#">456 <em>Shikamaru</em></a></li>
              <li><a href="#">26 <em>Sakura</em></a></li>
            </ul>
          </div>
        </div> {/* /row */}

        <div className="row half-bottom" style={{ maxWidth: '1024px' }}>
          <div className="col-six tab-full">
            <h3>Responsive Image</h3>
            <p><img src="images/portfolio/modals/m-lighthouse.jpg" alt="Lighthouse" /></p>
          </div>

          <div className="col-six tab-full">
            <h3>Responsive video</h3>
            <div className="fluid-video-wrapper">
              <iframe 
                src="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" 
                width="500" 
                height="281" 
                frameBorder="0" 
                webkitallowfullscreen="true" 
                mozallowfullscreen="true" 
                allowFullScreen={true}>
              </iframe>
            </div>
          </div>
        </div> {/* /row */}

        <div className="row add-bottom" style={{ maxWidth: '1024px' }}>
          <div className="col-twelve">
            <h3>Tables</h3>
            <p>Be sure to use properly formed table markup with <code>&lt;thead&gt;</code> and <code>&lt;tbody&gt;</code> when building a <code>table</code>.</p>

            <div className="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Naruto Uzumaki</td>
                    <td>16</td>
                    <td>Male</td>
                    <td>Konoha</td>
                  </tr>
                  <tr>
                    <td>Sakura Haruno</td>
                    <td>16</td>
                    <td>Female</td>
                    <td>Konoha</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> {/*row */}

        <div className="row" style={{ maxWidth: '1024px' }}>
          <div className="col-six tab-full">
            <h3>Form Styles</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="sampleInput">Your email</label>
                <input className="full-width" type="email" placeholder="test@mailbox.com" id="sampleInput" />
              </div>
              <div>
                <label htmlFor="sampleRecipientInput">Reason for contacting</label>
                <div className="ss-custom-select">
                  <select className="full-width" id="sampleRecipientInput">
                    <option value="Option 1">Questions</option>
                    <option value="Option 2">Report</option>
                    <option value="Option 3">Others</option>
                  </select>
                </div>
              </div>

              <label htmlFor="exampleMessage">Message</label>
              <textarea className="full-width" placeholder="Your message" id="exampleMessage"></textarea>

              <label className="add-bottom">
                <input type="checkbox" />
                <span className="label-text">Send a copy to yourself</span>
              </label>

              <input className="button-primary" type="submit" value="Submit" />
            </form>
          </div>

          <div className="col-six tab-full">
            <h3>Skill Bars</h3>
            <ul className="skill-bars">
              <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>HTML5</strong>
              </li>
              <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>CSS3</strong>
              </li>
              <li>
                <div className="progress percent70"><span>70%</span></div>
                <strong>JQuery</strong>
              </li>
              <li>
                <div className="progress percent95"><span>95%</span></div>
                <strong>PHP</strong>
              </li>
              <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>Wordpress</strong>
              </li>
            </ul> {/* /skill-bars */}

            <h3>Alert Boxes</h3>
            <div className="alert-box ss-error hideit">
              <p>Error Message. Your Message Goes Here.</p>
              <i className="fa fa-times close"></i>
            </div>{/* /error */}

            <div className="alert-box ss-success hideit">
              <p>Success Message. Your Message Goes Here.</p>
              <i className="fa fa-times close"></i>
            </div>{/* /success */}

            <div className="alert-box ss-info hideit">
              <p>Info Message. Your Message Goes Here.</p>
              <i className="fa fa-times close"></i>
            </div>{/* /info */}

            <div className="alert-box ss-notice hideit">
              <p>Notice Message. Your Message Goes Here.</p>
              <i className="fa fa-times close"></i>
            </div>{/* /notice */}
          </div>
        </div> {/* /row */}
      </section> {/*styles */}

      {/* contact ================================================== */}
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
            <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
          </div>
        </div> {/* /section-intro */}

        <div className="row contact-form">
          <div className="col-twelve">
            {/* form */}
            <form name="contactForm" id="contactForm" onSubmit={(e) => e.preventDefault()}>
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="Name" minLength="2" required />
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" required />
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" />
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required></textarea>
                </div>
                <div className="form-field">
                  <button className="submitform">Submit</button>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form> {/* Form End */}

            {/* contact-warning */}
            <div id="message-warning"></div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div>
          </div> {/* /col-twelve */}
        </div> {/* /contact-form */}

        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-pin"></i>
            </div>
            <h5>Where to find me</h5>
            <p>
              1600 Amphitheatre Parkway<br />
              Mountain View, CA<br />
              94043 US
            </p>
          </div>

          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="icon-mail"></i>
            </div>
            <h5>Email Me At</h5>
            <p>
              someone@kardswebsite.com<br />
              info@kardswebsite.com
            </p>
          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="icon-phone"></i>
            </div>
            <h5>Call Me At</h5>
            <p>
              Phone: (+63) 555 1212<br />
              Mobile: (+63) 555 0100<br />
              Fax: (+63) 555 0101
            </p>
          </div>
        </div> {/* /contact-info */}
      </section> {/* /contact */}

      {/* footer ================================================== */}
      <footer>
        <div className="row">
          <div className="col-six tab-full pull-right social">
            <ul className="footer-social">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-behance"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>

          <div className="col-six tab-full">
            <div className="copyright">
              <span>© Copyright Kards 2016.</span>{' '}
              <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>
            </div>
          </div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
          </div>
        </div> {/* /row */}
      </footer>

     
    </div>
  );
}

export default Style;