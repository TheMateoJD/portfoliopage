

# Portfolio page 
### This is source code of my portfolio page.
### Currently available at:
### https://portfolio-mateusz-surmanski.netlify.app/

---------------------
#### Page was made using 
- React components
- TailwindCSS
- Figma project

---------------------
This page was designed to showcase my skills, experience, and personal brand in a more engaging and comprehensive way than a traditional CV. <br>
It provides a clear overview of my technical stack, highlights my most valuable projects, and outlines my professional background, including work experience and education. <br>
Additionally, the **About Me** section offers a more in-depth look at who I am, both professionally and personally. <br>
The **Contact** section allows visitors to connect with me directly via email (powered by an API), visit my LinkedIn and GitHub profiles, or download my CV in PDF format. <br>




---------------------

### Changelog of the build 

##### 24-26.03.2025
Collected ideas and pieces of information <br>
Edited figma project for better match with my idea

##### 26.03.2025
Created most of the components with basic styling and "lorem text" <br>
(no functionality yet)

##### 27.03.2025
Set proper font <br>
Made library with all svg files for tech stack component <br>
Created files for data storage and easier updating <br>
Set up proper info in data files <br>
Created functionality of tech stack categories, and navbar <br>
Created hover animations and set up scroll-behavior of navigation

##### 28.03.2025
Made entire page responsive  <br>
(with TailwindCSS syntax; "4k" - custom classes; device width in px)
- mobile <640
- sm 640-767
- md 768-1023
- lg 1024-1279
- xl 1280-1535 
- ~~2xl 1536-1920 (merged to xl media query)~~
- "1440p" 1936-2559
- "4k" >2560

_Sent page to friends from the industry for UI/UX feedback and ideas_ 

##### 02.04.2025
Moved contact section to the hero section from the bottom of the page <br>
Added mini contact section to the footer component <br>
Changed HTML semantics of the components (so not everything is a div) <br> 

 **Made various changes based on received feedback**
- Switched phone number element for a CV document download in contact section <br>
- Switched styling of the single project information <br>
- Changed navbar styling
- Updated icons sizes in contact, tech stack and projects components
- After scrolling navbar "Home" is replaced by my full name
- Merged work history & education instead of categories so everything is visible
- Updated each work with time span next to dates
- Updated font weights to get user bigger focus, updated mobile font sizes

##### 03.04.2025
Created and styled modal email contact component <br>
Updated responsiveness and animations to modal component <br>
Created email form attributes and collecting information functionality <br>
Connected form submit with my inbox through API <br>
Created .env file for API keys

##### 04.04.2025
Updated email modal closing 2.5s after confirmation of sending pop-up <br>
Created final projects list <br>
Uploaded all projects to GitHub and netlify <br>
Updated my CV pdf file <br>
Updated projects data file with links & pictures <br>
Checked entire page accessibility and filled missing parts <br>
Deleted component containing "list of things that are not finished" <br>
(moved this section into readme.md file)

##### 06.04.2025
Updated Readme.md file for GitHub <br>
Minor fixes (like missing cursor pointer)


##### Upcomming updates
- Create proper navbar menu for mobile versions <br>
- Update accessibility with keyboard actions
- Automatization of build and deployment
- Get page on hosting instead of netlify
- light-mode btn
- language change btn 


---------------------

### Used tools and ideas source
(Figma project is outdated, after getting feedback i changed a lot of things) <br>
https://www.figma.com/design/f7ukEbdy538Ycsm1ypR5Gi/Portfolio-Ui-Design-Template-(Community)?node-id=61-2714&t=piKCu3d8CceBRmGF-0

https://jzitnik.dev/en/

https://darryl-mbae.netlify.app/#Home

https://hollowww.dev/

https://andrijaweb.vercel.app/

https://rafaelamaral.dev/


