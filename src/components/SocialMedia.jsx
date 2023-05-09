import React from 'react';
import { BsTwitter, BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
     <a href='https://twitter.com/itzclyro'> <BsTwitter /></a>
    </div>
    <div>
      <a href='https://www.instagram.com/sakshamexo'><BsInstagram /></a>
    </div>
    <div>
      <a href='https://www.linkedin.com/in/saksham-v-9a1426120/'><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/codesak'><BsGithub/></a>
    </div>
  </div>
);

export default SocialMedia;