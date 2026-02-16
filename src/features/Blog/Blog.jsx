import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Blog.module.css";
const Blog = () => {
  const data = [
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-08.png",
      heading: "Analyze Market Trends for Competitive Compensation",
      subHeading: "Architecture November 18, 2024",
      paragraph:
        "Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees. Use both direct conversations and indirect observations to",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service1.png",
      heading: "Analyze Market Trends for Competitive Compensation",
      subHeading: "Architecture November 18, 2024",
      paragraph:
        "Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees. Use both direct conversations and indirect observations to",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-bg1-1-1536x960.png",
      heading: "Analyze Market Trends for Competitive Compensation",
      subHeading: "Architecture November 18, 2024",
      paragraph:
        "Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees. Use both direct conversations and indirect observations to",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-09.png",
      heading: "Analyze Market Trends for Competitive Compensation",
      subHeading: "Architecture November 18, 2024",
      paragraph:
        "Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees. Use both direct conversations and indirect observations to",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-08.png",
      heading: "Analyze Market Trends for Competitive Compensation",
      subHeading: "Architecture November 18, 2024",
      paragraph:
        "Vast numbers of employees now work remotely, and it’s too late to develop a set of remote-work policies if you didn’t already have one. But there are ways to make the remote-work experience productive and engaging for employees. Use both direct conversations and indirect observations to",
    },
  ];

  const posts = [
    {
      id: 1,
      title: "Analyze Market Trends for Competitive...",
      date: "November 18, 2024",
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-08.png",
    },
    {
      id: 2,
      title: "Reassess Benefits and Perks",
      date: "November 18, 2024",
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service1.png",
    },
    {
      id: 3,
      title: "Leverage Technology for Workforce Management",
      date: "November 18, 2024",
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-bg1-1-1536x960.png",
    },
    {
      id: 4,
      title: "Market insights to manage people related",
      date: "November 03, 2024",
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-09.png",
    },
  ];
  return (
    <>
      <div className={styles.headContainer}>
        <h1 className={styles.headTitle}>Blog</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Blog
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.cardGrid}>
            {data.map((data, index) => (
              <div className={styles.card}>
                <img src={data.img} alt={data.title} className={styles.img} />
                <h5 className={styles.subHeading}>{data.subHeading}</h5>
                <h1 className={styles.heading}>{data.heading}</h1>
                <p className={styles.paragraph}>{data.paragraph}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right container */}

        {/* first section */}
        <div className={styles.rightContainer}>
          <div className={styles.searchContainer}>
            <h3 className={styles.title}>Search</h3>
            <div className={styles.searchBox}>
              <CiSearch className={styles.icon} />
              <input
                type="text"
                placeholder="Type to search..."
                className={styles.input}
              />
            </div>
          </div>

          {/* categories section */}

          <div className={styles.categories}>
            <h3 className={styles.categoriesTitle}>categories</h3>
            <div>
              <ul className={styles.categoriesUl}>
                <li>
                  <a href="">Archi</a>
                  <span>(1)</span>
                </li>
                <li>
                  <a href="">Architecture</a>
                  <span>(2)</span>
                </li>
                <li>
                  <a href="">News & Tips</a> <span>(3)</span>
                </li>
                <li>
                  <a href="">Real Estate</a>
                  <span>(4)</span>
                </li>
                <li>
                  <a href="">Technology</a>
                  <span>(5)</span>
                </li>
                <li>
                  <a href="">Uncategorized</a> <span>(0)</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Recent post section */}

          <div className={styles.PostContainer}>
            <h3 className={styles.PostTitle}>Recent Posts</h3>
            <div className={styles.postsList}>
              {posts.map((post) => (
                <div key={post.id} className={styles.postItem}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.image}
                  />
                  <div className={styles.postContent}>
                    <p className={styles.postTitle}>{post.title}</p>
                    <p className={styles.postDate}>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* tags section */}

          <div className={styles.tagsContainer}>
            <h3 className={styles.tagHeading}>Tags</h3>
            <p className={styles.tagsGrid}>
              <a href="#">Business</a>
              <a href="#">Digital</a>
              <a href="#">Finance</a>
              <a href="#">Software</a>
              <a href="#">Technology</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
