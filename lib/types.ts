import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type IPostStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";
// enum Role {
//   TENANT
//   LANDLORD
//   ADMIN
// }

// enum UserStatus {
//   ACTIVE
//   BANNED
// }

// enum RentalRequestStatus {
//   PENDING
//   APPROVED
//   REJECTED
//   ACTIVE
//   COMPLETED
// }

// enum SubscriptionStatus {
//   ACTIVE
//   INACTIVE
//   EXPIRED
//   CANCELED
// }

export type IAuthor = {
  id: string;
  name: string;
  email: string;
  activeStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
};

export type IComment = {
  id: string;
  content: string;
  status: string;
  postId: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
};


export type IUser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    password?: string;
    phone: string;
    profilePhoto: string;
    role: string;
    status: string;
    stripeCustomerId?: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type NavbarProps = {
  user: IUser;
};

export type ISidebarItem = {
  label: string;
  href: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};
