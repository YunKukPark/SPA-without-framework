const navigateTo = url => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('Viewing Dashboard') },
    { path: '/posts', view: () => console.log('Viewing Posts') },
    { path: '/settings', view: () => console.log('Viewing Setting') },
  ];

  // Test each route for potential match
  const potentialMatches = routes.map(route => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0], // 404 기본 값 설정 (index)
      isMatch: true,
    };
  }

  console.log(match.route.view());
};

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
