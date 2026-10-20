
import { useState } from 'react';
import {
  Search,
  CalendarDays,
  Clock3,
  ArrowRight,
  X,
  BookOpen,
  Code2,
  Rocket,
  Lightbulb,
  UserRound,
  Tag,
  ExternalLink,
} from 'lucide-react';

import './css/BlogPage.css';

const posts = [
  {
    id: 1,
    title: 'Introducing LibraryFlow: A Modern Library Management System',
    excerpt:
      'Discover a library system designed to simplify book management, member registration, and borrowing records.',
    content: `
LibraryFlow is a library management project designed to help librarians organize their daily tasks in one place.

PROJECT OVERVIEW

The system focuses on managing books, registered members, borrowing transactions, and return records through an organized interface.

KEY FEATURES

• Book inventory and category management
• Member registration and record management
• Borrowing and return tracking
• Searchable book records
• Organized library transactions

TECHNOLOGY

The example project can be built with a web frontend, a backend API, and a database for storing records. Check the contributor's repository for the actual implementation and technology stack.

WHO IS IT FOR?

Students learning CRUD operations, developers exploring management systems, and libraries looking for project ideas.

This is a sample community post for the Blog page. Replace it with verified details when publishing a real project.
    `,
    category: 'New Projects',
    author: 'Alex Morgan',
    authorRole: 'Community Contributor',
    date: 'Oct 18, 2026',
    readTime: '4 min read',
    icon: BookOpen,
    color: 'blue',
    featured: true,
    tags: ['Library', 'Management System', 'Web App'],
    technologies: ['React', 'Node.js', 'Database'],
    github: '',
    demo: '',
  },
  {
    id: 2,
    title: 'Building Your First Java Desktop Application',
    excerpt:
      'Learn the essential parts of a desktop application, from interface design to organizing application logic.',
    content: `
Java desktop applications are useful for learning event-driven programming and building software that runs directly on a computer.

WHAT TO LEARN

Start with windows, buttons, text fields, tables, and event listeners. Then organize your code into classes responsible for the interface, business logic, and data access.

PROJECT IDEA

Build a resident record manager, inventory application, or student information system.

TIPS

Keep your interface separate from your database operations. Validate user input and handle errors clearly.

Use a sample project as a learning reference, then build your own version.
    `,
    category: 'Tutorials',
    author: 'Jamie Rivera',
    authorRole: 'Developer',
    date: 'Oct 16, 2026',
    readTime: '6 min read',
    icon: Code2,
    color: 'purple',
    featured: false,
    tags: ['Java', 'Desktop App', 'Beginner'],
    technologies: ['Java', 'Swing'],
    github: '',
    demo: '',
  },
  {
    id: 3,
    title: 'A Useful Collection of PHP Developer Tools',
    excerpt:
      'Explore ideas for small utilities that can make everyday development tasks faster and easier.',
    content: `
Small developer tools can save time and provide convenient solutions to repetitive tasks.

TOOL IDEAS

• JSON formatter and validator
• Text encoder and decoder
• Password strength checker
• Date and time converter
• Code snippet organizer

DESIGN CONSIDERATIONS

Keep each tool focused on a clear task. Validate inputs, show helpful error messages, and avoid exposing sensitive user data.

You can combine multiple related tools into a single web application.
    `,
    category: 'Developer Tips',
    author: 'Taylor Chen',
    authorRole: 'Community Member',
    date: 'Oct 14, 2026',
    readTime: '3 min read',
    icon: Lightbulb,
    color: 'yellow',
    featured: false,
    tags: ['PHP', 'Developer Tools', 'Web App'],
    technologies: ['PHP', 'JavaScript'],
    github: '',
    demo: '',
  },
  {
    id: 4,
    title: 'From Project Idea to a Working Web App',
    excerpt:
      'A practical overview of planning features, choosing a stack, and organizing your first release.',
    content: `
A successful project starts with a clearly defined problem and a manageable first version.

STEP 1: DEFINE THE PROBLEM

Identify who will use the application and what task it should make easier.

STEP 2: PLAN THE FEATURES

List the essential features and postpone nonessential improvements until the core workflow works.

STEP 3: CHOOSE YOUR STACK

Choose technologies that suit your needs and your current experience.

STEP 4: BUILD AND TEST

Create a small working version, test important workflows, and improve it using feedback.

STEP 5: DOCUMENT YOUR PROJECT

Include setup instructions, features, screenshots, and links to the source code when available.
    `,
    category: 'Guides',
    author: 'Jordan Lee',
    authorRole: 'Software Developer',
    date: 'Oct 12, 2026',
    readTime: '5 min read',
    icon: Rocket,
    color: 'green',
    featured: false,
    tags: ['Web Development', 'Planning', 'Guide'],
    technologies: ['Any Stack'],
    github: '',
    demo: '',
  },
];

