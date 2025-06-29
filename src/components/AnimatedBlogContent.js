"use client";

import parse, { domToReact } from "html-react-parser";
import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBlogContent({ html }) {
  const options = {
    replace: (domNode) => {
      if (domNode.type === "tag") {
        const TagName = domNode.name;

        if (["p", "h1", "h2", "h3", "li"].includes(TagName)) {
          // Get the correct motion component
          const MotionTag = motion[TagName];
          return (
            <MotionTag
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="transition-all"
            >
              {domToReact(domNode.children, options)}
            </MotionTag>
          );
        }
      }
      // Return undefined for other nodes
      return undefined;
    },
  };

  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {parse(html, options)}
    </div>
  );
}
