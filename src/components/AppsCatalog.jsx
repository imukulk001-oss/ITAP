import React from 'react';
import './AppsCatalog.css';

const AppCard = ({ title, description, image, imageAlt, onOpen, onReadMore }) => {
  return (
    <div className="app-card">
      <div className="app-card-image-wrapper">
        <img src={image} alt={imageAlt} className="app-card-image" />
      </div>
      <div className="app-card-content">
        <div className="app-card-text">
          <h3 className="app-card-title">{title}</h3>
          <p className="app-card-description">{description}</p>
          <button className="read-more-link" onClick={onReadMore}>
            Read More
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5H11M11 5L7.5 1M11 5L7.5 9" stroke="#008BF9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <button className="app-open-button" onClick={onOpen}>
          Open
        </button>
      </div>
    </div>
  );
};

const AppsCatalog = () => {
  const apps = [
    {
      id: 1,
      title: 'Legal Case Management System',
      description: 'Trial run of Legal Case Management System is Active',
      image: '/images/app1-image.png',
      imageAlt: 'Legal Case Management System',
    },
    {
      id: 2,
      title: 'App 2',
      description: 'Desc 2',
      image: '/images/app2-image.png',
      imageAlt: 'App 2',
    },
    {
      id: 3,
      title: 'App 3',
      description: 'Desc 3',
      image: '/images/app3-image.png',
      imageAlt: 'App 3',
    },
    {
      id: 4,
      title: 'App 4',
      description: 'Desc 4',
      image: '/images/app4-image.png',
      imageAlt: 'App 4',
    },
  ];

  const handleOpen = (appId, title) => {
    console.log(`Opening app ${appId}: ${title}`);
    alert(`Opening ${title}. This would navigate to the app.`);
  };

  const handleReadMore = (appId, title) => {
    console.log(`Read more about app ${appId}: ${title}`);
    alert(`Read more about ${title}. This would show more details.`);
  };

  return (
    <section className="apps-catalog" id="apps-catalog">
      <div className="apps-catalog-content">
        <h2 className="apps-catalog-title">Apps Catalog</h2>
        <div className="apps-grid">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              title={app.title}
              description={app.description}
              image={app.image}
              imageAlt={app.imageAlt}
              onOpen={() => handleOpen(app.id, app.title)}
              onReadMore={() => handleReadMore(app.id, app.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsCatalog;

