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
        name: "profile",
        icon: <BiUser />,
      },
      {
        name: "courses",
        icon: <BiBookAlt />,
      },
      {
        name: "lessons",
        icon: <MdOutlinePlayLesson />,
      },
    ],
  },
  {
    title: "Apps & Recourses",
    links: [
      {
        name: "calendar",
        icon: <BiCalendarEvent />,
      },
      {
        name: "resources",
        icon: <BiFolder />,
      },
      {
        name: "code champions",
        icon: <BiCodeBlock />,
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        name: "knowledgebase",
        icon: <BiHelpCircle />,
      },
      {
        name: "feedback",
        icon: <MdOutlineFeedback />,
      },
    ],
  },
];
