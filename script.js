// Mobile menu implementation
const hamburgerMenuIcon = document.querySelector('.hamburger_menu_icon');
const sideNavigationBar = document.querySelector('.mobile_side_nav');
const menuLinks = document.querySelectorAll('.menu_link');
const mobileMenu = document.querySelector('.parent_main');
const logo = document.querySelector('.logo');

const openMenu = () => {
  sideNavigationBar.classList.add('mobile_side_nav_active');
  hamburgerMenuIcon.classList.add('vanish');
  mobileMenu.classList.add('blur');
  logo.classList.add('blur');
};

const closeMenu = () => {
  sideNavigationBar.classList.remove('mobile_side_nav_active');
  mobileMenu.classList.remove('blur');
  hamburgerMenuIcon.classList.remove('vanish');
  logo.classList.remove('blur');
};

hamburgerMenuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// Project section dynamic load and pop-up window implementation
const projectSectionDom = document.querySelector('.project_contents');

const popupModal = document.querySelector('.modal');
const closeModal = document.querySelector('.close');
const nameDom = document.querySelector('.open_view_proj_title');
const descriptionDom = document.querySelector('.project_full_desc_opened');
const technologiesDom = document.querySelector('.open_view_tag');
const sourceLinkDom = document.querySelector('.btn_view_src');
const demoLinkDom = document.querySelector('.btn_see_live');
const companyNameModal = document.querySelector('.modal_company');
const roleNameModal = document.querySelector('.modal_role');
const yearDateModal = document.querySelector('.modal_year');
const projectImageLinkDom = document.querySelector('.view_proj_img');

const projectsArray = [
  {
    name: 'Dengue Monitoring System',
    description: 'A GIS monitoring system with forecasting of dengue cases.',
    imageLink: 'images/projects/project1.png',
    technologies: ['html', 'css', 'javascript', 'django'],
    role: 'Lead Programmer',
    company: 'University Thesis',
    year: '2023',
    sourceLink: 'https://github.com/janing06/biliran-dengue-monitoring-system',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
  {
    name: 'Diabetes Prediction',
    description: 'A smart information system for diabetes patients with prediction based on diagnostic tests.',
    imageLink: 'images/projects/project2.png',
    technologies: ['html', 'css', 'javascript', 'django'],
    role: 'Full Stack',
    company: 'Freelance',
    year: '2023',
    sourceLink: 'https://github.com/janing06/Diabetes-Prediction',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },
  {
    name: 'Crime Rate Mapping',
    description: 'A GIS monitoring system for crimes.',
    imageLink: 'images/projects/project3.png',
    technologies: ['html', 'css', 'javascript', 'django'],
    role: 'Full Stack',
    company: 'Freelance',
    year: '2023',
    sourceLink: 'https://github.com/janing06/CrimeRateMapping',
    demoLink: 'https://harlexkhal.github.io/Microverse-Porfolio-Website/',
  },

];

(() => {
  projectSectionDom.innerHTML = '';
  for (let i = 0; i < projectsArray.length; i += 1) {
    let techlist = '';
    for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
      techlist = `${techlist}<li class="project_tag">${projectsArray[i].technologies[j]}</li>`;
    }
    projectSectionDom.innerHTML = `${projectSectionDom.innerHTML}
    <li class="project">
    <img src="${projectsArray[i].imageLink}" alt="Project Image 1" />
    <div class="project_description">
      <h2 class="project_title">${projectsArray[i].name}</h2>
      <div class="project_info">
        <p class="project_title_II">${projectsArray[i].company}</p>
        <ul class="project_job_title_info_container">
          <li class="job_title_info">${projectsArray[i].role}</li>
          <li class="job_title_info">${projectsArray[i].year}</li>
        </ul>
      </div>
      <p class="project_full_desc">
       ${projectsArray[i].description}
      </p>
      <div class="project_tags_container">
        <ul class="tags_flex">
         ${techlist}
        </ul>
      </div>
      <button type="button" class="view_project_btn proj_${i + 1}">
        See Project
      </button>
    </div>
    </li>`;
  }
  for (let i = 0; i < projectsArray.length; i += 1) {
    document.querySelector(`.proj_${i + 1}`).addEventListener('click', () => {
      nameDom.innerHTML = projectsArray[i].name;
      companyNameModal.innerHTML = projectsArray[i].company;
      roleNameModal.innerHTML = projectsArray[i].role;
      yearDateModal.innerHTML = projectsArray[i].year;
      descriptionDom.innerHTML = projectsArray[i].description;
      projectImageLinkDom.src = projectsArray[i].imageLink;
      sourceLinkDom.action = projectsArray[i].sourceLink;
      demoLinkDom.action = projectsArray[i].demoLink;
      technologiesDom.innerHTML = '';
      for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
        technologiesDom.innerHTML = `${technologiesDom.innerHTML}<li class="project_tag">${projectsArray[i].technologies[j]}</li>`;
      }
      popupModal.classList.remove('vanish');
      popupModal.classList.add('show');
      mobileMenu.classList.add('blur');
      logo.classList.add('blur');
      document.body.style.overflowY = 'hidden';
    });
  }
})();

closeModal.addEventListener('click', () => {
  popupModal.classList.remove('show');
  popupModal.classList.add('vanish');
  mobileMenu.classList.remove('blur');
  logo.classList.remove('blur');
  document.body.style.overflowY = 'scroll';
});

// form-validation
const contactForm = document.querySelector('.contact_form');
const emailInput = document.querySelector('.email_address');
const validationMessage = document.querySelector('.validation_message');
contactForm.addEventListener('submit', (event) => {
  const strInput = emailInput.value;
  if (/[A-Z]/.test(strInput)) {
    validationMessage.innerHTML = 'Your email address should not contain upper case letters';
    validationMessage.classList.add('shake');
    event.preventDefault();
  }
});

// local storage
contactForm.addEventListener('input', () => {
  const formInfo = {
    name: document.querySelector('.contact_name').value,
    email: document.querySelector('.email_address').value,
    message: document.querySelector('.contact_message').value,
  };

  localStorage.setItem('contactForm', JSON.stringify(formInfo));
});

const formObj = JSON.parse(localStorage.getItem('contactForm'));
document.querySelector('.contact_name').value = formObj.name;
document.querySelector('.email_address').value = formObj.email;
document.querySelector('.contact_message').value = formObj.message;
