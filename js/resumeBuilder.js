function template(helper, replaceValue, searchValue) {
  searchValue = searchValue || '%data%';
  return helper.replace(searchValue, replaceValue);
}

var resume = {
  bio: {
    name          : 'Robin Hood',
    role          : 'Legendary Outlaw',
    contacts      : {
      mobile  : '555.RBN.HOOD',
      email   : 'robin.hood@outlaw.com',
      github  : 'rhood',
      twitter : '@robinhood',
      location: 'Nottingham, England'
    },
    welcomeMessage: 'Expert Re-distributor of Wealth and Defender of the Poor',
    skills        : ['Archery', 'Swordplay', 'Disguise', 'Brewing Ale'],
    biopic        : 'images/pic.jpg',
    display       : function () {
      var i;

      $('#header')
        .prepend(template(HTMLheaderName, this.name))
        .append(template(HTMLbioPic, this.biopic))
        .append(template(HTMLWelcomeMsg, this.welcomeMessage))
        .append(HTMLskillsStart)
        .show();

      $('.biopic').addClass('animated fadeInLeft');
      $('.welcome-message').addClass('animated fadeInDown');

      $('#name')
        .addClass('animated fadeInDown')
        .after(template(HTMLheaderRole, this.role))
        .next()
        .addClass('role animated lightSpeedIn');

      $('#topContacts')
        .append(template(HTMLmobile, this.contacts.mobile))
        .append(template(HTMLemail, this.contacts.email))
        .append(template(HTMLtwitter, this.contacts.twitter))
        .append(template(HTMLgithub, this.contacts.github))
        .append(template(HTMLlocation, this.contacts.location))
        .show()
        .addClass('animated fadeIn');

      $('#skillsH3').text('Masteries').addClass('animated fadeIn');

      for (i = 0; i < this.skills.length; i++) {
        $('#skills')
          .append(template(HTMLskills, '<a href="http://lmgtfy.com/?q=' + this.skills[i] + '">' + this.skills[i] + '</a>'))
          .addClass('animated zoomIn');
      }
    }
  },
  education: {
    schools: [{
      name    : 'University of Cambridge',
      location: 'Cambridge, England',
      degree  : 'Masters',
      majors  : ['Outlaw Science'],
      dates   : 1600,
      url     : ''
    }],
    onlineCourses: [{
      title : 'Front-End Web Developer Nanodegree',
      school: 'Udacity',
      date  : new Date(),
      url   : 'https://www.udacity.com'
    }],
    display  : function () {
      var $el = $('#education'), i;

      for (i = 0; i < this.schools.length; i++) {
        var item = this.schools[i];
        var $frag = $(HTMLschoolStart);

        $frag
        .append(template(HTMLschoolName, item.name) + template(HTMLschoolDegree, item.degree))
        .append(template(HTMLschoolDates, item.dates))
        .append(template(HTMLschoolLocation, item.location))
        .append(template(HTMLschoolMajor, item.majors));

        $el.append($frag);
      }

      $el.show().addClass('animated zoomInDown');
    }
  },
  work: {
    jobs       : [{
      employer    : 'King Richard the Lionheart',
      title       : 'King of Outlaws',
      location    : 'Nottingham, England',
      dates       : '1585 - 1654',
      description : 'Stole from the rich, gave to the poor.',
      url         : 'http://en.wikipedia.org/wiki/Robin_Hood'
    }],
    display: function () {
      var $el = $('#workExperience'), i;

      for (i = 0; i < this.jobs.length; i++) {
        var item = this.jobs[i];
        var $frag = $(HTMLworkStart);

        $frag
          .append(template(HTMLworkEmployer, item.employer) + template(HTMLworkTitle, item.title))
          .append(template(HTMLworkDates, item.dates))
          .append(template(HTMLworkLocation, item.location))
          .append(template(HTMLworkDescription, item.description));

        $el.append($frag);
      }

      $el.show().addClass('animated zoomInDown');
    }
  },
  projects: {
    projects   : [{
      title      : 'Lorem Ipsum',
      dates      : '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat cursus velit, et rutrum nibh volutpat vitae. Vivamus sed enim sit amet tortor egestas interdum ac at nulla.',
      images     : []
    }],
    display: function () {
      var $el = $('#projects'), i;

      for (i = 0; i < this.projects.length; i++) {
        var item = this.projects[i];
        var $frag = $(HTMLprojectStart);

        $frag
          .append(template(HTMLprojectTitle, item.title))
          .append(template(HTMLprojectDates, item.dates))
          .append(template(HTMLprojectDescription, item.description))
          .append(template(HTMLprojectImage, item.images));

        $el.append($frag);
      }

      $el.show().addClass('animated zoomInDown');
    }
  }
};

$(function () {
  console.log(resume);

  resume.bio.display();
  resume.work.display();
  resume.projects.display();
  resume.education.display();

});
