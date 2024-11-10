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
    content: string;
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
