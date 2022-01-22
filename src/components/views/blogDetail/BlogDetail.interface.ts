
export interface News {
    id: string;
    image: string;
    title: string;
    shortDescription: string;
    description: {
        title: string;
        text: string[];
    }[];
    date: string;
    writer: string;
    originalUrl: string;
    original: string;
    prev: string;
    next: string;
}