import { ReactNode } from "react";

export interface WidgetCardProps {
    src: string;
}

export interface AlloyWheelsCardProps {
    title: string;
    price: number;
    img: string;
}

export interface CommentCardProps {
    name: string;
    location: string;
    img: string;
}

export interface CommentCardComponentProps extends CommentCardProps {
    isSelected: boolean;
    onCardClick: () => void;
}

export interface StickyCardsProps {
    index: number;
    type: string;
    title: string;
    desc: string;
    slug: string;
    image: string;
}

export interface PageBannerProps {
    title: string;
}

export interface TeamCardProps {
    img: string;
    name: string;
    job: string;
    id: string;
}


export interface ProgressBarProps {
    progress: number;
}

export interface TeamMember {
    _id: string;
    image: string;
    name: string;
    job: string;
    skills: {
        expertise: number;
        efficiency: number;
        proficiency: number;
    };
    createAt: string;
}



export interface AccordionProps {
    title: string;
    content: React.ReactNode;
}

export interface PricingCardProps {
    title: string;
    price: number;
    isActive: boolean;
}

export interface PaintProtectionProps {
    title: string;
    index: number;
}

export interface BlogCardProps {
    _id: string;
    title: string;
    img: string;
    content: string;
    commentCount: number;

}
export interface BlogProps {
    _id: string;
    title: string;
    image: string;
    content: string;
    comments: {
        _id: string;
        name: string;
        location: string;
        comment: string;
    }[];
}

export interface MiniBlogCardProps {
    title: string;
    img: string;
}

export interface TagProps {
    text: string;
}


export interface BlogCardHomeProps {
    title: string;
    img: string;
    commentCount: number;
    _id: string;
}

export interface Blog {
    _id: string;
    title: string;
    image: string;
    comments: { text: string }[];
}

export interface BlogsResponse {
    totalCount: number;
    blogs: Blog[];
}

export interface YouMayLikeBlogProps {
    title: string;
    img: string;
}


export interface ShopCustomCheckboxProps {

    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: ReactNode;
}


export interface Comment {
    publisher: string;
    content: string;
    rating: number;
    _id: string;
}

export interface ShopCardData {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: string;
    brand: string;
    rating: number;
    comments: Comment[];
}


export interface ShopCardProps {
    title: string;
    price: number;
    rating: number;
    image: string;
    id: string;
    category: string;
}

export interface ShopCardModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    price: number;
    rating: number;
    image: string;
    id: string;
    category: string;

}