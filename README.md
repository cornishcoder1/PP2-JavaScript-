
# Website Name

<p>Introduction to the website and it's features</p>

<a href="" target="_blank" rel="noopener" aria-label="Link to open deployed site">Link to deployed site</a>

<img src="assets/images/am-i-responsive.png">

------

## UX

My website is aimed at cat owners who are looking for a cat sitting service for the first time, or to those looking for an alternative to placing their pet in a cattery while they are away. I have attempted to keep the website quite clean and clutter free, but also wanted to ensure that all essential information is present. The color scheme consists of #FEFEDF applied to header, footer, alternate sections on the homepage and text boxes, and #4E4351 as a main background color. The text is a darker variation of the purple background color. I generated a number of color palettes by using <a href="https://mycolor.space/?hex=%23845EC2&sub=1>">ColorSpace</a>. The main color I generated the palettes from was #845EC2. I wanted the design of the site to reflect a fun and playful feeling which comes with having a pet such as a cat, whilst also using colors and fonts which would give a modern and stylish finish.

Wireframes for desktop site:


<div align="center">

Home Page

![Desktop wireframe for Homepage](./assets/wireframes/home_page.png)

</div>

<div align="center">

About Us Page

![Desktop wireframe for About Us page](./assets/wireframes/about_us_page.png)

</div>

<div align="center">

Prices Page

![Desktop wireframe for Prices page](./assets/wireframes/prices_page.png)

</div>

<div align="center">

Contact Us Page

![Desktop wireframe for Contact Us page](./assets/wireframes/contact_us_page.png)

</div>

<div align="center">

Confirmation Page

![Desktop wireframe for Confirmation page](./assets/wireframes/confirmation_page.png)

</div>

## User Stories

As a new user I am:
- 

As an existing user I am: 
- 

------

## Features 

<div align="center">

**Navigation Bar and Footer**

The navigation bar and footer are featured on every page of the site. The former allows users to easily navigate to whichever part of the site they wish. A solid line appears under each link when the user hovers over with the mouse. The footer allows users to navigate to the relevant would-be social media channels for the business. 

![Screenshot of navigation bar](./assets/screenshots/screenshot_nav_bar.png)

![Screenshot of footer](./assets/screenshots/screenshot_footer.png)

</div>

<div align="center">

**Hero Section**

This section gives the user a clear list of areas covered as soon as they land on the site. I've attempted to make the homepage as inviting and visually pleasing as possible with the use of the cat photo, video and playful icons.  

![Screenshot of hero section](./assets/screenshots/screenshot_hero_section.png)

</div>

<div align="center">

**Video Section**

This section features a stock video from Pexels, showing cats at a fictional feeding time during a home visit. This video is not set to auto-play, allowing users to initiate and control actions on the video player.

![Screenshot of video section](./assets/screenshots/screenshot_video_section.png)

</div>

<div align="center">

**Icon Section**

I wanted this section to be a visually appealing section highlighting very succinctly why customers should choose this business. It highlights important features of the business and it's ethos in an easy to digest and attractive way.

![Screenshot of icon section](./assets/screenshots/screenshot_icon_section.png)

</div>

<div align="center">

**About Us Page**

This page contains the bulk of the information about the business, split into three easy to read sections which are broken up with images. It clearly states some of the business background and demonstrates enthusiasm for what they do, information on the benefits of cat sitting and testimonials from happy customers. These testimonials provide some added reassurance to the user that their pet would be in safe hands. 


![Screenshot of about us section](./assets/screenshots/screenshot_about_us.png)


![Screenshot of benefits section](./assets/screenshots/screenshot_benefits.png)


![Screenshot of testimonials section](./assets/screenshots/screenshot_testimonials.png)


</div>

<div align="center">

**Prices Page**

This page gives information about standard pricing in a table, which is clearly presented and easy to read. It also provides information on cancellation and how to make payment. 


![Screenshot of prices section](./assets/screenshots/screenshot_prices.png)


</div>

<div align="center">

