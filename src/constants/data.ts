import Gym from "../../public/images/blogs/gym.png";
import Author from "../../public/images/blogs/author.png";
import blogSecond from "../../public/images/blogs/blog-2.jpg";
import blogThird from "../../public/images/blogs/blog-3.jpg";
import blogForth from "../../public/images/blogs/blog-4.jpg";
import blogFifth from "../../public/images/blogs/blog-5.png";
import blogSixth from "../../public/images/blogs/blog-6.png";
import userOne from "../../public/images/blogs/user-1.png";
import userSecond from "../../public/images/blogs/user-2.png";
import userThird from "../../public/images/blogs/user-3.png";

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
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 2,
    slug: "5-tips-for-better-cardio-sessions",
    title: "5 Tips for Better Cardio Sessions",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 3,
    slug: "meal-prep-basics-for-gym-enthusiasts",
    title: "Meal Prep Basics for Gym Enthusiasts",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 4,
    slug: "building-core-strength-exercises-and-benefits",
    title: "Building Core Strength: Exercises and Benefits",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 5,
    slug: "two-women-in-local-stand-are-chatting-during-morning",
    title: "Two women in local stand are chatting during morning",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 6,
    slug: "enjoying-the-sunset-on-padar-island-together",
    title: "Enjoying the sunset on Padar island together",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
  {
    id: 7,
    slug: "the-lush-green-surroundings-of-the-campgrounds-create-a",
    title: "The lush green surroundings of the campgrounds create a..",
    featuredImage: Gym,
    blogCategory: "travel",
    components: {
      contentSide: [
        {
          componentName: "AuthorDetailsSort",
          authorImage: Author,
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
          authorImage: Author,
          authorBio:
            "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
        },
        {
          componentName: "NextPrevBlogs",
          nextBlogData: {
            title: "5 Tips for Better Cardio Sessions",
            url: "/blog/5-tips-for-better-cardio-sessions",
          },
          prevBlogData: {
            title: "Meal Prep Basics for Gym Enthusiasts",
            url: "/blog/meal-prep-basics-for-gym-enthusiasts",
          },
        },
      ],
      exploreSide: [
        {
          componentName: "ExploreBlogs",
          blogs: [
            {
              title: "Two women in local stand are chatting during morning..",
              category: "Culinary",
              date: "13 Jun 2022",
              url: "/blog/two-women-in-local-stand-are-chatting-during-morning",
              articleImage: blogSixth,
            },
            {
              title: "Enjoying the sunset on Padar island together",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/enjoying-the-sunset-on-padar-island-together",
              articleImage: blogSixth,
            },
            {
              title:
                "The lush green surroundings of the campgrounds create a..",
              category: "Travel",
              date: "22 Jul 2022",
              url: "/blog/the-lush-green-surroundings-of-the-campgrounds-create-a",
              articleImage: blogFifth,
            },
          ],
        },
        {
          componentName: "Spacer",
          height: 100,
        },
        {
          componentName: "TourGuides",
          guides: [
            {
              guideName: "Miranda Rachel",
              guideLocation: "Jombang, Jawa timur",
              starts: 4,
              profileImage: userOne,
            },
            {
              guideName: "Danielle Marsh",
              guideLocation: "Wonosobo, Jawa ten..",
              starts: 4,
              profileImage: userSecond,
            },
            {
              guideName: "Kang Haerin",
              guideLocation: "Bandung, Jawa barat",
              starts: 5,
              profileImage: userThird,
            },
          ],
        },
      ],
    },
    relatedArticles: [
      {
        title: "The Ultimate Guide to Full-Body Workouts",
        url: "/blog/the-ultimate-guide-to-full-body-workouts",
        articleImage: Gym,
        content:
          "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.",
        createdBy: "Alex Carter",
      },
      {
        title: "5 Tips for Better Cardio Sessions",
        url: "/blog/5-tips-for-better-cardio-sessions",
        articleImage: blogSecond,
        content:
          "Improve your cardio performance with these simple yet effective techniques to maximize stamina and get the most from each workout.",
        createdBy: "Maya Lee",
      },
      {
        title: "Meal Prep Basics for Gym Enthusiasts",
        url: "/blog/meal-prep-basics-for-gym-enthusiasts",
        articleImage: blogThird,
        content:
          "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
        createdBy: "Jordan Smith",
      },
      {
        title: "Building Core Strength: Exercises and Benefits",
        url: "/blog/building-core-strength-exercises-and-benefits",
        articleImage: blogForth,
        content:
          "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core power.",
        createdBy: "Emma Rodriguez",
      },
    ],
  },
];
