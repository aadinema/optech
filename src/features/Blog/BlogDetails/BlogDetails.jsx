import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./BlogDetails.module.css";

const BlogDetails = () => {
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
        <h1 className={styles.headTitle}>
          Planning your online business goals with a specialist
        </h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Technology{" "}
          <span className={styles.subtitle2}>&gt;</span> Planning your online
          business goals with a specialist
        </p>
      </div>
      {/* ************ main section ******************** */}
      <div className={styles.Container}>
        <div className={styles.leftContainer}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-01.png"
            alt="img"
            className={styles.blogImage}
          />
          <div className={styles.blogIconContainer}>
            <p>
              <i class="ri-calendar-line"></i>01 September 2024
            </p>
            <p>
              <i class="ri-bookmark-line"></i>Technology
            </p>
            <p>
              <i class="ri-chat-2-fill"></i>2 Comments
            </p>
          </div>

          <p className={styles.paragraph}>
            Vast numbers of employees now work remotely, and it’s too late to
            develop a set of remote-work policies if you didn’t already have
            one. But there are ways to make the remote-work experience
            productive and engaging for employees.
            <br /> <br />
            Use both direct conversations and indirect observations to get
            visibility into employees’ challenges and concerns. Use every
            opportunity to make clear to employees that you support and care
            them. To facilitate regular conversations between managers and
            employees, provide managers with guidance on how best to broach
            sensitive subjects arising from the COVID-19 pandemic, including
            alternative work models, job security and prospects, impact on
            staffing.
          </p>

          {/* image section */}
          <div className={styles.imageContainer}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-details-01.png"
              alt="image1"
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-details-02.png"
              alt="image2"
            />
          </div>

          <p className={styles.paragraph}>
            The third Monday of January is supposed to be the most depressing
            day of the year. Whether you believe that or not, the long nights,
            cold weather, and trying to keep to new year resolutions are all
            probably getting to you a little by now. To make matters worse many
            will still be recovering from their Christmas spending. So how can
            you make today.
          </p>

          <blockquote className={styles.quoteContainer}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg"
              alt="blockquoteImage"
            />
            <p className={styles.paragraph}>
              We appreciate the consistent high-quality service provided by
              their team goes above and beyond concerns promptly ”
            </p>
          </blockquote>

          <p className={styles.paragraph}>
            Vast numbers of employees now work remotely, and it’s too late to
            develop a set of remote-work policies if you didn’t already have
            one. But there are ways to make the remote-work experience
            productive and engaging for employees.
            <br /> <br />
            Use both direct conversations and indirect observations to get
            visibility into employees’ challenges and concerns. Use every
            opportunity to make clear to employees that you support and care
            them. To facilitate regular conversations between managers and
            employees, provide managers with guidance on how best to broach
            sensitive subjects arising from the COVID-19 pandemic, including
            alternative work models, job security and prospects, impact on
            staffing.
          </p>

          <div className={styles.postButtton}>
            <a href="#">Business</a>
            <a href="#">Digital</a>
          </div>

          <div className={styles.NextPostBt}>
            <a href="#">
              Next Post <i class="ri-arrow-right-line"></i>
            </a>
          </div>
          <hr />
          <div>
            <h1 className={styles.commentHead}>Comment Section</h1>
          </div>
          <div className={styles.commentSection}>
            <div>
              <img
                src="https://secure.gravatar.com/avatar/d1def676aa05ac39dcc760965baacd4d?s=110&d=mm&r=g"
                alt="commentAvtar"
                className={styles.commentAvtar}
              />
            </div>
            <div className={styles.commentContent}>
              <p>
                It is a long established fact that a reader will be distrac
                readable content of a page when looking at its layout. The point
                of using is that it has two.
              </p>
              <h4 className={styles.Nameh4}>Admin</h4>
              <span className={styles.commentedOn}>November 4, 2024</span>

              <div className={styles.reply}>
                <a
                  className={styles.commentReply}
                  href="https://wps.mirrortheme.com/optech/planning-your-online-business-goals-with-a-specialist/?replytocom=2#respond"
                >
                  <i class="ri-reply-fill"></i>Reply
                </a>{" "}
              </div>
            </div>
          </div>
          <div className={styles.commentSection2}>
            <div>
              <img
                src="https://secure.gravatar.com/avatar/d1def676aa05ac39dcc760965baacd4d?s=110&d=mm&r=g"
                alt="commentAvtar"
                className={styles.commentAvtar}
              />
            </div>
            <div className={styles.commentContent}>
              <p>
                It is a long established fact that a reader will be distrac
                readable content of a page when looking at its layout. The point
                of using is that it has two.
              </p>
              <h4 className={styles.Nameh4}>Admin</h4>
              <span className={styles.commentedOn}>November 4, 2024</span>

              <div className={styles.reply}>
                <a
                  className={styles.commentReply}
                  href="https://wps.mirrortheme.com/optech/planning-your-online-business-goals-with-a-specialist/?replytocom=2#respond"
                >
                  <i class="ri-reply-fill"></i>Reply
                </a>{" "}
              </div>
            </div>
          </div>

          {/* commentFormContainer */}

          <div className={styles.commentFormContainer}>
            <h3 className={styles.heading}>Leave a comment:</h3>
            <p className={styles.note}>
              Your email address will not be published. Required fields are
              marked *
            </p>
            <textarea
              className={styles.textarea}
              placeholder="Write Your Comment *"
            ></textarea>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter Your Name *"
              />
              <input
                type="email"
                className={styles.input}
                placeholder="Enter E-mail Address *"
              />
            </div>
            <label className={styles.checkboxLabel}>
              <input type="checkbox" className={styles.checkbox} />
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
            <button className={styles.button}>Post Comment</button>
          </div>
        </div>

        {/* right section */}
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

export default BlogDetails;
