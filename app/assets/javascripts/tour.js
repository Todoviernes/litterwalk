$(function(){
  var introguide = introJs("#login").setOption("overlayOpacity", " 0 ");;
  // var startbtn   = $('#startdemotour');
  introguide.setOptions({
    steps: [
    {
      element: '.introjs',
      intro: 'Create an account to Find the near Can around you or to add a Can while you are walking.',
      position: 'top'
    }
    // {
    //   element: '.find-can',
    //   intro: 'Click this find a the can near you!',
    //   position: 'bottom'
    // },
    // {
    //   element: '.trash-info',
    //   intro: 'Check here the different kind of trash',
    //   position: 'bottom'
    // },
    // {
    //   element: '.profile',
    //   intro: 'Click here to view and edit your profile',
    //   position: 'bottom'
    // }
    // {
    //   element: '.nav-menu',
    //   intro: "Each demo will link to the previous & next entries.",
    //   position: 'bottom'
    // }
    ]
  });
  introguide.start();
});


