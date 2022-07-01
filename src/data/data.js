import React from "react";
import {
  MdOutlinePlayLesson,
  MdOutlineFeedback,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import {
  BiBookAlt,
  BiUser,
  BiCalendarEvent,
  BiFolder,
  BiCodeBlock,
  BiHelpCircle,
} from "react-icons/bi";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        path: "dashboard",
        icon: <MdOutlineSpaceDashboard />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "My Profile",
        path: "profile",
        icon: <BiUser />,
      },
      {
        name: "My Courses",
        path: "courses",
        icon: <BiBookAlt />,
      },
      {
        name: "All Lessons",
        path: "lessons",
        icon: <MdOutlinePlayLesson />,
      },
    ],
  },
  {
    title: "Apps & Recourses",
    links: [
      {
        name: "My Calendar",
        path: "calendar",
        icon: <BiCalendarEvent />,
      },
      {
        name: "Resources",
        path: "resources",
        icon: <BiFolder />,
      },
      {
        name: "Code Champions",
        path: "codechampions",
        icon: <BiCodeBlock />,
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        name: "Knowledge Base",
        path: "knowledgebase",
        icon: <BiHelpCircle />,
      },
      {
        name: "Feedback",
        path: "feedback",
        icon: <MdOutlineFeedback />,
      },
    ],
  },
];
