"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import { useAuth, useClerk } from "@clerk/nextjs";

import Link from "next/link";

const items = [
  {
    title: "History",
    url: "/playlists/history",
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: "Liked videos",
    url: "/playlists/liked",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "All playlists",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];

export const PersonalSection = () => {
  const { isSignedIn } = useAuth();
  const clerk = useClerk();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((i) => (
            <SidebarMenuItem key={i.title}>
              <SidebarMenuButton
                tooltip={i.title}
                asChild
                isActive={false} // TODO: change to look to the current path
                onClick={(e) => {
                  if (!isSignedIn && i.auth) {
                    e.preventDefault();
                    return clerk.openSignIn();
                  }
                }}
              >
                <Link href={i.url} className='flex items-center gap-4'>
                  <i.icon />
                  <span className='text-sm'>{i.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}{" "}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
