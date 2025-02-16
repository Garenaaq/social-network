"use client";

import { useUser } from '@clerk/nextjs';
import { Post } from '@prisma/client'
import React, { useState } from 'react'

export default function PostCard({ post, dbUserId }: { post: Post, dbUserId: string | null }) {

  const { user } = useUser();
  const [newComment, setNewComment] = useState("");
  const [isCommenting, setIsCommenting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div>PostCard</div>
  )
}
