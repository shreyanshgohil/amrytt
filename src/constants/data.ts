const htmlString = `
  <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <hr/>
  <p><strong>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</strong></p>
  <hr/>
  <p>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
  <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>
`;

export const blogs = [
  {
    id: 1,
    slug: "the-ultimate-guide-to-full-body-workouts",
    title: "The Ultimate Guide to Full-Body Workouts",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "BlogContent",
          content: htmlString,
        },
        {
          componentName: "AuthorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "#",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "#",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "#",
        articleImage: "#",
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "#",
        articleImage: "#",
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "#",
        articleImage: "#",
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "#",
        articleImage: "#",
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
    ],
  },
  {
    id: 2,
    slug: "5-tips-for-better-cardio-sessions",
    title: "5 Tips for Better Cardio Sessions",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },
  {
    slug: "meal-prep-basics-for-gym-enthusiasts",
    title: "Meal Prep Basics for Gym Enthusiasts",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },
  {
    slug: "building-core-strength-exercises-and-benefits",
    title: "Building Core Strength: Exercises and Benefits",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },
  {
    slug: "two-women-in-local-stand-are-chatting-during-morning",
    title: "Two women in local stand are chatting during morning",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },

  {
    slug: "enjoying-the-sunset-on-padar-island-together",
    title: "Enjoying the sunset on Padar island together",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },
  {
    slug: "the-lush-green-surroundings-of-the-campgrounds-create",
    title: "The lush green surroundings of the campgrounds create a..",
    featuredImage: "/image/blog/gym.png",
    blogCategory: "travel",
    author: {
      component: "author",
    },
    content: htmlString,
    components: {
      constentSide: [
        {
          componentName: "authorDetailsSort",
          authorImage: "",
          authorName: "Alex Carter",
          createdAt: "23 January 2025",
        },
        {
          componentName: "blogContent",
          content: htmlString,
        },
        {
          componentName: "authorDetails",
          authorName: "Alex Carter",
          authorImage: "",
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "nextPrevBlogs",
          prevBlogId: 1,
          nextBlogId: 2,
        },
      ],
      exploreSide: [
        {
          componentName: "categoryBlogs",
          blogs: [1, 2, 3],
        },
        {
          componentName: "spacer",
          height: 100,
        },
        {
          componentName: "tourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: "",
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: "",
            },
          ],
        },
      ],
    },
    reletedBlogs: [1, 2, 3, 4],
  },
];
