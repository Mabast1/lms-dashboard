import React from "react";
import {
  MdOutlinePlayLesson,
  MdOutlineFeedback,
  MdOutlineSpaceDashboard,
  MdOutlineGroups,
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
        path: "",
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
    title: "Apps",
    links: [
      {
        name: "My Calendar",
        path: "calendar",
        icon: <BiCalendarEvent />,
      },
      {
        name: "Code Champions",
        path: "codechampions",
        icon: <BiCodeBlock />,
      },
      {
        name: "My Organizations",
        path: "organizations",
        icon: <MdOutlineGroups />,
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        name: "Resources",
        path: "resources",
        icon: <BiFolder />,
      },
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

export const dashboardButtons = [
  {
    icon: <BiBookAlt />,
    title: "My Courses",
    path: "courses",
    iconColor: "#fff",
    iconBg: "#614daa",
    pcColor: "text-red-600",
  },
  {
    icon: <MdOutlinePlayLesson />,
    title: "All Lessons",
    path: "lessons",
    iconColor: "#000",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "text-green-600",
  },
  {
    icon: <BiCodeBlock />,
    title: "Code Champions",
    path: "codechampions",
    iconColor: "#f7c51b",
    iconBg: "#463a2c",

    pcColor: "text-green-600",
  },
  {
    icon: <MdOutlineGroups />,
    title: "My Organizations",
    path: "organizations",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "text-green-600",
  },
  {
    icon: <MdOutlineFeedback />,
    title: "Feedback",
    path: "feedback",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "text-red-600",
  },
];
