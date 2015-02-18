function template(helper, replaceValue, searchValue) {
  searchValue = searchValue || '%data%';
  return helper.replace(searchValue, replaceValue);
}

var resume = {
  bio: {
    name          : 'Robin Hood',
    role          : 'Heroic Outlaw',
    contacts      : {
      mobile  : '555.RBN.HOOD',
      email   : 'robin.hood@outlaw.com',
      github  : 'rhood',
      twitter : '@robinhood',
      location: 'Nottinghamshire, England'
    },
    welcomeMessage: 'Expert Re-distributor of Wealth and Defender of the Poor',
    skills        : ['Archery', 'Swordplay', 'Disguise', ''],
    biopic        : 'images/pic.jpg',
    display       : function () {
      var i;

      $('#header')
        .prepend(template(HTMLheaderName, this.name))
        .append(template(HTMLbioPic, this.biopic))
        .append(template(HTMLWelcomeMsg, this.welcomeMessage))
        .append(HTMLskillsStart)
        .fadeIn();

      $('#name').after(template(HTMLheaderRole, this.role));

      $('#topContacts')
        .append(template(HTMLmobile, this.contacts.mobile))
        .append(template(HTMLemail, this.contacts.email))
        .append(template(HTMLtwitter, this.contacts.twitter))
        .append(template(HTMLgithub, this.contacts.github))
        .append(template(HTMLlocation, this.contacts.location))
        .show();

      for (i = 0; i < this.skills.length; i++) {
        $('#skills').append(template(HTMLskills, this.skills[i]));
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

      $el.slideDown();
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

      $el.slideDown();
    }
  },
  projects: {
    projects   : [{
      title      : '',
      dates      : '',
      description: '',
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

      $el.slideDown();
    }
  }
};

$(function () {
  console.log(resume);

  resume.bio.display();
  resume.work.display();
  resume.projects.display();
  resume.education.display();

  particlesJS('main', {
    particles: {
      color: '#fff',
      color_random: false,
      shape: 'circle', // "circle", "edge" or "triangle"
      opacity: {
        opacity: 1,
        anim: {
          enable: true,
          speed: 1.5,
          opacity_min: 0,
          sync: false
        }
      },
      size: 4,
      size_random: true,
      nb: 150,
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      anim: {
        enable: true,
        speed: 1
      }
    },
    interactivity: {
      enable: true,
      mouse: {
        distance: 300
      },
      detect_on: 'canvas', // "canvas" or "window"
      mode: 'grab', // "grab" of false
      line_linked: {
        opacity: .5
      },
      events: {
        onclick: {
          enable: true,
          mode: 'push', // "push" or "remove"
          nb: 4
        },
        onresize: {
          enable: true,
          mode: 'out', // "out" or "bounce"
          density_auto: false,
          density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
        }
      }
    },
    /* Retina Display Support */
    retina_detect: true
  });

});

var texture = new TG.Texture( 256, 256 )
.add( new TG.XOR().tint( 1, 0.5, 0.7 ) )
.add( new TG.SinX().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
.mul( new TG.SinY().frequency( 0.004 ).tint( 0.5, 0, 0 ) )
.add( new TG.SinX().frequency( 0.0065 ).tint( 0.1, 0.5, 0.2 ) )
.add( new TG.SinY().frequency( 0.0065 ).tint( 0.5, 0.5, 0.5 ) )
.add( new TG.Noise().tint( 0.1, 0.1, 0.2 ) )
.toCanvas();

document.body.appendChild( texture );