**Contact Us and Confirmation Pages**

The Contact Us page contains a form element, which allows users to get in touch with the business. All fields (apart from the message field) are set as required which ensures all information is collected before the user can submit the form. The form allows users to specify the dates during which they require cat sitting services, number of cats to be cared for and gives the opportunity to ask specific questions within the message field. When the user clicks the submit button they are then presented with a confirmation page which informs them that they will be contacted soon. 


![Screenshot of contact form](./assets/screenshots/screenshot_form.png)

![Screenshot of confirmation page](./assets/screenshots/screenshot_confirmation.png)


</div>


## Features left to implement

I would like to expand on the interactivity of the site, perhaps implementing a fully functioning booking system which would allow users to select dates, times etc. and make payment in one seamless transaction. It would also be good to have a blog page, featuring articles on business news and cat care to help drive traffic to the site and generate interest in the business. 

------

## Technologies used

- HTML
- CSS
- JavaScript
- Gitpod
- GitHub

## Other resources used

<a href="http://ami.responsivedesign.is/#"> - Am I Responsive</a>

<a href="https://balsamiq.com"> - Balsamiq</a>

<a href="https://developer.chrome.com/docs/devtools"> - Chrome Dev Tools</a>

<a href="https://mycolor.space/?hex=%23845EC2&sub=1>"> - ColorSpace</a>

<a href="http://www.flaticon.com/"> - Flaticon</a>

<a href="https://fontawesome.com/"> - Font Awesome</a>

<a href="https://fonts.google.com/"> - Google Fonts</a>

<a href="https://www.webfx.com/web-design/hex-to-rgb/"> - Instant HEX to RGB value converter</a>

<a href="https://pexels.com"> - Pexels</a>

<a href="https://unsplash.com"> - Unsplash</a>

<a href="https://vimeo.com"> - Vimeo</a>

------

# Validator Testing

## HTML

A single warning was detected across all pages, advising that sections did not contain any H1 elements. Errors that were detected are detailed in the 'Fixed Bugs' section.

HTML validator result links:

<a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fcornishcoder1.github.io%2Fproject1-cat-sitting-services%2F"> index.html</a>

## CSS

No errors were detected.

CSS validator result link:

<a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fcornishcoder1.github.io%2Fproject1-cat-sitting-services%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en"> style.css </a>

## Javascript 
Write JavaScript code that passes through a linter (e.g. Jshint) with no significant issues.


# Bugs

## Fixed
- Across the site I had used H1 elements instead of H2 elements in divs. The validator advised me to use H2 instead of H1, so I have changed these. 
- I attempted to include an alt attribute in the iframe element, however the validator advised that these are not currently useable for iframes, so I removed it. 
- A duplicate #icon ID was identified across a number of divs, so I changed this to a .icon class (I kept the associated attributes the same so that the layout of the elements contained in the divs were not affected). This change was accepted by the validator. 
- One of my image files had blank spaces in the file name. This has been rectified with underscores between words. 
- The form labels for 'Dates..' and 'Number of cats..' had 'for' values that were not required, so I have removed these. 

## Unfixed

- I have been able to make the navigation bar responsive at screen sizes 512px and below, however the navigation links are not as well presented as I would have liked them to be. I tried to code a simple 'hamburger' style menu for the associated media query, however I was not able to find an example of code without JavaScript. My mentor suggested a fix on how to style a hamburger menu with HTML & CSS only, however I could not get this to style particularly well either so decided not to include it.  
- I attempted to style the 'Why Choose Us' section on the homepage using 'flex' css however I was unable to get the icons and their associated paragraphs to center on small screens. I have used different padding values within the media query for screen sizes 512px and below as an alternative fix, but unfortunately the elements are still not centered perfectly. 
- I wanted to be able to set the date fields on the contact form so that past dates could not be accidently selected. I did some research into this and tried some pieces of code but was unable to implement this feature.


------
# Accessibility Testing

Lighthouse scored the site highly on Performance, Accessibility, Best Practices and SEO.

<div align="center">

