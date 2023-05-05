import React from 'react'

import { Helmet } from 'react-helmet'
import triangle from './images/Rectangle 52.png'
import eclipse13 from './images/Ellipse 13.png'
import polygon from './images/Polygon 1.png'
import eclipse16 from './images/Ellipse 16.png'
import ellipseImage from './images/Ellipse 16.png';
import './home.css'

const Home = (props) => {
  // function handleDownload() {
  //   const link = document.createElement('a');
  //   link.href = 'https://docs.google.com/document/d/1CFUM6rDoemGGGltK2LnbjsBXPj2SnLr0/edit';  // Replace with the actual path to your CV file
  //   link.download = 'https://docs.google.com/document/d/1CFUM6rDoemGGGltK2LnbjsBXPj2SnLr0/edit';  // Specify the filename for the downloaded file
  //   link.target = 'https://docs.google.com/document/d/1CFUM6rDoemGGGltK2LnbjsBXPj2SnLr0/edit';  // Open the link in a new tab/window
  //   link.click();
  // }
  function handleDownload() {
    window.open('https://docs.google.com/document/d/1CFUM6rDoemGGGltK2LnbjsBXPj2SnLr0/edit', '_blank');
  }
  
  return (
    <div className="home-container">
      <Helmet>
        <title>portfolio</title>
      </Helmet>
      <div className="home-home">
        <div className="home-group243">
          <div className="home-group244">
            <div className="home-mac-book-pro161">
              <div className="home-mainmenu">
                <span className="home-text">
                  <span className="home-text001">
                    <span>I’m Victor Kariuki</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span className="home-text005">Full-Stack</span>
                  <span>
                    {' '}
                    Developer
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <img
                  alt="Ellipse12111"
                  src={eclipse13}
                  className="home-ellipse12"
                />
                <img
                  alt="Ellipse16112"
                  src={eclipse13}
                  className="home-ellipse16"
                />
                <img
                  alt="Ellipse13113"
                  src={eclipse16}
                  className="home-ellipse13"
                />
                <img
                  alt="Ellipse171334"
                  src={polygon}
                  className="home-ellipse17"
                />
                <img
                  alt="Ellipse15114"
                  src={ellipseImage}
                  className="home-ellipse15"
                />
                <img
                  alt="Rectangle51115"
                  src={eclipse13}
                  className="home-rectangle51"
                />
                <img
                  alt="Rectangle52116"
                  src={triangle}
                  className="home-rectangle52"
                />
                <img
                  alt="Rectangle541333"
                  src={triangle}
                  className="home-rectangle54"
                />
                <img
                  alt="Polygon1117"
                  src="/playground_assets/polygon1117-cwat.svg"
                  className="home-polygon1"
                />
                <span className="home-text007">
                  <span>
                    <span>
                      a full stack developer where I can leverage my technical
                      skills,creativity, and problem-solving abilities to
                      deliver quality software solutions.Proficient in frontend
                      development languages: HTML, CSS, JavaScript,
                    </span>
                    <br></br>
                    <span>and React.</span>
                    <br></br>
                    <span>
                      Skilled in backend development languages: Ruby and Ruby on
                      Rails.
                    </span>
                    <br></br>
                    <span>
                      Knowledgeable in web development concepts, such as RESTful
                      APIs,
                    </span>
                    <br></br>
                    <span>MVC architecture, and agile methodologies.</span>
                    <br></br>
                    <span>
                      Familiarity with version control systems (Git), databases
                      (MySQL and
                    </span>
                    <br></br>
                    <span>MongoDB), and deployment tools (Render).</span>
                    <br></br>
                    <span>
                      Experience in developing responsive and accessible web
                      applications
                    </span>
                    <br></br>
                    <span>with user-centric design principles</span>
                  </span>
                </span>
                <a href="/contact">
  <button className="home-button-hireme">
    <button className="home-button-hireme1">
      <button className="home-button-hireme2">
        <div className="home-group74">
          <span className="home-text026">
            <span>HIRE ME</span>
          </span>
          <img
            alt="Frame125"
            src="/playground_assets/frame125-yw8.svg"
            className="home-frame"
          />
        </div>
      </button>
    </button>
  </button>
</a>

                <img
                  src="/playground_assets/react-removebg-preview-200h.png"
                  alt="image"
                  className="home-image"
                />
              </div>
              <img
                alt="Ellipse161335"
                src={polygon}
                className="home-ellipse161"
              />
            </div>
          </div>
          <img
            alt="Rectangle1130"
            src="/playground_assets/rectangle1130-hust-300w.png"
            className="home-rectangle1"
          />
          <div className="home-profile">
            <img
              alt="Profile136"
              src="/playground_assets/profile136-eob-200h.png"
              className="home-profile1"
            />
            <span className="home-text028 H4-18px">
              <span>Victor Kariuki</span>
            </span>
            <span className="home-text030 ParagraphProgress-15">
              <span>Full-stack Developer</span>
            </span>
            <img
              alt="Available139"
              src="/playground_assets/available139-abkj-200h.png"
              className="home-available"
            />
            <div className="home-social-icon">
              <div className="home-facebook">
                <img
                  alt="Ellipse9142"
                  src="/playground_assets/ellipse9142-een-200w.png"
                  className="home-ellipse9"
                />
                <div className="home-iconsfacebook"></div>
              </div>
              <div className="home-instagram">
                <img
                  alt="Ellipse9149"
                  src="/playground_assets/ellipse9149-8b56-200w.png"
                  className="home-ellipse91"
                />
                <div className="home-iconsinstagram">
                  <div className="home-iconsinstagram1">
                    <img
                      alt="Iconsinstagram152"
                      src="/playground_assets/iconsinstagram152-kvo.svg"
                      className="home-iconsinstagram2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-twitter">
                <img
                  alt="Ellipse9156"
                  src="/playground_assets/ellipse9156-1ss-200w.png"
                  className="home-ellipse92"
                />
                <div className="home-iconstwitter">
                  <div className="home-iconstwitter1">
                    <img
                      alt="Iconstwitter159"
                      src="/playground_assets/iconstwitter159-rumb.svg"
                      className="home-iconstwitter2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-linkeding">
                <img
                  alt="Ellipse18163"
                  src="/playground_assets/ellipse18163-jyy8-200w.png"
                  className="home-ellipse18"
                />
                <div className="home-iconslinkedin">
                  <div className="home-iconslinkedin1">
                    <img
                      alt="Iconslinkedin166"
                      src="/playground_assets/iconslinkedin166-mcgq.svg"
                      className="home-iconslinkedin2"
                    />
                  </div>
                </div>
              </div>
              <div className="home-youtube">
                <img
                  alt="Ellipse9170"
                  src="/playground_assets/ellipse9170-y9zg-200w.png"
                  className="home-ellipse93"
                />
                <div className="home-icons-github">
                  <div className="home-iconsfacebook1">
                    <img
                      alt="Iconsfacebook145"
                      src="/playground_assets/iconsfacebook145-9d55.svg"
                      className="home-iconsfacebook2"
                    />
                  </div>
                </div>
              </div>
              <img
                alt="GitHubMarkremovebgpreview13642"
                src="/playground_assets/githubmarkremovebgpreview13642-9k4c-200h.png"
                className="home-git-hub-markremovebgpreview1"
              />
            </div>
          </div>
          <img alt="Line6183" src="/playground_assets/line6183-d3e.svg" />
          <div className="home-about">
            <div className="home-age">
              <img
                alt="Rectangle2186"
                src="/playground_assets/rectangle2186-wd1b-200h.png"
                className="home-rectangle2"
              />
              <span className="home-text032 ParagraphProgress-15">
                <span>Age:</span>
              </span>
              <span className="home-text034 ParagraphProgress-15">
                <span>20</span>
              </span>
            </div>
            <div className="home-residence">
              <img
                alt="Rectangle3190"
                src="/playground_assets/rectangle3190-qpgn-200h.png"
                className="home-rectangle3"
              />
              <span className="home-text036 ParagraphProgress-15">
                <span>Residence:</span>
              </span>
              <span className="home-text038 ParagraphProgress-15">
                <span>NAIROBI</span>
              </span>
            </div>
            <div className="home-freelance">
              <img
                alt="Rectangle4194"
                src="/playground_assets/rectangle4194-adjh-200h.png"
                className="home-rectangle4"
              />
              <span className="home-text040 ParagraphProgress-15">
                <span>Freelance:</span>
              </span>
              <span className="home-text042 ParagraphProgress-15">
                <span>Available</span>
              </span>
            </div>
            <div className="home-address">
              <img
                alt="Rectangle5198"
                src="/playground_assets/rectangle5198-8nhw-200h.png"
                className="home-rectangle5"
              />
              <span className="home-text044 ParagraphProgress-15">
                <span>Address:</span>
              </span>
              <span className="home-text046 ParagraphProgress-15">
                <span>2064-30100</span>
              </span>
            </div>
          </div>
          <img alt="Line31101" src="/playground_assets/line31101-n4lk.svg" />
          <div className="home-languages">
            <span className="home-text048 H4-18px">
              <span>Languages</span>
            </span>
            <div className="home-bangla">
              <span className="home-text050 ParagraphProgress-15">
                <span>English</span>
              </span>
              <span className="home-text052 ParagraphProgress-15">
                <span>100%</span>
              </span>
            </div>
            <div className="home-line">
              <img
                alt="Rectangle71109"
                src="/playground_assets/rectangle71109-b7p-200h.png"
                className="home-rectangle7"
              />
            </div>
            <div className="home-english">
              <span className="home-text054 ParagraphProgress-15">
                <span>Swahili</span>
              </span>
              <span className="home-text056 ParagraphProgress-15">
                <span>80%</span>
              </span>
            </div>
            <div className="home-line1">
              <img
                alt="Rectangle91115"
                src="/playground_assets/rectangle91115-5noh-200h.png"
                className="home-rectangle9"
              />
            </div>
          </div>
          <img alt="Line41116" src="/playground_assets/line41116-af9c.svg" />
          <div className="home-skills">
            <span className="home-text058 H4-18px">
              <span>Skills</span>
            </span>
            <div className="home-html">
              <span className="home-text060 ParagraphProgress-15">
                <span>React</span>
              </span>
              <span className="home-text062 ParagraphProgress-15">
                <span>90%</span>
              </span>
            </div>
            <div className="home-line2">
              <img
                alt="Rectangle151124"
                src="/playground_assets/rectangle151124-px6-200h.png"
                className="home-rectangle15"
              />
            </div>
            <div className="home-css">
              <span className="home-text064 ParagraphProgress-15">
                <span>CSS</span>
              </span>
              <span className="home-text066 ParagraphProgress-15">
                <span>85%</span>
              </span>
            </div>
            <div className="home-line3 home-line3">
              <img
                alt="Rectangle161130"
                src="/playground_assets/rectangle161130-yy2c-200h.png"
                className="home-rectangle16"
              />
            </div>
            <div className="home-js">
              <span className="home-text068 ParagraphProgress-15">
                <span>Js</span>
              </span>
              <span className="home-text070 ParagraphProgress-15">
                <span>80%</span>
              </span>
            </div>
            <div className="home-line4 home-line4">
              <img
                alt="Rectangle171136"
                src="/playground_assets/rectangle171136-efg-200h.png"
                className="home-rectangle17"
              />
            </div>
            <div className="home-php">
              <span className="home-text072 ParagraphProgress-15">
                <span>Ruby</span>
              </span>
              <span className="home-text074 ParagraphProgress-15">
                <span>75%</span>
              </span>
            </div>
            <div>
              <img
                alt="Rectangle191142"
                src="/playground_assets/rectangle191142-qng-200h.png"
                className="home-rectangle19"
              />
            </div>
            <div className="home-word-press">
              <span className="home-text076 ParagraphProgress-15">
                <span>HTML</span>
              </span>
              <span className="home-text078 ParagraphProgress-15">
                <span>85%</span>
              </span>
            </div>
            <div className="home-line6 home-line6">
              <img
                alt="Rectangle211148"
                src="/playground_assets/rectangle211148-uxep-200h.png"
                className="home-rectangle21"
              />
            </div>
          </div>
          <img
            alt="Line71149"
            src="/playground_assets/line71149-6ec.svg"
            className="home-line7"
          />
          <div className="home-extra-skills">
            <span className="home-text080 H4-18px">
              <span>Extra Skills</span>
            </span>
            <div className="home-bootstrap-materialize">
              <span className="home-text082 ParagraphProgress-15">
                <span>Bootstrap, Materialize</span>
              </span>
              <div className="home-icons">
                <div className="home-icons01">
                  <div className="home-icons02">
                    <div className="home-icons03">
                      <img
                        alt="Rectangle221158"
                        src="/playground_assets/rectangle221158-znhj-200h.png"
                        className="home-rectangle22"
                      />
                      <img
                        alt="Rectangle231159"
                        src="/playground_assets/rectangle231159-xhg-200h.png"
                        className="home-rectangle23"
                      />
                    </div>
                  </div>
                  <div className="home-icons04">
                    <div className="home-icons05">
                      <img
                        alt="Rectangle221162"
                        src="/playground_assets/rectangle221162-p8jo-200h.png"
                        className="home-rectangle221"
                      />
                      <img
                        alt="Rectangle231163"
                        src="/playground_assets/rectangle231163-uwz-200h.png"
                        className="home-rectangle231"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-stylus-sass-less">
              <span className="home-text084 ParagraphProgress-15">
                <span>photoshop,Lightroom</span>
              </span>
              <div className="home-icons06">
                <div className="home-icons07">
                  <div className="home-icons08">
                    <div className="home-icons09">
                      <img
                        alt="Rectangle221170"
                        src="/playground_assets/rectangle221170-90f-200h.png"
                        className="home-rectangle222"
                      />
                      <img
                        alt="Rectangle231171"
                        src="/playground_assets/rectangle231171-8ha8-200h.png"
                        className="home-rectangle232"
                      />
                    </div>
                  </div>
                  <div className="home-icons10">
                    <div className="home-icons11">
                      <img
                        alt="Rectangle221174"
                        src="/playground_assets/rectangle221174-ysxp-200h.png"
                        className="home-rectangle223"
                      />
                      <img
                        alt="Rectangle231175"
                        src="/playground_assets/rectangle231175-881-200h.png"
                        className="home-rectangle233"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-gulp-webpack-grunt">
              <span className="home-text086 ParagraphProgress-15">
                <span>Figma</span>
              </span>
              <div className="home-icons12">
                <div className="home-icons13">
                  <div className="home-icons14">
                    <div className="home-icons15">
                      <img
                        alt="Rectangle221182"
                        src="/playground_assets/rectangle221182-m3kh-200h.png"
                        className="home-rectangle224"
                      />
                      <img
                        alt="Rectangle231183"
                        src="/playground_assets/rectangle231183-qxh-200h.png"
                        className="home-rectangle234"
                      />
                    </div>
                  </div>
                  <div className="home-icons16">
                    <div className="home-icons17">
                      <img
                        alt="Rectangle221186"
                        src="/playground_assets/rectangle221186-dlj33-200h.png"
                        className="home-rectangle225"
                      />
                      <img
                        alt="Rectangle231187"
                        src="/playground_assets/rectangle231187-n8mg-200h.png"
                        className="home-rectangle235"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-gi-knowledge">
              <span className="home-text088 ParagraphProgress-15">
                <span>GIT Knowledge</span>
              </span>
              <div className="home-icons18">
                <div className="home-icons19">
                  <div className="home-icons20">
                    <div className="home-icons21">
                      <img
                        alt="Rectangle221194"
                        src="/playground_assets/rectangle221194-vqms-200h.png"
                        className="home-rectangle226"
                      />
                      <img
                        alt="Rectangle231195"
                        src="/playground_assets/rectangle231195-5rx-200h.png"
                        className="home-rectangle236"
                      />
                    </div>
                  </div>
                  <div className="home-icons22">
                    <div className="home-icons23">
                      <img
                        alt="Rectangle221198"
                        src="/playground_assets/rectangle221198-9jqn-200h.png"
                        className="home-rectangle227"
                      />
                      <img
                        alt="Rectangle231199"
                        src="/playground_assets/rectangle231199-qywa-200h.png"
                        className="home-rectangle237"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            alt="Line51200"
            src="/playground_assets/line51200-0pl.svg"
            className="home-line5 home-line5"
          />
          <button className="home-button-cv2">
            <button className="home-button-cv21">
            <button className="home-button-cv" onClick={handleDownload}>
  <img
    alt="Rectangle241204"
    src="/playground_assets/rectangle241204-u3l-200h.png"
    className="home-rectangle24"
  />
                <div className="home-group6">
                  <span className="home-text090">
                    <span>Download cv</span>
                  </span>
                  <img
                    alt="Frame1207"
                    src="/playground_assets/frame1207-7i0a.svg"
                    className="home-frame1"
                  />
                </div>
              </button>
            </button>
          </button>
          <img
            alt="IMG20221126WA0027removebgpreview11213"
            src="/playground_assets/img20221126wa0027removebgpreview11213-49gv-700h.png"
            className="home-img20221126wa0027removebgpreview1"
          />
          <span className="home-text092 H2-32px">
            <span>my services</span>
          </span>
          <div className="home-iconscoding">
            <div className="home-iconscoding1">
              <div className="home-iconscoding2">
                <div className="home-iconscoding3">
                  <div className="home-iconscoding4">
                    <div className="home-group">
                      <img
                        alt="Vector1227"
                        src="/playground_assets/vector1227-0qkr.svg"
                        className="home-vector"
                      />
                      <img
                        alt="Vector1228"
                        src="/playground_assets/vector1228-gkas.svg"
                        className="home-vector01"
                      />
                      <img
                        alt="Vector1229"
                        src="/playground_assets/vector1229-yycl.svg"
                        className="home-vector02"
                      />
                      <img
                        alt="Vector1230"
                        src="/playground_assets/vector1230-i2vd.svg"
                        className="home-vector03"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="home-text094 H4-18px">
            <span>web development</span>
          </span>
          <span className="home-text096 ParagraphProgress-15">
            <span>blog, e-commerce</span>
          </span>
          <div className="home-iconsillustration">
            <div className="home-iconsillustration1">
              <div className="home-iconsillustration2">
                <div className="home-iconsillustration3">
                  <div className="home-iconsillustration4">
                    <div className="home-group1">
                      <div className="home-group2">
                        <img
                          alt="Vector1242"
                          src="/playground_assets/vector1242-dsxdn.svg"
                          className="home-vector04"
                        />
                        <img
                          alt="Vector1243"
                          src="/playground_assets/vector1243-3yk9i.svg"
                          className="home-vector05"
                        />
                        <img
                          alt="Vector1244"
                          src="/playground_assets/vector1244-3e69.svg"
                          className="home-vector06"
                        />
                        <img
                          alt="Vector1245"
                          src="/playground_assets/vector1245-shc.svg"
                          className="home-vector07"
                        />
                        <img
                          alt="Vector1246"
                          src="/playground_assets/vector1246-ukv.svg"
                          className="home-vector08"
                        />
                        <img
                          alt="Vector1247"
                          src="/playground_assets/vector1247-kfxs.svg"
                          className="home-vector09"
                        />
                        <img
                          alt="Vector1248"
                          src="/playground_assets/vector1248-a1p.svg"
                          className="home-vector10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="home-text098">uI/uX design</span>
          <span className="home-text099 ParagraphProgress-15">
            <span>website design</span>
          </span>
          <img
            alt="downloadremovebgpreview11331"
            src="/playground_assets/downloadremovebgpreview11331-fzxf-200h.png"
            className="home-downloadremovebgpreview1"
          />
          <img
            alt="imagesremovebgpreview11315"
            src="/playground_assets/imagesremovebgpreview11315-v69i-300w.png"
            className="home-imagesremovebgpreview1"
          />
         <div className="home-navnavmenu">
  <span className="home-text101">Home</span>
  <a
    href='/about'
    rel="noreferrer noopener"
    className="home-text102"
  >
    About
  </a>
{/* </div> */}

            <a
    href='/contact'
              rel="noreferrer noopener"
              className="home-text103"
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
