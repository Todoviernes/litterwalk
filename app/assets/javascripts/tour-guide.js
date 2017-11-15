Shepherd.activeTour

tour = new Shepherd.Tour
  defaults:
    classes: 'shepherd-theme-arrows'
    scrollTo: true

let tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

tour.addStep('example', {
  title: 'Example Shepherd',
  text: 'Creating a Shepherd is easy too! Just create ...',
  attachTo: '.navbar',
  advanceOn: '.docs-link click'
});

tour.start();