![Screenshot of Lighthouse test result](./assets/screenshots/screenshot_lighthouse_score.png)

</div>

<br>

# Manual Testing
The website has been tested using the following browsers:
- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Within Chrome and Safari, the following breakpoints were checked and corresponding media queries were used:
- Large screen sizes from 1200px and down
- Medium screen sizes from 837px and down 
- Small screen sizes from 652px and down
- Extra small screen sizes from 512px and down


The following emulated devices have been tested in Dev Tools: 
- iPhone 5/SE
- iPhone 6/7/8
- iPhone 6/7/8 Plus
- iPhone X
- iPad
- iPad Pro


## Deployment 

My <a href="https://cornishcoder1.github.io/project1-cat-sitting-services/" target="_blank" rel="noopener" aria-label="Link to open deployed site">website</a> was deployed via GitHub Pages as follows:

1. Go to https://github.com and login
2. Navigate to the required repository (project1-cat-sitting-services)
3. Click on the "Settings" button
4. Click on "Pages"
5. Under "Source", click the dropdown for "Branch" select "master" and then "Save"
6. A message will then appear stating that the website is published at the deployed address 

------

# Credits 

## Content

I used the following websites for research: 

- <a href="https://www.facebook.com/idlecatsandlittlepaws/"> Idle Cats and Little Paws</a>
- <a href="https://stalbanspetservices.co.uk/"> St Albans Pet Services</a>
- <a href="https://www.we-love-pets.co.uk/services/cat-sitting"> We Love Pets</a>

<br>

## Media 

1. Smiley nigiri icon by <a href="https://www.freepik.com" title="Freepik">Freepik</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

2. Homepage video by <a href="https://www.pexels.com/@magda-ehlers-pexels"> Magda Ehlers</a> on <a href="https://www.pexels.com/video/close-up-video-of-three-cats-eating-5306154/"> Pexels</a> 

3. Police officer with badge icon by <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">Eucalyp</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

4. First aid bag icon by <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

5. Cat paw heart and clock icons by <a href="https://www.freepik.com" title="Freepik">Freepik</a> on <a href="https://www.flaticon.com/" title="Flaticon">Flaticon</a>

6. Footer social media icons from <a href="https://fontawesome.com/"> Font Awesome</a>

7. About Us page three_cats_on_wood_floor.jpg image by <a href="https://www.pexels.com/@cottonbro"> Cottonbro</a> on <a href="https://www.pexels.com/photo/three-cats-on-wooden-flooring-6853515/"> Pexels</a> 

8. About Us page testimonials_image_gingercat.jpg image by <a href="https://www.pexels.com/@cottonbro"> Cottonbro</a> on <a href="https://www.pexels.com/photo/orange-tabby-cat-on-brown-wooden-chair-6853517/"> Pexels</a> 

9. Prices page image by <a href="https://www.pexels.com/@freestocks"> Freestocks.org</a> on <a href="https://www.pexels.com/photo/himalayan-cat-205975/"> Pexels</a> 

10. Contact Us page image by <a href="https://unsplash.com/@bereumann"> Mathhias Reumann</a> on <a href="https://unsplash.com/photos/eI2BPNUwgPc"> Unsplash</a> 

11. Confirmation page image by <a href="https://unsplash.com/@linataly1"> Lina Angelov</a> on <a href="https://unsplash.com/photos/Ah_QC2v2alE"> Unsplash</a> 

<br>

## Acknowledgements 

- Dave_Horrocks_5P for his help with explaining how flex elements work. 
- Dom Quail_5P for his excellent README example.
- Kevin Powell's YouTube video <a href="https://www.youtube.com/watch?v=bn-DQCifeQQ&t=8s"> 'Responsive Design Made Easy'</a> with thanks to John McPherson_5P for recommending this channel to me. 
- Love Running project for reference and guidance. 
- Victor Miclovich (Mentor)
- <a href="http://w3schools.com"> W3 Schools</a> for tips on media queries, date inputs on forms and centering tables. 

