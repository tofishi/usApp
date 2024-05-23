import React from 'react';
import Link from 'next/link';

function Jobs() {
  const Categories = [
    {
      title: 'Web & Software Dev',
      description: 'Software Engineer, Web / Mobile Developer & More',
      img: <i className="icon-line-awesome-file-code-o"></i>,
      counter: '612',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Specialist / Scientist, Data Analyst & More',
      img: <i className="icon-line-awesome-cloud-upload"></i>,
      counter: '612',
    },
    {
      title: 'Web & Software Dev',
      description: 'Software Engineer, Web / Mobile Developer & More',
      img: <i className="icon-line-awesome-file-code-o"></i>,
      counter: '612',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Specialist / Scientist, Data Analyst & More',
      img: <i className="icon-line-awesome-cloud-upload"></i>,
      counter: '612',
    },
    {
      title: 'Web & Software Dev',
      description: 'Software Engineer, Web / Mobile Developer & More',
      img: <i className="icon-line-awesome-file-code-o"></i>,
      counter: '612',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Specialist / Scientist, Data Analyst & More',
      img: <i className="icon-line-awesome-cloud-upload"></i>,
      counter: '612',
    },
    {
      title: 'Web & Software Dev',
      description: 'Software Engineer, Web / Mobile Developer & More',
      img: <i className="icon-line-awesome-file-code-o"></i>,
      counter: '612',
    },
    {
      title: 'Data Science & Analytics',
      description: 'Data Specialist / Scientist, Data Analyst & More',
      img: <i className="icon-line-awesome-cloud-upload"></i>,
      counter: '612',
    },
  ];

  return (
    <>
     <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="section-headline centered ">
            <h3>Popular Job Categories</h3>
          </div>
          <div className='categories-container'>
      {Categories.map((item, i) => (
        <Link href={item.link || '#'} key={i} className="category-box">
          <div className="category-box-icon">
            {item.img}
          </div>
          <div className="category-box-counter">{item.counter}</div>
          <div className="category-box-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
      </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}

export default Jobs;
