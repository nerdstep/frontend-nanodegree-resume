function template(helper, replaceValue, searchValue) {
  searchValue = searchValue || '%data%';
  return helper.replace(searchValue, replaceValue);
};

var resume = {
  bio: {
    name          : 'Justin M. Williams',
    role          : 'Web Developer',
    contacts      : {
      mobile  : '+44 7596-76-6498',
      email   : 'justinwilliams42@gmail.com',
      github  : 'nerdstep',
      twitter : '@jwilliams42',
      location: 'Cambridge, United Kingdom'
    },
    welcomeMessage: 'Hello',
    skills        : [],
    biopic        : '',
    display       : function () {
      $('#header').prepend(template(HTMLheaderName, this.name)).fadeIn();
    }
  },
  education: {
    schools: [{
      name    : '',
      location: '',
      degree  : '',
      majors  : [],
      dates   : 0,
      url     : ''
    }],
    onlineCourses: [{
      title : '',
      school: '',
      date  : 0,
      url   : ''
    }], display  : function () {
    }
  },
  work: {
    jobs       : [{
      employer   : '',
      title      : '',
      location   : '',
      dates      : '',
      description: ''
    }], display: function () {
    }
  },
  projects: {
    projects   : [{
      title      : '',
      dates      : '',
      description: '',
      images     : []
    }], display: function () {
    }
  }
};

$(function () {
  console.log(resume);

  //$('body').text('');

  resume.bio.display();




});