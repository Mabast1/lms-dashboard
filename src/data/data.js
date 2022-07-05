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
    title: "Courses",
    path: "courses",
    count: "10",
    iconColor: "#fff",
    iconBg: "var(--primary-color)",
    pcColor: "text-red-600",
  },
  {
    icon: <MdOutlinePlayLesson />,
    title: "Lessons",
    path: "lessons",
    count: "150",
    iconColor: "#fff",
    iconBg: "var(--secondary-color)",
    pcColor: "text-green-600",
  },

  {
    icon: <MdOutlineGroups />,
    title: "Organizations",
    path: "organizations",
    count: "3",
    iconColor: "#fff",
    iconBg: "var(--secondary2-color)",
    pcColor: "text-green-600",
  },
  {
    icon: <BiCodeBlock />,
    title: "Code Champions",
    path: "codechampions",
    iconColor: "#fff",
    iconBg: "var(--gray-color)",
    pcColor: "text-green-600",
  },
  {
    icon: <MdOutlineFeedback />,
    title: "Feedback",
    path: "feedback",
    iconColor: "#fff",
    iconBg: "var(--blue-color)",
    pcColor: "text-red-600",
  },
];
