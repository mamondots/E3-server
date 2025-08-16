import { ObjectId } from 'mongoose';

export type TBlog = {
  title: string;
  slug: string;
  image: string;
  description: string;
  author: ObjectId;
  tag: string;
  status: 'active' | 'inactive';
};
