"use client";

import { useState } from "react";

// react-icons
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function ExpandablePanel({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 items-center justify-between">
        <div className="flex items-center">{header}</div>
        <div onClick={handleExpand} className="cursor-pointer">
          {expanded ? <GoChevronUp /> : <GoChevronDown />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
}
