function template(helper, replaceValue, searchValue) {
  searchValue = searchValue || '%data%';
  return helper.replace(searchValue, replaceValue);
}

var bio = {
  name          : 'Robin Hood',
  role          : 'Legendary Outlaw',
  contacts      : {
    mobile  : '555.RBN.HOOD',
    email   : 'robin.hood@outlaw.com',
    github  : 'rhood',
    twitter : '@robinhood',
    location: 'Sherwood Forest, England'
  },
  welcomeMessage: 'Expert Re-distributor of Wealth and Defender of the Poor',
  skills        : ['Archery', 'Swordplay', 'Disguise', 'Brewing Ale', 'Hunting'],
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
      .addClass('animated zoomIn')
      .after(template(HTMLheaderRole, this.role))
      .next()
      .addClass('role');

    $('#topContacts')
      .append(template(HTMLmobile, this.contacts.mobile))
      .append(template(HTMLemail, this.contacts.email))
      .append(template(HTMLtwitter, this.contacts.twitter))
      .append(template(HTMLgithub, this.contacts.github))
      .append(template(HTMLlocation, this.contacts.location))
      .show();

    $('#skillsH3').text('Masteries').addClass('animated zoomInUp');

    this.skills.forEach(function (item) {
      $('#skills').append(template(HTMLskills, '<a href="http://lmgtfy.com/?q=' + item + '">' + item + '</a>'));
    });

    $('#footerContacts').append($('#topContacts').html());
    $('#letsConnect').show();
    $('#mapDiv').append(googleMap).show().addClass('animated zoomIn');
  }
};

var education = {
  schools: [{
    name    : 'University of Cambridge',
    location: 'Cambridge, England',
    degree  : 'Masters',
    majors  : ['Outlaw Science'],
    dates   : 1187,
    url     : 'http://www.cam.ac.uk/'
  },{
    name    : 'University of Nottingham',
    location: 'Nottingham, England',
    degree  : 'BA',
    majors  : ['Ranger'],
    dates   : 1185,
    url     : 'http://www.nottingham.ac.uk/'
  }],
  onlineCourses: [{
    title : 'Quarterstaff Crash Course',
    school: 'Fighters Guild',
    date  : 1182,
    url   : 'http://en.wikipedia.org/wiki/Quarterstaff'
  }],
  display  : function () {
    var $el = $('#education');

    this.schools.forEach(function (item) {
      var $frag = $(HTMLschoolStart);

      $frag
        .append(template(HTMLschoolName, item.name) + template(HTMLschoolDegree, item.degree))
        .append(template(HTMLschoolLocation, item.location))
        .append(template(HTMLschoolDates, item.dates))
        .append(template(HTMLschoolMajor, item.majors));

      $el.append($frag);
      $frag.find('a').attr({ href: item.url });
    });

    $el.append(HTMLonlineClasses);

    this.onlineCourses.forEach(function (item) {
      var $frag = $(HTMLschoolStart);

      $frag
        .append(template(HTMLonlineTitle, item.title) + template(HTMLonlineSchool, item.school))
        .append(template(HTMLonlineDates, item.date))
        .append(template(HTMLonlineURL, item.url));

      $el.append($frag);
      $frag.find('a').attr({ href: item.url });
    });

    $el.show().addClass('animated fadeInUpBig');
  }
};

var work = {
  jobs       : [{
    employer    : 'Self-Employed',
    title       : 'Bandit Outlaw',
    location    : 'Sherwood Forrest, England',
    dates       : '1195 - Present',
    description : 'Stole from the rich and gave to the poor.',
    url         : 'http://en.wikipedia.org/wiki/Robin_Hood'
  },{
    employer    : 'King Richard the Lionheart',
    title       : 'Crusader',
    location    : 'Jerusalem, Israel',
    dates       : '1190 - 1192',
    description : 'Fought for King and Country to reclaim the Holy Land.',
    url         : 'http://en.wikipedia.org/wiki/Third_Crusade'
  }],
  display: function () {
    var $el = $('#workExperience');

    this.jobs.forEach(function (item) {
      var $frag = $(HTMLworkStart);

      $frag
        .append(template(HTMLworkEmployer, item.employer) + template(HTMLworkTitle, item.title))
        .append(template(HTMLworkLocation, item.location))
        .append(template(HTMLworkDates, item.dates))
        .append(template(HTMLworkDescription, item.description));

      $el.append($frag);
      $frag.find('a').attr({ href: item.url });
    });

    $el.show().addClass('animated fadeInUpBig');
  }
};

var projects = {
  projects   : [{
    title      : 'Lorem Ipsum',
    dates      : 1189,
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    images     : ['images/project1.jpg','images/project2.jpg','images/project3.jpg']
  }],
  display: function () {
    var $el = $('#projects');

    this.projects.forEach(function (item) {

      var $frag = $(HTMLprojectStart);

      $frag
      .append(template(HTMLprojectTitle, item.title))
      .append(template(HTMLprojectDates, item.dates))
      .append(template(HTMLprojectDescription, item.description));

      item.images.forEach(function (img) {
        $frag.append(template(HTMLprojectImage, img));
      });

      $el.append($frag);
    });

    $el.show().addClass('animated fadeInUpBig');
  }
};


$(function () {
  bio.display();
  work.display();
  projects.display();
  education.display();
});
