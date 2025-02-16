"use client";
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { toggleFollow } from '@/actions/user.actions';

export default function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFollow = async () => {
    setIsLoading(true);

    try {
      await toggleFollow(userId);
      toast.success("Вы успешно подписались на пользователя");
    } catch (error) {
      console.log("Ошибка подписки на пользователя - ", error);
      toast.error("Ошибка при попытке подписаться на пользователя");
    }
    finally {
      setIsLoading(false);
    }

  };

  return (
    <Button size={"sm"} variant={"secondary"} onClick={handleFollow} disabled={isLoading} className='w-20'>
      {isLoading ? <Loader2Icon className='w-4 h-4 animate-spin' /> : "Подписаться"}
    </Button>
  )
}
