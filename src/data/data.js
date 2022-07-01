import React from "react";
import {
  MdDashboard,
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
        name: "dashboard",
        icon: <MdOutlineSpaceDashboard />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "my profile",
        path: "profile",
        icon: <BiUser />,
      },
      {
        name: "my courses",
        path: "courses",
        icon: <BiBookAlt />,
      },
      {
        name: "all lessons",
        path: "lessons",
        icon: <MdOutlinePlayLesson />,
      },
    ],
  },
  {
    title: "Apps & Recourses",
    links: [
      {
        name: "my calendar",
        path: "calendar",
        icon: <BiCalendarEvent />,
      },
      {
        name: "resources",
        path: "resources",
        icon: <BiFolder />,
      },
      {
        name: "code champions",
        path: "codechampions",
        icon: <BiCodeBlock />,
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        name: "knowledge base",
        path: "knowledgebase",
        icon: <BiHelpCircle />,
      },
      {
        name: "feedback",
        path: "feedback",
        icon: <MdOutlineFeedback />,
      },
    ],
  },
];