const categories = [
  'All Posts',
  'New Projects',
  'Tutorials',
  'Developer Tips',
  'Guides',
];

function PostIcon({ post, large = false }) {
  const Icon = post.icon || Code2;

  return (
    <div
      className={`blog-post-icon ${post.color || 'blue'} ${
        large ? 'large' : ''
      }`}
    >
      <Icon size={large ? 38 : 25} />
    </div>
  );
}

export default function BlogPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Posts');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) => {
    const query = search.toLowerCase();

    const matchesSearch = [
      post.title,
      post.excerpt,
      post.author,
      post.category,
      ...post.tags,
      ...post.technologies,
    ]
      .join(' ')
      .toLowerCase()
      .includes(query);

    const matchesCategory =
      category === 'All Posts' || post.category === category;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find((post) => post.featured);

  return (
    <main className="blog-page">
      {/* Header */}
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="blog-eyebrow">
            <BookOpen size={16} />
            JUSTINEBON COMMUNITY
          </span>

          <h1>
            Ideas, projects,
            <span> and inspiration.</span>
          </h1>

          <p>
            Discover new systems created by developers, explore
            tutorials, and learn about tools and technologies
            from the community.
          </p>

          <div className="blog-hero-stats">
            <div>
              <strong>{posts.length}</strong>
              <span>Sample articles</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Categories</span>
            </div>
            <div>
              <strong>Community</strong>
              <span>Project discoveries</span>
            </div>
          </div>
        </div>

        <div className="blog-hero-art" aria-hidden="true">
          <div className="blog-art-card blog-art-card-back">
            <Code2 size={28} />
            <span />
            <span />
            <span />
          </div>

          <div className="blog-art-card blog-art-card-front">
            <BookOpen size={42} />
            <strong>Build & Share</strong>
            <span>Ideas become projects.</span>
          </div>
        </div>
      </section>

      {/* Search and filters */}
      <section className="blog-toolbar">
        <div className="blog-heading">
          <div>
            <span className="blog-section-label">THE BLOG</span>
            <h2>Explore articles</h2>
          </div>

          <span className="blog-count">
            {filteredPosts.length} articles
          </span>
        </div>

        <div className="blog-search">
          <Search size={19} />
          <input
            type="search"
            placeholder="Search articles, technologies, authors..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="blog-category-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`blog-filter-button ${
                category === item ? 'active' : ''
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Featured article */}
      {featuredPost && (
        <section className="blog-featured-section">
          <div className="blog-section-title-row">
            <h2>Featured Project</h2>
            <span>Community spotlight</span>
          </div>

          <article className="blog-featured-card">
            <div className="blog-featured-visual">
              <PostIcon post={featuredPost} large />
              <span className="blog-featured-badge">
                <Rocket size={14} />
                NEW PROJECT
              </span>
              <div className="blog-featured-visual-text">
                <span>COMMUNITY SHOWCASE</span>
                <strong>Discover what's being built.</strong>
              </div>
            </div>

            <div className="blog-featured-content">
              <div className="blog-post-meta">
                <span>{featuredPost.category}</span>
                <span>
                  <Clock3 size={14} />
                  {featuredPost.readTime}
                </span>
              </div>

              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>

              <div className="blog-author">
                <div className="blog-author-avatar">
                  <UserRound size={19} />
                </div>
                <div>
                  <strong>{featuredPost.author}</strong>
                  <span>{featuredPost.authorRole}</span>
                </div>
                <span className="blog-post-date">
                  <CalendarDays size={14} />
                  {featuredPost.date}
                </span>
              </div>

              <button
                type="button"
                className="blog-read-button"
                onClick={() => setSelectedPost(featuredPost)}
              >
                Read Project Details
                <ArrowRight size={17} />
              </button>
            </div>
          </article>
        </section>
      )}

      {/* Article list */}
      <section className="blog-articles-section">
        <div className="blog-section-title-row">
          <h2>
            {category === 'All Posts' ? 'Latest Articles' : category}
          </h2>
          <span>Discover something new</span>
        </div>

        <div className="blog-article-grid">
          {filteredPosts
            .filter((post) => post.id !== featuredPost?.id)
            .map((post) => (
              <article className="blog-article-card" key={post.id}>
                <div className={`blog-article-cover ${post.color}`}>
                  <PostIcon post={post} large />

                  <span className="blog-cover-category">
                    {post.category}
                  </span>
                </div>

                <div className="blog-article-body">
                  <div className="blog-article-date">
                    <CalendarDays size={14} />
                    {post.date}
                    <span>·</span>
                    <Clock3 size={14} />
                    {post.readTime}
                  </div>

                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>

                  <div className="blog-article-tags">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="blog-article-footer">
                    <div className="blog-author compact">
                      <div className="blog-author-avatar">
                        <UserRound size={16} />
                      </div>
                      <div>
                        <strong>{post.author}</strong>
                        <span>{post.authorRole}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="blog-icon-button"
                      title={`Read ${post.title}`}
                      aria-label={`Read ${post.title}`}
                      onClick={() => setSelectedPost(post)}
                    >
                      <ArrowRight size={19} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="blog-empty-state">
            <Search size={32} />
            <h3>No articles found</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </section>

      {/* Full article modal */}
      {selectedPost && (
        <div
          className="blog-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPost(null);
            }
          }}
        >
          <article
            className="blog-article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
          >
            <div className="blog-modal-header">
              <span className="blog-section-label">
                {selectedPost.category}
              </span>

              <button
                type="button"
                className="blog-icon-button"
                aria-label="Close article"
                onClick={() => setSelectedPost(null)}
              >
                <X size={21} />
              </button>
            </div>

            <PostIcon post={selectedPost} large />

            <h2 id="blog-modal-title">{selectedPost.title}</h2>
            <p className="blog-modal-excerpt">{selectedPost.excerpt}</p>

            <div className="blog-modal-author">
              <div className="blog-author-avatar">
                <UserRound size={20} />
              </div>
              <div>
                <strong>{selectedPost.author}</strong>
                <span>
                  {selectedPost.authorRole} · {selectedPost.date}
                </span>
              </div>
            </div>

            <div className="blog-modal-tags">
              <Tag size={15} />
              {selectedPost.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="blog-article-content">
              {selectedPost.content
                .trim()
                .split('\n')
                .map((line, index) => {
                  const text = line.trim();

                  if (!text) return null;

                  if (
                    text === text.toUpperCase() &&
                    text.length > 3 &&
                    !text.startsWith('•')
                  ) {
                    return <h3 key={index}>{text}</h3>;
                  }

                  if (text.startsWith('•')) {
                    return <p key={index} className="blog-content-list-item">{text}</p>;
                  }

                  return <p key={index}>{text}</p>;
                })}
            </div>

            <div className="blog-modal-technologies">
              <h3>Technologies</h3>
              <div className="blog-article-tags">
                {selectedPost.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="blog-modal-actions">
              {selectedPost.github && (
                <a
                  href={selectedPost.github}
                  target="_blank"
                  rel="noreferrer"
                  className="blog-read-button"
                >
                  Source Code
                  <ExternalLink size={16} />
                </a>
              )}

              {selectedPost.demo && (
                <a
                  href={selectedPost.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="blog-secondary-button"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              )}

              {!selectedPost.github && !selectedPost.demo && (
                <p className="blog-no-links">
                  Source code and demo links have not been added.
                </p>
              )}
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
